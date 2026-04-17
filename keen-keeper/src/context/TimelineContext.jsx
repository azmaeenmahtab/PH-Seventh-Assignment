import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { timelinedata } from '../data/data'

const STORAGE_KEY = 'keenkeeper_timeline_entries'
const TimelineContext = createContext(null)

function getInitialTimeline() {
  if (typeof window === 'undefined') {
    return timelinedata
  }

  try {
    const savedTimeline = localStorage.getItem(STORAGE_KEY)
    if (!savedTimeline) {
      return timelinedata
    }

    const parsedTimeline = JSON.parse(savedTimeline)
    return Array.isArray(parsedTimeline) ? parsedTimeline : timelinedata
  } catch {
    return timelinedata
  }
}

export function TimelineProvider({ children }) {
  const [timelineEntries, setTimelineEntries] = useState(getInitialTimeline)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timelineEntries))
  }, [timelineEntries])

  const addTimelineEntry = (type, friend) => {
    const newEntry = {
      id: Date.now(),
      type,
      friendId: friend.id,
      friendName: friend.name,
      title: `${type} with ${friend.name}`,
      date: new Date().toISOString(),
    }

    setTimelineEntries((previousEntries) => [newEntry, ...previousEntries])
  }

  const value = useMemo(
    () => ({
      timelineEntries,
      addTimelineEntry,
    }),
    [timelineEntries],
  )

  return <TimelineContext.Provider value={value}>{children}</TimelineContext.Provider>
}

export function useTimeline() {
  const context = useContext(TimelineContext)

  if (!context) {
    throw new Error('useTimeline must be used within TimelineProvider')
  }

  return context
}
