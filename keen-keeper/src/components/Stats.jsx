function Stats() {
	const statItems = [
		{ value: 10, label: 'Total Friends' },
		{ value: 3, label: 'On Track' },
		{ value: 6, label: 'Need Attention' },
		{ value: 12, label: 'Interactions This Month' },
	]

	return (
		<section className="bg-[#f3f5f8] px-4 py-8 sm:px-6 md:py-10 border-b border-slate-200">
			<div className="mx-auto max-w-[980px] text-center">
				<h2 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
					Friends to keep close in your life
				</h2>

				<p className="mx-auto mt-4 max-w-[560px] text-sm leading-6 text-slate-500 md:text-base">
					Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
				</p>

				<button className="btn mt-6 border-none bg-[#0f5c45] px-4 text-white shadow-none hover:bg-[#0c4d3a]">
					<img src="../../src/assets/Plus.png" alt="" srcset="" /> Add a Friend
				</button>

				<div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{statItems.map((item) => (
						<div key={item.label} className="rounded-xl border border-slate-200 bg-white px-6 py-7">
							<p className="text-4xl font-bold text-[#0f5c45]">{item.value}</p>
							<p className="mt-2 text-sm text-slate-500">{item.label}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Stats
