import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  whatsappNumber: "",
  orderId: "",
  supportType: "Order Issue",
  otherSupportType: "",
  subject: "",
  message: "",
};

const SupportModal = ({ open, onClose, onSubmitted }) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    if (form.email && !form.email.includes("@")) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.whatsappNumber.trim()) {
      nextErrors.whatsappNumber = "WhatsApp number is required.";
    }
    if (form.supportType === "Other" && !form.otherSupportType.trim()) {
      nextErrors.otherSupportType = "Please specify the support type.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(form.subject);
    const supportType =
      form.supportType === "Other"
        ? form.otherSupportType.trim()
        : form.supportType;
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${
        form.whatsappNumber || "N/A"
      }\nOrder ID: ${form.orderId || "N/A"}\nSupport Type: ${supportType}\n\n${
        form.message
      }`,
    );

    window.location.href = `mailto:niloysarker.cs@gmail.com?subject=${subject}&body=${body}`;
    setForm(initialState);
    setErrors({});
    if (onSubmitted) {
      onSubmitted();
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Close modal"
      />
      <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Contact Support
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              Tell us what you need
            </h2>
          </div>
          <button
            className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-500 transition hover:border-slate-300"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Full Name
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-rose-500">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Email
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-rose-500">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              WhatsApp Number
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="whatsappNumber"
              inputMode="tel"
              placeholder="+8801XXXXXXXXX"
              value={form.whatsappNumber}
              onChange={handleChange}
            />
            {errors.whatsappNumber && (
              <p className="mt-1 text-xs text-rose-500">
                {errors.whatsappNumber}
              </p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Order ID (optional)
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="orderId"
              value={form.orderId}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Support Type
            </label>
            <select
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="supportType"
              value={form.supportType}
              onChange={handleChange}
            >
              <option>Order Issue</option>
              <option>Payment Problem</option>
              <option>Account Support</option>
              <option>Technical Issue</option>
              <option>Other</option>
            </select>
            {form.supportType === "Other" && (
              <div className="mt-3">
                <input
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
                  name="otherSupportType"
                  placeholder="Specify support type"
                  value={form.otherSupportType}
                  onChange={handleChange}
                />
                {errors.otherSupportType && (
                  <p className="mt-1 text-xs text-rose-500">
                    {errors.otherSupportType}
                  </p>
                )}
              </div>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Subject
            </label>
            <input
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="subject"
              value={form.subject}
              onChange={handleChange}
            />
            {errors.subject && (
              <p className="mt-1 text-xs text-rose-500">{errors.subject}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Message
            </label>
            <textarea
              className="mt-2 min-h-[120px] w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-rose-500">{errors.message}</p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              Submits via your email app using mailto.
            </p>
            <button
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              type="submit"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SupportModal;
