'use client'

import React, { useState } from 'react'
import classNames from 'classnames'

export interface TimetableItem {
  time: string
  title: string
  description: string
}

export interface TimetableProps {
  items: TimetableItem[]
  className?: string
  caption?: React.ReactNode
}

type Timezone = 'CEST' | 'BST' | 'EEST'

const timezoneOffsets: Record<Timezone, number> = {
  BST: 1, // GMT+1
  CEST: 2, // GMT+2
  EEST: 3, // GMT+3
}

// Parse time string like "9:30 — 11:30" into start and end hours
const parseTimeRange = (timeString: string): { start: number; end: number } => {
  const [startTime, endTime] = timeString.split('—').map((t) => t.trim())

  const parseTime = (time: string): number => {
    const [hours, minutes] = time.split(':').map(Number)
    return hours + minutes / 60
  }

  return {
    start: parseTime(startTime),
    end: parseTime(endTime),
  }
}

// Format hours back to string format
const formatTime = (hours: number): string => {
  const wholeHours = Math.floor(hours)
  const minutes = Math.round((hours - wholeHours) * 60)
  return `${wholeHours}:${minutes < 10 ? '0' + minutes : minutes}`
}

// Convert time from one timezone to another
const convertTime = (timeString: string, fromTimezone: Timezone, toTimezone: Timezone): string => {
  const { start, end } = parseTimeRange(timeString)

  // Calculate the offset between timezones
  const hourOffset = timezoneOffsets[toTimezone] - timezoneOffsets[fromTimezone]

  // Apply the offset
  const newStart = start + hourOffset
  const newEnd = end + hourOffset

  // Format back to string
  return `${formatTime(newStart)} — ${formatTime(newEnd)}`
}

export const Timetable: React.FC<TimetableProps> = ({ items, className, caption }) => {
  const [timezone, setTimezone] = useState<Timezone>('CEST')

  const handleTimezoneChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimezone(e.target.value as Timezone)
  }

  return (
    <div>
      <div className="mb-4 mt-4 flex justify-start">
        <h3 className="hidden items-center text-3xl lg:flex">
          <label htmlFor="timezone-select-lg" className="mr-2">
            Timezone:
          </label>
          <select
            id="timezone-select-lg"
            value={timezone}
            onChange={handleTimezoneChange}
            className="mt-2 rounded border p-1 text-sm"
          >
            <option value="CEST">CEST (Central European Summer Time)</option>
            <option value="BST">BST (British Summer Time)</option>
            <option value="EEST">EEST (Eastern European Summer Time)</option>
          </select>
        </h3>
        <h3 className="flex items-center text-3xl sm:flex lg:hidden">
          <label htmlFor="timezone-select-sm" className="mr-2">
            Timezone:
          </label>
          <select
            id="timezone-select-sm"
            value={timezone}
            onChange={handleTimezoneChange}
            className="mt-2 rounded border p-1 text-sm"
          >
            <option value="CEST">CEST (Central European...)</option>
            <option value="BST">BST (British...)</option>
            <option value="EEST">EEST (Eastern European...)</option>
          </select>
        </h3>
      </div>

      <table
        className={classNames(
          'text-light-on-background-900 w-full table-auto font-lg text-lg leading-lg tracking-lg',
          className
        )}
      >
        {caption && (
          <caption className="sm:text-smMedium mb-2 text-left font-2xl text-2xl leading-2xl tracking-2xl sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium md:mb-5">
            {caption}
          </caption>
        )}
        <tbody>
          {items.map((item, index) => {
            // Convert time if needed
            const displayTime =
              timezone === 'CEST' ? item.time : convertTime(item.time, 'CEST', timezone)

            return (
              <tr
                key={index}
                className="border-light-on-background-900 flex flex-col border-b py-3 sm:flex-row sm:py-6"
              >
                <td className="w-full pb-2 text-left sm:w-auto sm:min-w-[120px] sm:max-w-[180px] sm:pb-0 sm:pr-4">
                  <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 inline-block p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                    {displayTime}
                  </span>
                </td>
                <td className="flex-1 overflow-hidden overflow-ellipsis pr-2 text-left sm:w-1/2 sm:px-4">
                  <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                    {item.title}
                  </span>
                </td>
                <td className="flex-1 overflow-hidden overflow-ellipsis text-left sm:w-1/2 sm:pl-4">
                  <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                    {item.description}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
