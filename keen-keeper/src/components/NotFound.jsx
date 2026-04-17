import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="bg-[#f3f5f8] px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-175 rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0f5c45]">Error 404</p>
        <h1 className="mt-3 text-4xl font-bold text-slate-800 sm:text-5xl">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-125 text-sm leading-6 text-slate-500 sm:text-base">
          The page you are looking for does not exist or the route is invalid.
        </p>
        <Link to="/" className="btn mt-7 border-none bg-[#0f5c45] px-6 text-white hover:bg-[#0c4d3a]">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
