import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900 transition hover:text-slate-700"
          href="https://1688global.com.bd/"
        >
          <img className="h-24 w-24" src="/logo.png" alt="1688.global logo" />
          <span> Help Center</span>
        </a>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link className="transition hover:text-slate-900" to="/privacy">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
