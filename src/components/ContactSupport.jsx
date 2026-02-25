const contactCards = [
  {
    title: "Online Support",
    description: "Chat with a support agent for urgent requests.",
  },
  {
    title: "Service Records",
    description: "Review your previous requests and statuses.",
  },
];

const ContactSupport = ({ onContact }) => {
  return (
    <section className="px-4 pb-16 sm:px-6">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-slate-100/80 px-6 py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Contact Support
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Need more help?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-600">
              Reach our team for account, payment, and order assistance. We will
              guide you to the right solution.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            type="button"
            onClick={onContact}
          >
            Contact Support
          </button>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
