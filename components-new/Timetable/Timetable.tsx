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
        <div className="flex items-center">
          <label htmlFor="timezone-select" className="mr-2 text-sm">
            Timezone:
          </label>
          <select
            id="timezone-select"
            value={timezone}
            onChange={handleTimezoneChange}
            className="rounded border p-1 text-sm"
          >
            <option value="CEST">CEST (Central European Summer Time)</option>
            <option value="BST">BST (British Summer Time)</option>
            <option value="EEST">EEST (Eastern European Summer Time)</option>
          </select>
        </div>
      </div>

      <table
        className={classNames(
          'text-light-on-background-900 w-full table-auto font-lg text-lg leading-lg tracking-lg',
          className
        )}
      >
        {caption && (
          <caption className="text-2Xl sm:text-smMedium mb-2 text-left font-2Xl leading-2Xl tracking-2Xl sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium md:mb-5">
            {caption}
          </caption>
        )}
        <tbody>
          {items.map((item, index) => {
            // Convert time if needed
            const displayTime =
              timezone === 'CEST' ? item.time : convertTime(item.time, 'CEST', timezone)

            return (
              <tr key={index} className="border-light-on-background-900 flex border-b py-3 md:py-6">
                <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
                  <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                    {displayTime}
                  </span>
                </td>
                <td className="w-1/2 overflow-hidden overflow-ellipsis px-2 text-left sm:px-4">
                  <span className="text-baseMedium sm:text-smMedium font-baseMedium leading-baseMedium tracking-baseMedium sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                    {item.title}
                  </span>
                </td>
                <td className="w-1/2 overflow-hidden overflow-ellipsis pl-2 text-left sm:pl-4">
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
