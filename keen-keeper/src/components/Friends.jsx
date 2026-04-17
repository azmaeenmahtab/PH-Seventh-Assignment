import { useEffect, useState } from 'react'
import friendsData from '../data/friends.json'
import { Link } from 'react-router-dom'

function Friends() {
	const [friends, setFriends] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const loadFriends = async () => {
			setLoading(true)
			await new Promise((resolve) => setTimeout(resolve, 700))
			setFriends(friendsData)
			setLoading(false)
		}

		loadFriends()
	}, [])

	const statusStyles = {
		'overdue': 'bg-[#ef4444] text-white',
		'almost due': 'bg-[#f4b63e] text-white',
		'on-track': 'bg-[#1f7a4a] text-white',
	}

	const statusLabels = {
		'overdue': 'Overdue',
		'almost due': 'Almost Due',
		'on-track': 'On-Track',
	}

	return (
		<section className="bg-[#f3f5f8] px-4 py-8 sm:px-6 md:py-10">
			<div className="mx-auto max-w-7xl">
				<div className="mb-6 flex flex-col items-start justify-between gap-1 px-1 sm:flex-row sm:items-center">
					<h3 className="text-2xl font-bold text-slate-800 sm:text-3xl">Your Friends</h3>
					<p className="text-sm text-slate-500">{loading ? 'Loading...' : `${friends.length} profiles`}</p>
				</div>

				{loading ? (
					<div>
						<div className="mb-5 flex items-center justify-center gap-2 text-[#234f42]">
							<span className="loading loading-spinner loading-md" />
							<span className="text-sm font-medium">Fetching friends data...</span>
						</div>
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
							{Array.from({ length: 8 }).map((_, index) => (
								<div key={index} className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm">
									<div className="mx-auto h-[58px] w-[58px] animate-pulse rounded-full bg-slate-200" />
									<div className="mx-auto mt-3 h-5 w-30 animate-pulse rounded bg-slate-200" />
									<div className="mx-auto mt-2 h-3 w-18 animate-pulse rounded bg-slate-100" />
									<div className="mt-3 flex justify-center gap-2">
										<div className="h-5 w-14 animate-pulse rounded-full bg-slate-200" />
										<div className="h-5 w-14 animate-pulse rounded-full bg-slate-200" />
									</div>
									<div className="mx-auto mt-3 h-6 w-20 animate-pulse rounded-full bg-slate-200" />
								</div>
							))}
						</div>
					</div>
				) : (
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
						{friends.map((friend) => (
							<Link
								key={friend.id}
								to={`/friend/${friend.id}`}
								className="rounded-lg border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow"
							>
								<img
									src={friend.picture}
									alt={friend.name}
									className="mx-auto h-[58px] w-[58px] rounded-full object-cover"
								/>
								<h4 className="mt-3 text-xl font-semibold leading-tight text-slate-800 sm:text-[22px]">{friend.name}</h4>
								<p className="mt-2 text-[12px] text-slate-400">{friend.days_since_contact}d ago</p>

								<div className="mt-3 flex flex-wrap justify-center gap-2">
									{friend.tags.map((tag) => (
										<span key={tag} className="rounded-full bg-[#c9f2d9] px-3 py-[2px] text-[11px] font-semibold uppercase text-[#2e6b4d]">
											{tag}
										</span>
									))}
								</div>

								<div className="mt-3">
									<span className={`rounded-full px-3 pt-[4px] pb-[6px] text-[11px] font-semibold ${statusStyles[friend.status]}`}>
										{statusLabels[friend.status]}
									</span>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>
		</section>
	)
}

export default Friends
