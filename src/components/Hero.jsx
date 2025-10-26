export default function Hero({ onStartOrder }) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_10%,#e0e7ff,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_20%,#fee2e2,transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white to-white" />
      </div>

      <div className="mx-auto flex h-[72vh] min-h-[520px] w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-900/5 backdrop-blur">
            Seamless ordering • Minimal design
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            A modern, aesthetic ordering experience
          </h1>
          <p className="mt-3 max-w-xl text-slate-600">
            Build your order with an elegant interface and subtle interactions. Clean. Fast. Delightful.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={onStartOrder} className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md shadow-slate-900/20 transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-slate-400">
              Start your order
            </button>
            <a href="#menu" className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300">
              Browse menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
