export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Minimal Order. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <a href="#menu" className="hover:text-slate-900">Menu</a>
          <a href="#" className="hover:text-slate-900">Privacy</a>
          <a href="#" className="hover:text-slate-900">Terms</a>
        </nav>
      </div>
    </footer>
  );
}
