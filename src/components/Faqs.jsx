import { useState } from "react";

const faqs = [
  {
    question: "How do I check the latest shipping update?",
    answer:
      "Open your order details and select Track Shipment to see the carrier timeline and last scan. If no update appears in 48 hours, contact support.",
  },
  {
    question: "What should I do if my package is delayed?",
    answer:
      "Confirm the expected delivery window, then review tracking events. If the package is past the window, submit a support request with the Order ID.",
  },
  {
    question: "How long do refunds usually take?",
    answer:
      "Refunds typically process in 3-7 business days after approval, depending on your bank. You can check progress in your order details.",
  },
  {
    question: "How can I update my delivery address?",
    answer:
      "You can edit the delivery address before the order ships. Open the order details, select Edit Address, and save the new information.",
  },
  {
    question: "Why was my payment declined?",
    answer:
      "Most declines are due to bank verification, card limits, or mismatched billing details. Verify the billing address and try again.",
  },
  {
    question: "How do I contact seller support?",
    answer:
      "Open the order details and choose Contact Seller. If you do not receive a reply, submit a support request through this Help Center.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="px-4 pb-14 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              FAQs
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Get answers fast
            </h2>
          </div>
          <span className="hidden text-sm text-slate-400 sm:block">
            Updated weekly
          </span>
        </div>
        <div className="mt-8 grid items-start gap-4 md:grid-cols-2">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                <button
                  className="flex w-full items-center justify-between rounded-xl bg-slate-50 px-4 py-3 text-left text-sm font-medium text-slate-900"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(index)}
                >
                  <span>{item.question}</span>
                  <span
                    className={`text-slate-400 transition ${
                      isOpen ? "rotate-90" : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    &#8594;
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden text-sm text-slate-500 transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 px-1">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
