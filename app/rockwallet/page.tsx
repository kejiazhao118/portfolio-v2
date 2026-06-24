import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RockWallet — AVISS KEJIA ZHAO",
};

export default function RockWallet() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">RockWallet — Product Design</h1>
      <p className="case-subtitle">Designing and shipping end-to-end product flows for a crypto wallet app — from pre-launch feature finalization to post-launch UX iteration driven by real user data.</p>

      <img src="/images/rock-wallet/Cover.webp" alt="RockWallet Product Design" className="case-cover" />

      {/* CONTEXT */}
      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">RockWallet is a multi-currency digital wallet app built to make cryptocurrency accessible, simple, and secure for everyone. RockWallet empowers users to buy, sell, store, and swap digital assets — with a focus on democratizing crypto for both beginners and experienced users alike.</p>
        <p className="section-body">The first generation of the app was completely reimagined for 2.0 — rebuilt with new blockchain technology, a redesigned UI, updated branding guidelines, and a stronger emphasis on user experience. The goal was to create an interface that feels intuitive and trustworthy, lowering the barrier to entry for users new to crypto. The 2.0 app is currently available on the US App Store, with plans to expand the service worldwide.</p>
      </div>

      {/* MY ROLE */}
      <div className="section">
        <p className="section-label">My Role</p>
        <p className="section-body">I joined the RockWallet design team as a product designer ahead of the 2.0 app launch, working closely with PMs, the design lead, and developers to finalize features for release. My responsibilities spanned end-to-end UX and UI design — defining user flows, building high-fidelity screens with the existing design system, and actively evolving it to ensure consistency and scalability across the product. I contributed to key features including the Settings flows and Gift Card Redemption flow, presented design solutions in stakeholder meetings, and iterated on existing UI based on post-launch user analytics. I also leveraged an AI-integrated workflow to accelerate research, prototyping, and design exploration throughout the process.</p>
      </div>

      {/* SELECTED PROJECTS */}
      <div className="section">
        <p className="section-label">Selected Projects</p>
        <p className="section-body">This case study features a selection of projects completed during my time at RockWallet.</p>

        <div className="project-cards">
          <a href="/rockwallet/settings" className="project-card">
            <div className="project-card-thumb">
              <img src="/images/rock-wallet/Settings-cover.webp" alt="Settings Flows" />
            </div>
            <span className="project-card-link">View Project →</span>
          </a>

          <a href="/rockwallet/giftcard" className="project-card">
            <div className="project-card-thumb">
              <img src="/images/rock-wallet/Giftcard-cover.webp" alt="Gift Card Redemption Flow" />
            </div>
            <span className="project-card-link">View Project →</span>
          </a>

          <a href="/rockwallet/ctas" className="project-card">
            <div className="project-card-thumb">
              <img src="/images/rock-wallet/CTAs-cover.webp" alt="Homepage CTAs Improvement" />
            </div>
            <span className="project-card-link">View Project →</span>
          </a>
        </div>
      </div>

      <a href="/" className="back-link">← Back to Work</a>

    </main>
  );
}