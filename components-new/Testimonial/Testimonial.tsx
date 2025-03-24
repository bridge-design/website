'use client'

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react'
import classnames from 'classnames'
import { ArrowRight, ArrowLeft } from '@carbon/icons-react'
import Swiper from 'swiper'
import { Scrollbar, Navigation, FreeMode } from 'swiper/modules'
import { useDebouncedCallback } from 'use-debounce'
import QuotationIcon from './quotation-icon.svg'
import { Avatar } from '../Avatar/Avatar'

Swiper.use([Scrollbar, Navigation, FreeMode])

interface TestimonialItemProps {
  name: string
  text: string
  avatar?: string
  position?: string
  colors?: string
  narrow?: boolean
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({
  name,
  text,
  avatar,
  position,
  colors,
  narrow,
}) => (
  <div className="swiper-slide mr-4 transform transition duration-300 ease-out last:mr-0 motion-safe:hover:scale-105 md:mr-8">
    <div
      className={classnames(
        'flex h-full w-[280px] select-none flex-col rounded-[4px] p-3 sm:w-[380px] md:p-6',
        colors
      )}
    >
      <QuotationIcon className="mb-4 h-8 w-8" />
      <div className="-mt-5 px-3 pb-3 md:px-4 md:pb-4">
        <p className={classnames('', narrow ? 'text-lg' : 'text-xl')}>{text}</p>
        <div className="mt-6 flex items-center gap-4">
          {avatar && <Avatar member={{ photoUrl: avatar }} />}
          <div>
            <div className="font-bold">{name}</div>
            {position && (
              <div className="text-btg-color-text--disabled -mt-1 text-sm">{position}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
)

interface TestimonialProps {
  testimonials: TestimonialItemProps[]
  title: React.ReactNode
  narrow?: boolean
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonials, title, narrow }) => {
  const swiperNavigationPrevRef = useRef(null)
  const swiperNavigationNextRef = useRef(null)
  const swiperContainerRef = useRef(null)

  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState(false)
  const [isNextButtonDisabled, setNextButtonDisabled] = useState(false)

  const handleResize = useDebouncedCallback(
    useCallback((swiper) => {
      swiper.update()
    }, []),
    1000
  )

  useLayoutEffect(() => {
    if (!swiperContainerRef.current) return

    const swiper = new Swiper(swiperContainerRef.current, {
      freeMode: {
        enabled: true,
        momentum: false,
      },
      watchOverflow: true,
      speed: 600,
      spaceBetween: 0,
      slidesPerView: 'auto',
      navigation: {
        nextEl: swiperNavigationNextRef.current,
        prevEl: swiperNavigationPrevRef.current,
      },
      on: {
        /* set state of prev/next buttons */
        slideChange: (swiper) => {
          const { isBeginning, isEnd } = swiper
          setPrevButtonDisabled(isBeginning)
          setNextButtonDisabled(isEnd)
        },
      },
      breakpoints: {
        1024: {
          freeMode: false,
        },
      },
    })

    window.addEventListener('resize', () => handleResize(swiper))
    return () => {
      window.removeEventListener('resize', () => handleResize(swiper))
      swiper.destroy()
    }
  }, [handleResize])

  const getArrowColor = (isDisabled: boolean) =>
    isDisabled ? 'text-[var(--btg-color-text--disabled)]' : 'text-[var(--btg-color-text)]'

  const colorClasses = [
    'bg-[var(--btg-color-accent-800)] text-[var(--btg-color-neutral-100)]',
    'bg-[var(--btg-color-accent-500)] text-[var(--btg-color-neutral-1000)]',
    'bg-[var(--btg-color-accent-300)] text-[var(--btg-color-neutral-1000)]',
  ]

  return (
    <div>
      <div
        className={classnames('flex items-center justify-between lg:items-baseline', {
          'max-w-[768px]': narrow,
          'max-w-[1280px] sm:min-w-full lg:min-w-[1024px]': !narrow,
        })}
      >
        <div>{title}</div>
        <div className="ml-auto flex">
          <button
            ref={swiperNavigationPrevRef}
            className={classnames(getArrowColor(isPrevButtonDisabled), 'mr-2 lg:mr-12')}
          >
            <ArrowLeft size={32} />
          </button>
          <button
            ref={swiperNavigationNextRef}
            className={classnames(getArrowColor(isNextButtonDisabled), 'mr-2 lg:mr-12')}
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
      <div ref={swiperContainerRef} className="swiper-container mt-10">
        <div className="swiper-wrapper ease-out-back flex transition-transform">
          {testimonials.map((item, i) => {
            const colors = colorClasses[i % colorClasses.length]
            return <TestimonialItem key={item.name + i} {...item} colors={colors} narrow={narrow} />
          })}
        </div>
      </div>
    </div>
  )
}
