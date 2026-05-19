export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Churn Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Customers Will Cancel — Before They Do
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ChurnGuard analyzes usage patterns with ML to flag at-risk subscribers and automatically triggers retention campaigns. Built for SaaS founders and customer success teams.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Protecting Revenue — $18/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["95%", "Prediction Accuracy"],
            ["3×", "Retention Improvement"],
            ["< 5 min", "Setup Time"]
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited customer monitoring",
              "ML churn risk scoring",
              "Automated retention campaigns",
              "Slack & email alerts",
              "API & webhook integrations",
              "Priority support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does ChurnGuard predict cancellations?",
              a: "ChurnGuard connects to your subscription platform via API and analyzes behavioral signals — login frequency, feature usage, support tickets, and billing events — using a trained ML model to assign each customer a churn risk score."
            },
            {
              q: "Which subscription platforms are supported?",
              a: "ChurnGuard integrates with Stripe, Chargebee, Recurly, and any platform that exposes a REST API or webhooks. Setup takes under 5 minutes with our guided connector wizard."
            },
            {
              q: "What happens when a customer is flagged as at-risk?",
              a: "You choose the response: send an automated personalized email, trigger a Slack alert to your CS team, offer a discount coupon, or schedule a check-in call — all configurable from the dashboard."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
