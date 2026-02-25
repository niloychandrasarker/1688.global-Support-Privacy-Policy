const quickLinks = [
  "not received goods",
  "refund",
  "account problem",
  "technical issue",
];

const Hero = ({ onOpenForm, ctaStatus }) => {
  const isSent = ctaStatus === "sent";

  return (
    <section className="px-4 pb-12 pt-10 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
          Help Center
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
          Hi, what can we help you with?
        </h1>
        <div className="mt-6 flex w-full max-w-2xl flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.45)]">
          <p className="text-sm text-slate-600">
            Share your issue and our support team will respond soon.
          </p>
          <button
            className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition ${
              isSent
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-slate-900 hover:bg-slate-800"
            }`}
            type="button"
            onClick={onOpenForm}
          >
            {isSent ? "Request Sent" : "Submit a Support Request"}
            <span aria-hidden="true">&#8594;</span>
          </button>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
          {quickLinks.map((link) => (
            <button
              key={link}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              type="button"
              onClick={onOpenForm}
            >
              {link}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
