'use client'

import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'

interface RotatingTextProps {
  /** Array of strings to cycle through */
  texts: string[]
  /** Duration in milliseconds to show each text (default: 2000ms) */
  duration?: number
  /** Duration in milliseconds for the transition animation (default: 300ms) */
  transitionDuration?: number
  /** Animation type: 'fade' or 'slide' (default: 'fade') */
  animation?: 'fade' | 'slide'
  /** Additional CSS classes */
  className?: string
  /** Whether to pause animation on hover (default: false) */
  pauseOnHover?: boolean
  /** Whether to start animation immediately (default: true) */
  autoStart?: boolean
}

export const RotatingText: React.FC<RotatingTextProps> = ({
  texts,
  duration = 2000,
  transitionDuration = 300,
  animation = 'fade',
  className = '',
  pauseOnHover = false,
  autoStart = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Clear any existing timers
  const clearTimers = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  // Start the animation cycle
  const startAnimation = () => {
    if (texts.length <= 1 || isPaused) return

    clearTimers()

    const cycle = () => {
      // Start animation (fade out or slide out)
      setIsAnimating(true)
      
      // After animation out, change text and animate in
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsAnimating(false)
      }, transitionDuration)
    }

    // Start the interval
    intervalRef.current = setInterval(cycle, duration)
  }

  // Stop the animation
  const stopAnimation = () => {
    clearTimers()
  }

  // Handle pause/resume
  useEffect(() => {
    if (autoStart && !isPaused) {
      startAnimation()
    } else {
      stopAnimation()
    }

    return () => clearTimers()
  }, [texts, duration, transitionDuration, animation, isPaused, autoStart])

  // Handle mouse events for pause on hover
  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true)
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false)
    }
  }

  // If no texts provided, return null
  if (!texts || texts.length === 0) {
    return null
  }

  // Dynamic classes based on animation type
  const getAnimationClasses = () => {
    if (animation === 'slide') {
      return classNames(
        'inline-block transition-all duration-300 ease-in-out',
        {
          'opacity-100 translate-y-0': !isAnimating,
          'opacity-0 translate-y-4': isAnimating,
        }
      )
    } else {
      // Default fade animation
      return classNames(
        'inline-block transition-opacity duration-300 ease-in-out',
        {
          'opacity-100': !isAnimating,
          'opacity-0': isAnimating,
        }
      )
    }
  }

  const classes = classNames(
    getAnimationClasses(),
    className
  )

  return (
    <span className="relative inline-block">
      <span
        className={classes}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transitionDuration: `${transitionDuration}ms`,
        }}
      >
        {texts[currentIndex]}
      </span>
    </span>
  )
}

RotatingText.displayName = 'RotatingText'
