import { Minus, Plus, Trash2, X, ShoppingCart } from 'lucide-react';

export default function Cart({ isOpen, onClose, items, onAdd, onDecrement, onRemove, total }) {
  const entries = Object.values(items);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`} aria-hidden={!isOpen}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-slate-900/40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md transform bg-white shadow-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-slate-900" />
            <h3 className="text-base font-semibold">Your Cart</h3>
          </div>
          <button onClick={onClose} className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-300">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex h-[calc(100%-168px)] flex-col overflow-hidden">
          <div className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
            {entries.length === 0 && (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <p className="text-slate-600">Your cart is empty</p>
                  <p className="mt-1 text-sm text-slate-500">Add items from the menu to get started.</p>
                </div>
              </div>
            )}

            {entries.map(({ product, qty }) => (
              <div key={product.id} className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 p-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-xl">{product.emoji}</div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{product.name}</div>
                    <div className="mt-0.5 text-xs text-slate-500">${product.price.toFixed(2)} each</div>
                    <div className="mt-2 inline-flex items-center gap-2">
                      <button onClick={() => onDecrement(product.id)} className="rounded-full border border-slate-200 p-1 text-slate-700 hover:bg-slate-50"><Minus className="h-4 w-4" /></button>
                      <span className="min-w-[28px] text-center text-sm font-medium">{qty}</span>
                      <button onClick={() => onAdd(product.id)} className="rounded-full border border-slate-200 p-1 text-slate-700 hover:bg-slate-50"><Plus className="h-4 w-4" /></button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-slate-900">${(qty * product.price).toFixed(2)}</div>
                  <button onClick={() => onRemove(product.id)} className="mt-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs text-rose-600 hover:bg-rose-50"><Trash2 className="h-3.5 w-3.5" /> Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 p-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="font-semibold text-slate-900">${total.toFixed(2)}</span>
            </div>
            <button
              disabled={entries.length === 0}
              className="mt-4 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-md shadow-slate-900/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
            >
              Checkout
            </button>
            <p className="mt-2 text-center text-xs text-slate-500">Secure checkout • Modern UI</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
