const PrivacyPolicy = () => {
  return (
    <main className="px-4 py-12 sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
          Privacy Policy
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 sm:text-4xl">
          How we handle your data
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Effective date: February 25, 2026
        </p>

        <section className="mt-8 space-y-6 text-sm leading-7 text-slate-600">
          <div>
            <h2 className="text-base font-semibold text-slate-900">Overview</h2>
            <p className="mt-2">
              We collect only the information needed to process orders, deliver
              services, and respond to support requests. This policy explains
              what we collect, why we collect it, and how we keep it safe.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Information we collect
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Name, email address, and phone or WhatsApp number.</li>
              <li>Billing and shipping address.</li>
              <li>Order details, order history, and support requests.</li>
              <li>
                Payment details, processed by our payment providers (we do not
                store full card numbers).
              </li>
              <li>
                Device, browser, and usage data (pages viewed, clicks, and time
                on site).
              </li>
              <li>
                Cookies and similar technologies for login, cart, and analytics.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              How we use your information
            </h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>Process payments and fulfill orders.</li>
              <li>Deliver products and send order updates.</li>
              <li>Respond to your support request.</li>
              <li>Verify order details and resolve account issues.</li>
              <li>Improve our website, services, and customer experience.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">Payments</h2>
            <p className="mt-2">
              Payments are handled by trusted payment providers. We receive a
              confirmation and limited payment data needed to complete the
              transaction. We do not store full card numbers or sensitive
              payment credentials on our servers.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Cookies and analytics
            </h2>
            <p className="mt-2">
              We use cookies and similar tools to keep you signed in, remember
              your cart, and understand how the site is used. You can control
              cookies through your browser settings, but some features may not
              work properly if cookies are disabled.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Marketing communications
            </h2>
            <p className="mt-2">
              If you opt in, we may send updates, offers, or product news. You
              can unsubscribe at any time using the link in our emails or by
              contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">Sharing</h2>
            <p className="mt-2">
              We do not sell your personal data. We may share information with
              trusted service providers who help us deliver orders, process
              payments, run analytics, and provide support, and only for those
              purposes.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Third-party services
            </h2>
            <p className="mt-2">
              Our site may link to third-party services. Their privacy practices
              are governed by their own policies, so please review them when you
              leave our site.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Data retention
            </h2>
            <p className="mt-2">
              We keep account, order, and support data only as long as needed to
              fulfill orders, provide support, and meet legal or operational
              requirements.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Your rights
            </h2>
            <p className="mt-2">
              You can request access, correction, or deletion of your personal
              data by contacting us.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Children’s privacy
            </h2>
            <p className="mt-2">
              Our services are not directed to children under 13, and we do not
              knowingly collect their personal information.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">Security</h2>
            <p className="mt-2">
              We use reasonable safeguards to protect your data. However, no
              method of transmission or storage is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Changes to this policy
            </h2>
            <p className="mt-2">
              We may update this policy from time to time. We will post the
              latest version on this page and update the effective date.
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold text-slate-900">Contact</h2>
            <p className="mt-2">
              For privacy questions, email us at niloysarker.cs@gmail.com.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
