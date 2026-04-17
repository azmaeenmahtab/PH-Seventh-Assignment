import plusIcon from '../assets/Plus.png'

function Stats() {
	const statItems = [
		{ value: 10, label: 'Total Friends' },
		{ value: 3, label: 'On Track' },
		{ value: 6, label: 'Need Attention' },
		{ value: 12, label: 'Interactions This Month' },
	]

	return (
		<section className="border-b border-slate-200 bg-[#f3f5f8] px-4 py-8 sm:px-6 md:py-10">
			<div className="mx-auto max-w-6xl text-center">
				<h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl md:text-5xl">
					Friends to keep close in your life
				</h2>

				<p className="mx-auto mt-4 max-w-140 text-sm leading-6 text-slate-500 md:text-base">
					Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
				</p>

				<button className="btn mt-6 gap-2 border-none bg-[#0f5c45] px-4 text-white shadow-none hover:bg-[#0c4d3a]">
					<img src={plusIcon} alt="Plus" className="h-4 w-4" />
					Add a Friend
				</button>

				<div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
					{statItems.map((item) => (
						<div key={item.label} className="rounded-xl border border-slate-200 bg-white px-5 py-6 sm:px-6 sm:py-7">
							<p className="text-3xl font-bold text-[#0f5c45] sm:text-4xl">{item.value}</p>
							<p className="mt-2 text-sm text-slate-500">{item.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Stats
