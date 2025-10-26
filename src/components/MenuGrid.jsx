import { Plus } from 'lucide-react';

export default function MenuGrid({ products, onAdd }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <article
          key={p.id}
          className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        >
          <div className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-60 blur-2xl transition group-hover:opacity-80`}></div>

          <div className="relative flex items-start justify-between gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 text-3xl">
              <span aria-hidden>{p.emoji}</span>
            </div>
            <span className="rounded-full bg-slate-900/90 px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
              {p.tag}
            </span>
          </div>

          <h3 className="mt-4 text-lg font-semibold text-slate-900">{p.name}</h3>
          <p className="mt-1 text-sm text-slate-600">Crafted with premium ingredients and minimalist flair.</p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-base font-semibold text-slate-900">${p.price.toFixed(2)}</span>
            <button
              onClick={() => onAdd(p)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow focus:outline-none focus:ring-2 focus:ring-slate-300"
            >
              <Plus className="h-4 w-4" /> Add
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
