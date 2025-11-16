'use client'

import React, { useEffect, useState } from 'react'

export interface TimeDisplayProps {
  /**
   * Time in format "9am", "9:30am", "9pm", "9:30pm", or "9:30 AM"
   * Can be a single time or a range like "9am — 11am"
   */
  time: string
  /**
   * Date in YYYY-MM-DD format
   */
  date: string
  /**
   * Default timezone (default: "CET")
   */
  defaultTimezone?: string
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * Parse a time string like "9am", "9:30am", "9pm", "9:30pm"
 * Returns hours in 24-hour format (0-23.5)
 */
const parseTime = (timeString: string): number => {
  const trimmed = timeString.trim().toLowerCase()
  
  // Handle formats like "9:30am", "9am", "9:30 pm", "9 pm"
  const match = trimmed.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)$/)
  
  if (!match) {
    // Try 24-hour format like "9:30" or "09:30"
    const match24 = trimmed.match(/^(\d{1,2}):(\d{2})$/)
    if (match24) {
      const hours = parseInt(match24[1], 10)
      const minutes = parseInt(match24[2], 10)
      return hours + minutes / 60
    }
    // Fallback: try to parse as number
    const hours = parseFloat(trimmed)
    if (!isNaN(hours)) return hours
    return 9 // Default to 9am if parsing fails
  }
  
  let hours = parseInt(match[1], 10)
  const minutes = match[2] ? parseInt(match[2], 10) : 0
  const meridiem = match[3]
  
  // Convert to 24-hour format
  if (meridiem === 'pm' && hours !== 12) {
    hours += 12
  } else if (meridiem === 'am' && hours === 12) {
    hours = 0
  }
  
  return hours + minutes / 60
}

/**
 * Get UTC offset in hours for a specific timezone at a given date
 */
const getTimezoneOffsetHours = (ianaTimezone: string, date: Date): number => {
  try {
    // Create a formatter for UTC and the target timezone
    const utcFormatter = new Intl.DateTimeFormat('en', {
      timeZone: 'UTC',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    })
    
    const tzFormatter = new Intl.DateTimeFormat('en', {
      timeZone: ianaTimezone,
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
    })
    
    // Format the same date in both timezones
    const utcStr = utcFormatter.format(date)
    const tzStr = tzFormatter.format(date)
    
    // Parse hours and minutes
    const [utcHour, utcMin] = utcStr.split(':').map(Number)
    const [tzHour, tzMin] = tzStr.split(':').map(Number)
    
    // Calculate difference in minutes
    const utcTotalMinutes = utcHour * 60 + utcMin
    const tzTotalMinutes = tzHour * 60 + tzMin
    
    let diffMinutes = tzTotalMinutes - utcTotalMinutes
    
    // Handle day boundary (difference can be up to +/-12 hours = 720 minutes)
    if (diffMinutes > 720) diffMinutes -= 1440 // next day
    if (diffMinutes < -720) diffMinutes += 1440 // previous day
    
    // Convert to hours (round to nearest hour for timezone offsets)
    return Math.round(diffMinutes / 60)
  } catch (error) {
    // Fallback: use local timezone offset (not ideal but better than nothing)
    const offsetMs = date.getTimezoneOffset() * 60 * 1000
    return -offsetMs / (60 * 60 * 1000)
  }
}

/**
 * Map IANA timezone identifiers to common abbreviations
 */
const getTimezoneAbbreviation = (ianaTimezone: string, date: Date): string => {
  // Get UTC offset in hours for this specific timezone
  const offsetHours = getTimezoneOffsetHours(ianaTimezone, date)
  
  // Map common IANA timezones to abbreviations
  const timezoneMap: Record<string, string> = {
    // GMT/UTC
    'Europe/London': offsetHours === 0 ? 'GMT' : 'BST',
    'Europe/Dublin': offsetHours === 0 ? 'GMT' : 'IST',
    'Atlantic/Reykjavik': 'GMT',
    'Africa/Casablanca': 'WET',
    
    // CET/CEST (Central European Time)
    'Europe/Paris': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Berlin': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Amsterdam': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Brussels': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Madrid': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Rome': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Vienna': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Zurich': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Stockholm': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Warsaw': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Prague': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Budapest': offsetHours === 1 ? 'CET' : 'CEST',
    'Europe/Copenhagen': offsetHours === 1 ? 'CET' : 'CEST',
    
    // EET/EEST (Eastern European Time)
    'Europe/Helsinki': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Athens': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Bucharest': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Sofia': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Kiev': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Tallinn': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Vilnius': offsetHours === 2 ? 'EET' : 'EEST',
    'Europe/Riga': offsetHours === 2 ? 'EET' : 'EEST',
    
    // Other common timezones
    'America/New_York': offsetHours === -4 ? 'EDT' : 'EST',
    'America/Chicago': offsetHours === -5 ? 'CDT' : 'CST',
    'America/Denver': offsetHours === -6 ? 'MDT' : 'MST',
    'America/Los_Angeles': offsetHours === -7 ? 'PDT' : 'PST',
    'Asia/Tokyo': 'JST',
    'Asia/Shanghai': 'CST',
    'Australia/Sydney': offsetHours === 10 ? 'AEST' : 'AEDT',
  }
  
  // Check if we have a direct mapping
  if (timezoneMap[ianaTimezone]) {
    return timezoneMap[ianaTimezone]
  }
  
  // Fallback: try to determine from offset and region
  if (ianaTimezone.startsWith('Europe/')) {
    if (offsetHours === 0) return 'GMT'
    if (offsetHours === 1) return 'CET'
    if (offsetHours === 2) return 'EET'
    if (offsetHours === 3) return 'MSK'
  }
  
  // Final fallback: use generic offset
  return offsetHours >= 0 ? `GMT+${offsetHours}` : `GMT${offsetHours}`
}

/**
 * Format hours as a time string
 */
const formatTime = (hours: number): string => {
  const wholeHours = Math.floor(hours)
  const minutes = Math.round((hours - wholeHours) * 60)
  const meridiem = wholeHours >= 12 ? 'PM' : 'AM'
  const displayHours = wholeHours > 12 ? wholeHours - 12 : wholeHours === 0 ? 12 : wholeHours
  
  if (minutes === 0) {
    return `${displayHours} (${meridiem})`
  }
  return `${displayHours}:${minutes < 10 ? '0' + minutes : minutes} (${meridiem})`
}

/**
 * Convert time from default timezone to user's local timezone
 */
const convertToLocalTimezone = (
  timeString: string,
  date: string,
  defaultTimezone: string
): string => {
  if (typeof window === 'undefined') {
    return timeString // Server-side: return original time
  }
  
  try {
    // Check if it's a range (contains "—" or "-")
    const isRange = timeString.includes('—') || timeString.includes(' - ')
    const separator = isRange && timeString.includes('—') ? '—' : ' - '
    
    // Get user's timezone
    const userTimezoneId = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    // Determine timezone offset for the default timezone (CET is UTC+1 in winter, UTC+2 in summer)
    // For simplicity, we'll use UTC+1 for CET (winter time for November/December dates)
    const defaultOffset = defaultTimezone === 'CET' ? '+01:00' : '+00:00'
    
    if (isRange) {
      const [startTime, endTime] = timeString.split(/—|-/).map((t) => t.trim())
      const startHours = parseTime(startTime)
      const endHours = parseTime(endTime)
      
      // Create dates for start and end times in default timezone
      const startMinutes = Math.round((startHours - Math.floor(startHours)) * 60)
      const endMinutes = Math.round((endHours - Math.floor(endHours)) * 60)
      
      const startDateStr = `${date}T${String(Math.floor(startHours)).padStart(2, '0')}:${String(startMinutes).padStart(2, '0')}:00${defaultOffset}`
      const endDateStr = `${date}T${String(Math.floor(endHours)).padStart(2, '0')}:${String(endMinutes).padStart(2, '0')}:00${defaultOffset}`
      
      const startDate = new Date(startDateStr)
      const endDate = new Date(endDateStr)
      
      // Get timezone abbreviation for the converted dates
      const tzAbbr = getTimezoneAbbreviation(userTimezoneId, startDate)
      
      // Format times in user's local timezone (without timezone name)
      const startFormatted = startDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: startMinutes > 0 ? '2-digit' : undefined,
        timeZone: userTimezoneId,
      })
      
      const endFormatted = endDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: endMinutes > 0 ? '2-digit' : undefined,
        timeZone: userTimezoneId,
      })
      
      return `${startFormatted} — ${endFormatted} (${tzAbbr})`
    } else {
      // Single time
      const hours = parseTime(timeString)
      const minutes = Math.round((hours - Math.floor(hours)) * 60)
      
      const dateStr = `${date}T${String(Math.floor(hours)).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:00${defaultOffset}`
      const dateObj = new Date(dateStr)
      
      // Get timezone abbreviation
      const tzAbbr = getTimezoneAbbreviation(userTimezoneId, dateObj)
      
      // Format time in user's local timezone (without timezone name)
      const formatted = dateObj.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: minutes > 0 ? '2-digit' : undefined,
        timeZone: userTimezoneId,
      })
      
      return `${formatted} (${tzAbbr})`
    }
  } catch (error) {
    console.error('Error converting timezone:', error)
    return timeString // Fallback to original time
  }
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({
  time,
  date,
  defaultTimezone = 'CET',
  className,
}) => {
  const [displayTime, setDisplayTime] = useState<string>(time)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== 'undefined') {
      const converted = convertToLocalTimezone(time, date, defaultTimezone)
      setDisplayTime(converted)
    }
  }, [time, date, defaultTimezone])

  return <span className={className}>{mounted ? displayTime : time}</span>
}

