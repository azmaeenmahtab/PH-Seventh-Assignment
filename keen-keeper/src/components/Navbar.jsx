import homeVector from '../assets/homeVector.png'
import clock from '../assets/Clock.png'
import chart from '../assets/ChartLine.png'
import { NavLink } from 'react-router-dom'

const getTabClass = (isActive) =>
	isActive
		? 'flex items-center gap-2 rounded-md bg-[#0f5c45] px-4 py-2 text-white'
		: 'flex items-center gap-2 rounded-md px-3 py-2 text-[#6b7280] hover:bg-gray-200'

function Navbar() {
	return (
		<nav className="bg-white px-6 py-3 border-b border-slate-200">
			<div className="mx-auto flex max-w-300 items-center justify-between">
				<h1 className="text-[30px] font-bold leading-none text-[#1f2937]">KeenKeeper</h1>

				<ul className="menu menu-horizontal items-center gap-2 rounded-md p-0 text-[14px]">
					<li>
						<NavLink to="/" end className={({ isActive }) => getTabClass(isActive)}>
							<img src={homeVector} alt="Home" className="h-4 w-4" />
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/timeline" className={({ isActive }) => getTabClass(isActive)}>
							<img src={clock} alt="Timeline" className="h-4 w-4" />
							Timeline
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className={({ isActive }) => getTabClass(isActive)}>
							<img src={chart} alt="Stats" className="h-4 w-4" />
							Stats
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
