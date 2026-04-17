import friends from '../data/friends.json'
import { Link } from 'react-router-dom'

function Friends() {
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
			<div className="mx-auto max-w-[1120px]">
				<div className="mb-6 flex items-center justify-between px-1">
					<h3 className="text-2xl font-bold text-slate-800">Your Friends</h3>
					<p className="text-sm text-slate-500">{friends.length} profiles</p>
				</div>

				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
							<h4 className="mt-3 text-[22px] font-semibold leading-tight text-slate-800">{friend.name}</h4>
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
			</div>
		</section>
	)
}

export default Friends
