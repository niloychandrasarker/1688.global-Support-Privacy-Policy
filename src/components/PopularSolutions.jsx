const solutions = [
  {
    title: "Track Parcel",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="12" width="22" height="16" rx="3" fill="#16a34a" />
        <rect x="28" y="16" width="14" height="12" rx="2" fill="#22c55e" />
        <circle cx="16" cy="32" r="4" fill="#0f766e" />
        <circle cx="32" cy="32" r="4" fill="#0f766e" />
        <path d="M12 10l6 6h-6z" fill="#86efac" />
      </svg>
    ),
  },
  {
    title: "Return Goods",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="14" width="24" height="20" rx="3" fill="#f59e0b" />
        <path d="M16 12h16l-4 4H20z" fill="#fcd34d" />
        <path d="M34 18h8v14h-8z" fill="#92400e" />
        <path d="M30 26h-6l2-3" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Refund Progress",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="12" fill="#f97316" />
        <circle cx="24" cy="24" r="8" fill="#fff7ed" />
        <path d="M24 18v6l4 2" stroke="#f97316" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Product Issue",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M14 18h20l-2 18H16z" fill="#2563eb" />
        <path
          d="M18 18a6 6 0 0112 0"
          stroke="#93c5fd"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="24" cy="30" r="3" fill="#dbeafe" />
      </svg>
    ),
  },
  {
    title: "Speed Packages",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="14" width="24" height="20" rx="3" fill="#0ea5e9" />
        <path d="M22 16l-4 8h4l-2 8 8-12h-5l3-4z" fill="#f8fafc" />
      </svg>
    ),
  },
  {
    title: "Cancel Order",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="12" y="10" width="20" height="26" rx="3" fill="#ef4444" />
        <rect x="16" y="16" width="12" height="2" fill="#fee2e2" />
        <circle cx="34" cy="30" r="7" fill="#9f1239" />
        <path d="M31 27l6 6M37 27l-6 6" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Seller Non-Response",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="18" r="7" fill="#f59e0b" />
        <path d="M12 36c2-7 22-7 24 0" fill="#fbbf24" />
        <rect x="28" y="26" width="10" height="6" rx="2" fill="#b45309" />
      </svg>
    ),
  },
  {
    title: "Find Account",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="10" y="10" width="22" height="22" rx="4" fill="#22c55e" />
        <circle cx="22" cy="22" r="6" fill="#dcfce7" />
        <path d="M26 26l6 6" stroke="#14532d" strokeWidth="2" />
      </svg>
    ),
  },
];

const PopularSolutions = () => {
  return (
    <section id="knowledge" className="px-4 py-14 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Popular Solutions
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Top resources customers use
            </h2>
          </div>
          <span className="hidden text-sm text-slate-400 sm:block">
            Updated daily
          </span>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-4 py-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center">
                {solution.icon}
              </div>
              <div className="text-sm font-semibold text-slate-700">
                {solution.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSolutions;
