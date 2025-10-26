import Spline from '@splinetool/react-spline';

export default function Hero({ onStartOrder }) {
  return (
    <section className="relative h-[78vh] w-full min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white"></div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
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
