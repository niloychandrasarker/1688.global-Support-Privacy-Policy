import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-2 px-4 py-6 text-center text-xs text-slate-400 sm:px-6">
        <Link
          className="text-slate-500 transition hover:text-slate-900"
          to="/privacy"
        >
          Privacy Policy
        </Link>
        <span>(c) 2026 1688.global. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
