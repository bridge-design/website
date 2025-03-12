'use client'

import React from 'react'
import classNames from 'classnames'

export interface TimetableItem {
  time: string
  title: string
  description: string
}

export interface TimetableProps {
  items: TimetableItem[]
  className?: string
}

export const Timetable: React.FC<TimetableProps> = ({ items, className }) => {
  return (
    <table className={classNames("text-light-on-background-900 mt-16 w-full table-auto font-lg text-lg leading-lg tracking-lg", className)}>
      <tbody>
        {items.map((item, index) => (
          <tr key={index} className="border-light-on-background-900 flex border-b py-3 md:py-6">
            <td className="w-30 pr-2 text-left sm:w-64 sm:pr-4">
              <span className="text-xsMedium sm:text-smMedium bg-light-on-background-900 text-light-on-background-50 p-1 font-xsMedium leading-xsMedium tracking-xsMedium sm:whitespace-nowrap sm:font-smMedium sm:leading-smMedium sm:tracking-smMedium">
                {item.time}
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
        ))}
      </tbody>
    </table>
  )
} 