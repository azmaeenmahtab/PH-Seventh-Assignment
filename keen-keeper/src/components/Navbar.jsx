import homeVector from '../assets/homeVector.png'
import clock from '../assets/Clock.png'
import chart from '../assets/ChartLine.png'

function Navbar() {
	return (
		<nav className="bg-white px-6 py-3 border-b border-slate-200">
			<div className="mx-auto flex max-w-300 items-center justify-between">
				<h1 className="text-[30px] font-bold leading-none text-[#1f2937]">KeenKeeper</h1>

				<ul className="menu menu-horizontal items-center gap-2 rounded-md p-0 text-[14px]">
					<li>
						<a className="flex items-center gap-2 rounded-md bg-[#0f5c45] px-4 py-2 text-white">
							<img src={homeVector} alt="Home" className="h-4 w-4" />
							Home
						</a>
					</li>
					<li>
						<a className="flex items-center gap-2 rounded-md px-3 py-2 text-[#6b7280] hover:bg-gray-200">
							<img src={clock} alt="Timeline" className="h-4 w-4" />
							Timeline
						</a>
					</li>
					<li>
						<a className="flex items-center gap-2 rounded-md px-3 py-2 text-[#6b7280] hover:bg-gray-200">
							<img src={chart} alt="Stats" className="h-4 w-4" />
							Stats
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
