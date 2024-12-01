'use client'

import React, { useLayoutEffect, useRef, useState, useCallback } from 'react'
import classNames from 'classnames'
import { ArrowRight, ArrowLeft } from '@carbon/icons-react'
import Swiper from 'swiper'
import { Scrollbar, Navigation, FreeMode } from 'swiper/modules'
import { useDebouncedCallback } from 'use-debounce'
import QuotationIcon from './quotation-icon.svg'

Swiper.use([Scrollbar, Navigation, FreeMode])

interface TestimonialItemProps {
  name: string
  text: string
  avatar?: string
  colors: string
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, text, avatar, colors }) => (
  <div className="swiper-slide mr-4 transform transition duration-300 ease-out last:mr-0 motion-safe:hover:scale-105 md:mr-8">
    <div
      className={classNames(
        'flex h-full w-[280px] select-none flex-col rounded-[4px] p-3 sm:w-[380px] md:p-6',
        colors
      )}
    >
      <QuotationIcon className="mb-4 h-8 w-8" />
      <div className="-mt-5 px-3 pb-3 md:px-4 md:pb-4">
        <p className="mb-6 text-xl">{text}</p>
        <div className="mt-auto flex items-center">
          {avatar && <img src={avatar} alt={name} className="mr-3 h-12 w-12 rounded-lg" />}
          <p className="text-xl">{name}</p>
        </div>
      </div>
    </div>
  </div>
)

interface TestimonialProps {
  testimonials: TestimonialItemProps[]
  title: React.ReactNode
}

export const Testimonial: React.FC<TestimonialProps> = ({ testimonials, title }) => {
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

  return (
    <div>
      <div className="flex items-center justify-between lg:items-baseline">
        <div>{title}</div>
        <div className="ml-auto flex">
          <button
            ref={swiperNavigationPrevRef}
            className={classNames(getArrowColor(isPrevButtonDisabled), 'mr-2 lg:mr-12')}
          >
            <ArrowLeft size={32} />
          </button>
          <button
            ref={swiperNavigationNextRef}
            className={classNames(getArrowColor(isNextButtonDisabled), 'mr-2 lg:mr-12')}
          >
            <ArrowRight size={32} />
          </button>
        </div>
      </div>
      <div ref={swiperContainerRef} className="swiper-container mt-10">
        <div className="swiper-wrapper ease-out-back flex transition-transform">
          {testimonials.map((item, i) => {
            return <TestimonialItem key={item.name + i} {...item} />
          })}
        </div>
      </div>
    </div>
  )
}
