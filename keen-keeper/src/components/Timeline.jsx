import { useMemo, useState } from 'react'
import { useTimeline } from '../context/TimelineContext'

function Timeline() {
  const { timelineEntries } = useTimeline()
  const [filterType, setFilterType] = useState('all')

  const filteredEntries = useMemo(() => {
    if (filterType === 'all') {
      return timelineEntries
    }

    return timelineEntries.filter((entry) => entry.type.toLowerCase() === filterType)
  }, [filterType, timelineEntries])

  const iconByType = {
    call: '📞',
    text: '💬',
    video: '🎥',
  }

  const formatDate = (rawDate) => {
    const date = new Date(rawDate)
    if (Number.isNaN(date.getTime())) {
      return rawDate
    }

    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    })
  }

  return (
    <section className="bg-[#f3f5f8] px-4 py-10 sm:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-slate-800 sm:text-5xl">Timeline</h2>

        <div className="mt-5 w-full max-w-80">
          <select
            className="select w-full border-slate-200 bg-white text-slate-500"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
          >
            <option value="all">Filter timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </div>

        <div className="mt-6 space-y-3">
          {filteredEntries.length === 0 ? (
            <div className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-slate-500">No timeline entries yet.</div>
          ) : (
            filteredEntries.map((entry) => {
              const normalizedType = entry.type.toLowerCase()

              return (
                <div key={entry.id} className="rounded-lg border border-slate-200 bg-white px-4 py-4 sm:px-5">
                  <p className="flex flex-wrap items-center gap-2 text-base leading-normal text-slate-700 sm:text-lg sm:leading-none">
                    <span className="text-2xl">{iconByType[normalizedType] || '📝'}</span>
                    <span className="font-semibold">{entry.type}</span>
                    <span className="text-slate-500">with {entry.friendName}</span>
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{formatDate(entry.date)}</p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </section>
  )
}

export default Timeline
