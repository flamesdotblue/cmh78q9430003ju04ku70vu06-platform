import { useMemo, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import Hero from './components/Hero';
import MenuGrid from './components/MenuGrid';
import Cart from './components/Cart';
import Footer from './components/Footer';

const initialProducts = [
  { id: 'm-1', name: 'Margherita Pizza', price: 9.5, tag: 'Popular', color: 'from-rose-100 to-rose-50', emoji: '🍕' },
  { id: 'm-2', name: 'Sushi Platter', price: 18.0, tag: 'Chef’s Pick', color: 'from-blue-100 to-indigo-50', emoji: '🍣' },
  { id: 'm-3', name: 'Vegan Bowl', price: 12.0, tag: 'Healthy', color: 'from-emerald-100 to-green-50', emoji: '🥗' },
  { id: 'm-4', name: 'Iced Latte', price: 4.5, tag: 'New', color: 'from-amber-100 to-yellow-50', emoji: '🥤' },
  { id: 'm-5', name: 'Spicy Ramen', price: 13.0, tag: 'Hot', color: 'from-orange-100 to-rose-50', emoji: '🍜' },
  { id: 'm-6', name: 'Avocado Toast', price: 7.0, tag: 'Brunch', color: 'from-lime-100 to-emerald-50', emoji: '🥑' },
];

export default function App() {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState({}); // { [id]: { product, qty } }
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const current = prev[product.id]?.qty || 0;
      return { ...prev, [product.id]: { product, qty: current + 1 } };
    });
  };

  const decrementFromCart = (productId) => {
    setCart((prev) => {
      const item = prev[productId];
      if (!item) return prev;
      const qty = Math.max(0, item.qty - 1);
      const next = { ...prev };
      if (qty === 0) delete next[productId];
      else next[productId] = { ...item, qty };
      return next;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const totalQty = useMemo(() => Object.values(cart).reduce((sum, i) => sum + i.qty, 0), [cart]);
  const totalPrice = useMemo(() => Object.values(cart).reduce((sum, i) => sum + i.qty * i.product.price, 0), [cart]);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onStartOrder={() => {
        const el = document.getElementById('menu');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }} />

      <main className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section id="menu" className="py-12 sm:py-16">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Explore the menu</h2>
              <p className="mt-1 text-slate-500">Modern, minimalist, and made to order.</p>
            </div>
          </div>
          <MenuGrid products={products} onAdd={addToCart} />
        </section>
      </main>

      <button
        aria-label="Open cart"
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-white shadow-xl shadow-slate-900/20 transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 sm:bottom-8 sm:right-8"
      >
        <ShoppingCart className="h-5 w-5" />
        <span className="text-sm font-medium">Cart {totalQty > 0 ? `(${totalQty})` : ''}</span>
      </button>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onAdd={(id) => addToCart(products.find(p => p.id === id))}
        onDecrement={decrementFromCart}
        onRemove={removeFromCart}
        total={totalPrice}
      />

      <Footer />
    </div>
  );
}
