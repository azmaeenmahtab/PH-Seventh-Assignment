import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import friends from '../data/friends.json'
import { useTimeline } from '../context/TimelineContext'

function Detail() {
	const { id } = useParams()
	const friend = friends.find((item) => item.id === Number(id))
	const { addTimelineEntry } = useTimeline()

	if (!friend) {
		return (
			<section className="bg-[#f3f5f8] px-4 py-12 sm:px-6 md:py-16">
				<div className="mx-auto max-w-225 rounded-xl border border-slate-200 bg-white p-6 text-center sm:p-8">
					<h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Friend not found</h2>
					<p className="mt-3 text-slate-500">The profile you opened does not exist.</p>
					<Link to="/" className="btn mt-6 border-none bg-[#0f5c45] px-5 text-white hover:bg-[#0c4d3a]">
						Back to Dashboard
					</Link>
				</div>
			</section>
		)
	}

	const statusStyles = {
		overdue: 'bg-[#ef4444] text-white',
		'almost due': 'bg-[#f4b63e] text-white',
		'on-track': 'bg-[#1f7a4a] text-white',
	}

	const statusLabel = {
		overdue: 'Overdue',
		'almost due': 'Almost Due',
		'on-track': 'On-Track',
	}

	const formattedDate = new Date(friend.next_due_date).toLocaleDateString('en-US', {
		month: 'short',
		day: 'numeric',
		year: 'numeric',
	})

	const handleQuickCheckIn = (interactionType) => {
		addTimelineEntry(interactionType, friend)
		toast.success(`${interactionType} with ${friend.name} added to timeline`)
	}

	return (
		<section className="bg-[#f3f5f8] px-4 py-12 md:py-16">
			<div className="mx-auto grid max-w-6xl gap-4 lg:grid-cols-[1fr_2.1fr]">
				<div className="space-y-3">
					<div className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm">
						<img src={friend.picture} alt={friend.name} className="mx-auto h-15 w-15 rounded-full object-cover" />
						<h2 className="mt-3 text-2xl font-bold text-slate-800 sm:text-3xl">{friend.name}</h2>
						<p className="mt-1 text-sm text-slate-500">{friend.days_since_contact}d ago</p>
						<div className="mt-3 flex flex-wrap justify-center gap-2">
							{friend.tags.map((tag) => (
								<span key={tag} className="rounded-full bg-[#c9f2d9] px-3 py-[2px] text-[11px] font-semibold uppercase text-[#2e6b4d]">
									{tag}
								</span>
							))}
						</div>
						<div className="mt-3">
							<span className={`rounded-full px-3 pt-[4px] pb-[6px] text-[11px] font-semibold ${statusStyles[friend.status]}`}>
								{statusLabel[friend.status]}
							</span>
						</div>
						<p className="mt-4 text-sm italic text-slate-500">"{friend.bio}"</p>
						<p className="mt-1 text-xs text-slate-400">Preferred: email</p>
					</div>

					<button className="btn w-full bg-white text-slate-700 border-slate-200 hover:bg-slate-50">Snooze 2 Weeks</button>
					<button className="btn w-full bg-white text-slate-700 border-slate-200 hover:bg-slate-50">Archive</button>
					<button className="btn w-full bg-white text-red-500 border-slate-200 hover:bg-red-50">Delete</button>
				</div>

				<div className="space-y-4">
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
						<div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
							<p className="text-3xl font-bold text-[#0f5c45] sm:text-4xl">{friend.days_since_contact}</p>
							<p className="mt-2 text-sm text-slate-500">Days Since Contact</p>
						</div>
						<div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
							<p className="text-3xl font-bold text-[#0f5c45] sm:text-4xl">{friend.goal}</p>
							<p className="mt-2 text-sm text-slate-500">Goal (Days)</p>
						</div>
						<div className="rounded-lg border border-slate-200 bg-white p-5 text-center">
							<p className="text-xl font-bold text-[#215640] sm:text-2xl">{formattedDate}</p>
							<p className="mt-2 text-sm text-slate-500">Next Due</p>
						</div>
					</div>

					<div className="rounded-lg border border-slate-200 bg-white p-5">
						<div className="flex flex-wrap items-center justify-between gap-3">
							<h3 className="text-2xl font-semibold text-[#234f42] sm:text-3xl">Relationship Goal</h3>
							<button className="btn btn-sm bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200">Edit</button>
						</div>
						<p className="mt-3 text-slate-600">
							Connect every <span className="font-bold text-slate-800">{friend.goal} days</span>
						</p>
					</div>

					<div className="rounded-lg border border-slate-200 bg-white p-5">
						<h3 className="text-2xl font-semibold text-[#234f42] sm:text-3xl">Quick Check-In</h3>
						<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
							<button onClick={() => handleQuickCheckIn('Call')} className="btn h-16 bg-[#f5f7f9] text-slate-800 border-slate-200 hover:bg-slate-100">
								Call
							</button>
							<button onClick={() => handleQuickCheckIn('Text')} className="btn h-16 bg-[#f5f7f9] text-slate-800 border-slate-200 hover:bg-slate-100">
								Text
							</button>
							<button onClick={() => handleQuickCheckIn('Video')} className="btn h-16 bg-[#f5f7f9] text-slate-800 border-slate-200 hover:bg-slate-100">
								Video
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Detail
