import friends from '../data/friends.json'

function Friends() {
	const statusStyles = {
		overdue: 'badge-error text-white',
		'almost due': 'badge-warning text-slate-800',
		'on-track': 'badge-success text-white',
	}

	return (
		<section className="bg-[#f3f5f8] px-4 py-8 sm:px-6 md:py-10">
			<div className="mx-auto max-w-[1100px]">
				<div className="mb-6 flex items-center justify-between">
					<h3 className="text-2xl font-bold text-slate-800">Your Friends</h3>
					<p className="text-sm text-slate-500">{friends.length} profiles</p>
				</div>

				<div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
					{friends.map((friend) => (
						<div key={friend.id} className="card border border-slate-200 bg-white shadow-sm">
							<div className="card-body p-5">
								<div className="flex items-start justify-between gap-3">
									<div className="flex items-center gap-3">
										<img src={friend.picture} alt={friend.name} className="h-12 w-12 rounded-full object-cover" />
										<div>
											<h4 className="text-lg font-semibold text-slate-800">{friend.name}</h4>
											<p className="text-xs text-slate-500">{friend.email}</p>
										</div>
									</div>
									<span className={`badge ${statusStyles[friend.status]}`}>{friend.status}</span>
								</div>

								<p className="mt-3 text-sm leading-6 text-slate-600">{friend.bio}</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{friend.tags.map((tag) => (
										<span key={tag} className="badge badge-outline border-slate-300 text-slate-600">
											{tag}
										</span>
									))}
								</div>

								<div className="mt-4 grid grid-cols-3 gap-3 rounded-lg bg-slate-50 p-3 text-center">
									<div>
										<p className="text-lg font-bold text-[#0f5c45]">{friend.days_since_contact}</p>
										<p className="text-[11px] text-slate-500">Days</p>
									</div>
									<div>
										<p className="text-lg font-bold text-[#0f5c45]">{friend.goal}</p>
										<p className="text-[11px] text-slate-500">Goal</p>
									</div>
									<div>
										<p className="text-sm font-semibold text-slate-700">{friend.next_due_date}</p>
										<p className="text-[11px] text-slate-500">Due date</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Friends
