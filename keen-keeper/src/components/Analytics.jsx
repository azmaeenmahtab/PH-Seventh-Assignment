import { useMemo } from 'react'
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { useTimeline } from '../context/TimelineContext'

const CHART_COLORS = {
  text: '#6E38E5',
  call: '#1F5A49',
  video: '#3BA768',
}

function Analytics() {
  const { timelineEntries } = useTimeline()

  const chartData = useMemo(() => {
    const counts = { text: 0, call: 0, video: 0 }

    timelineEntries.forEach((entry) => {
      const key = entry.type?.toLowerCase()
      if (key in counts) {
        counts[key] += 1
      }
    })

    return [
      { name: 'Text', value: counts.text, color: CHART_COLORS.text },
      { name: 'Call', value: counts.call, color: CHART_COLORS.call },
      { name: 'Video', value: counts.video, color: CHART_COLORS.video },
    ]
  }, [timelineEntries])

  return (
    <section className="bg-[#f3f5f8] px-4 py-10 sm:px-6 md:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-slate-800 sm:text-5xl">Friendship Analytics</h2>

        <div className="mt-6 rounded-xl border border-slate-200 bg-white px-4 py-5 sm:px-6 sm:py-6">
          <h3 className="text-2xl font-semibold text-[#234f42] sm:text-3xl">By Interaction Type</h3>

          <div className="mt-6 h-75 sm:h-85">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="45%"
                  innerRadius="50%"
                  outerRadius="73%"
                  stroke="#ffffff"
                  strokeWidth={8}
                  paddingAngle={3}
                >
                  {chartData.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend
                  verticalAlign="bottom"
                  height={40}
                  iconType="circle"
                  formatter={(value) => <span className="text-sm text-slate-600">{value}</span>}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Analytics
