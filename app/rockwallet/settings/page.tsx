import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings Flows — RockWallet — AVISS KEJIA ZHAO",
};

export default function SettingsFlows() {
  return (
    <main className="main-content case-main">

      <a href="/rockwallet" className="back-link">← Back to RockWallet</a>

      <h1 className="case-title">Settings Flows</h1>
      <p className="case-subtitle">Designing self-serve account management flows for email, phone, and address updates — replacing manual support touchpoints with native, compliant in-app experiences.</p>

      <img src="/images/rock-wallet/Settings-cover.webp" alt="Settings Flows" className="case-cover" />

      {/* EMAIL FLOW */}
      <div className="section">
        <p className="section-label">Email Update Flow</p>
        <p className="section-body">RockWallet 1.0 had no native way for users to update their email address. Every change required contacting Customer Support and waiting for a manual L2 correction — creating friction for a routine account management task and increasing support volume. The goal was to replace this with a simple, self-serve flow that felt familiar and handled the underlying compliance requirements invisibly.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <p className="section-body">RockWallet 1.0 was not designed with self-serve account management in mind.</p>
        <ul className="section-list">
          <li>Users had no native way to update their email if it changed or was entered incorrectly</li>
          <li>Every change required contacting support, creating unnecessary friction for a routine update</li>
          <li>A stale email address creates real downstream risk: it is the primary channel for transaction notifications, security alerts, and account recovery</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Competitive research covered how leading apps handle email updates — including Coinbase, Kraken, Revolut, PayPal, and Cash App. The research confirmed that the most trusted pattern is a two-step OTP verification: confirm the old email first, then verify the new one. This dual-confirmation approach is considered best practice for account security and is the standard users expect from financial apps.</p>
        <p className="section-body">A key compliance constraint surfaced early: a 24-hour cooldown is required between email changes — a business and fraud-prevention requirement. This shaped a core design challenge: how do you communicate a restriction that most users will never encounter, without making the flow feel bureaucratic or alarming for the vast majority who are simply updating their email?</p>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Verify-Email.webp" alt="Settings Update Email Screens" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Handling the 24-Hour Cooldown</p>
        <p className="section-body">The cooldown creates a real UX problem: users who have recently changed their email and try again within 24 hours need to be stopped cleanly, without the restriction feeling punitive. The solution was a dedicated blocked state — a clear, calm screen that explains the cooldown, shows when the restriction lifts, and directs users to support if needed. For the vast majority of users who never hit this state, it is completely invisible.</p>
        <img src="/images/rock-wallet/settings-flows/24hr-cooldown-notification.webp" alt="24-hour cooldown screen" className="img-full" />

        <p className="subsection-title">OTP Resend Limits & Disabled States</p>
        <p className="section-body">OTP screens required careful attention to disabled states — the resend button needed to be clearly unavailable during the countdown timer without being invisible or confusing. During design, I flagged that the disabled-state text colour did not meet contrast requirements — a design system issue that was logged for future resolution rather than addressed locally within this flow.</p>
        <img src="/images/rock-wallet/settings-flows/Resend-limit-rule.webp" alt="OTP screen with disabled state" className="img-full" />

        <p className="subsection-title">Success & Confirmation</p>
        <p className="section-body">The success state needed to confirm two things clearly: the email has been updated, and the user's session remains active — they do not need to log out and back in. A simple confirmation screen with the new email address visible was sufficient. No celebration, no unnecessary friction — just a clean close to a routine update.</p>
        <img src="/images/rock-wallet/settings-flows/Email-happy-path.webp" alt="Email update success screen" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">The email update flow replaced a manual, support-dependent process with a native, self-serve experience — reducing Customer Support volume for a routine account management task. The dual OTP verification pattern aligns with industry best practice and user expectations from financial apps, while the 24-hour cooldown handling ensures compliance requirements are met without disrupting the experience for the vast majority of users.</p>
      </div>

      <hr className="flow-divider" />

      {/* PHONE FLOW */}
      <div className="section">
        <p className="section-label">Phone Update Flow</p>
        <p className="section-body">The phone update flow is the second in the Settings self-serve account management series — following email, preceding address. Like email, RockWallet 1.0 had no native way to update a phone number; every change went through Customer Support. The goal was consistent: replace the manual touchpoint with a clean, native flow that handled compliance and technical constraints invisibly.</p>
        <p className="section-body"><strong>The phone flow introduced a significant new constraint: a third-party SDK dependency.</strong> Phone number verification is handled by Sumsub — the same KYC provider used for identity verification during onboarding. The Sumsub mobile SDK owns the OTP verification screen entirely, which means key parts of the flow were outside RockWallet's direct design control.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <ul className="section-list">
          <li>Users had no native way to update their phone number if it changed or was entered incorrectly</li>
          <li>Every change required contacting support — friction for a routine update</li>
          <li>A stale phone number is a real risk: it is the foundation for upcoming 2FA features, meaning an outdated number could lock users out of future security features</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Research covered how Coinbase, Kraken, Revolut, PayPal, and Cash App handle phone updates. The consistent pattern: enter new number → receive OTP → verify → confirm update. The Sumsub SDK handles OTP delivery and verification, meaning the RockWallet design only controls the entry and confirmation screens — the OTP step itself is Sumsub-owned.</p>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Verify-Phone.webp" alt="Settings Update Phone Screens" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Designing Around the SDK</p>
        <p className="section-body">The Sumsub OTP screen is rendered by the SDK — its visual design, interaction behaviour, and copy are all Sumsub-controlled. The RockWallet design had to work around this constraint: the entry screen before the SDK and the confirmation screen after it needed to feel like a seamless continuation of the same experience, even though the middle step was externally owned. This meant careful attention to screen transitions, copy tone, and what information was surfaced before and after the SDK interaction.</p>

        <p className="subsection-title">GPS Location Prompt</p>
        <p className="section-body">The phone update flow also introduced a GPS location prompt — a temporary solution while native geo-blocking infrastructure was being built by a parallel team. Users are asked to allow location access as part of the verification process. The prompt was designed to feel like a natural part of the flow rather than a jarring permission request — framed as necessary to complete the update, with a brief explanation of why location is needed.</p>
        <img src="/images/rock-wallet/settings-flows/Phone-sumsub-results.webp" alt="GPS location prompt" className="img-full" />

        <p className="subsection-title">Re-entry After GPS/Camera Denial</p>
        <p className="section-body">An open design question was what happens if a user denies the GPS or camera permission and then tries to re-enter the flow. This edge case was flagged as a dependency on the engineering team's implementation — the design documented the question and deferred resolution to a follow-up sprint once the technical behaviour was confirmed.</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">The phone update flow replaced a manual support process with a self-serve experience while navigating a real third-party SDK constraint. The GPS prompt workaround — while temporary — delivered the required geolocation gating without blocking the launch. The patterns established here directly informed the address flow that followed.</p>
      </div>

      <hr className="flow-divider" />

      {/* ADDRESS FLOW */}
      <div className="section">
        <p className="section-label">Address Update Flow</p>
        <p className="section-body">The address update flow completes the self-serve account management trilogy alongside email and phone — replacing a manual Customer Support touchpoint with a simple, native Settings experience.</p>
        <p className="section-body"><strong>Address is distinct from email and phone in one important way: it is a self-reported field that drives geolocation logic.</strong> When a user updates their address, the backend re-evaluates their jurisdiction category, which controls their feature access within the app. No KYC verification is required, but the jurisdiction re-evaluation runs silently in the background.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <ul className="section-list">
          <li>Users who moved or had an incorrect address on file had no way to fix it independently</li>
          <li>Every change required contacting support and waiting for a manual L2 correction</li>
          <li>A stale address record carries downstream risk: the jurisdiction category tied to the address controls the user's feature access within the app</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Since the address update flow is the third in a series, much of the foundational research had already been established. The focus shifted to understanding what makes address distinct — and what that means for the design. The key insight: address is a self-reported field tied to geolocation logic. Unlike email and phone, updating an address triggers a silent jurisdiction re-evaluation that can directly affect a user's feature access.</p>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Address.webp" alt="Settings Update Address Screens" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Handling Empty State — Level 1</p>
        <p className="section-body">Since address is not mandatory during onboarding, the design had to account for users who had never added one. For Level 1 users, an empty state was designed to handle the case where no address exists. When a Level 1 user taps "Unlock Level 2," they are prompted to add and verify their address as part of the upgrade flow — turning the empty state into a natural entry point for verification.</p>
        <img src="/images/rock-wallet/settings-flows/Address-empty-state-level-1.webp" alt="Address empty state for Level 1" className="img-full" />

        <p className="subsection-title">Pre-Confirmation Bottom Sheet</p>
        <p className="section-body">Before entering the address update flow, a bottom sheet appears as a pre-confirmation step — informing users that updating their address may affect their access to certain services. A "Learn more" link is included, directing users to documentation explaining which features are available by country or region.</p>
        <img src="/images/rock-wallet/settings-flows/Address-bottomsheet.webp" alt="Address pre-confirmation bottom sheet" className="img-full" />

        <p className="subsection-title">Category 6 — Account Disabled</p>
        <p className="section-body">If the submitted address maps to a Category 6 prohibited country, the account is fully disabled — a compliance requirement. Rather than designing a new flow, this outcome reuses the existing account-disabled experience, ensuring consistency and reducing build effort.</p>
        <img src="/images/rock-wallet/settings-flows/Address-account-disabled.webp" alt="Account disabled flow" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Address-updated.webp" alt="Address updated" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">The address update flow completed the self-serve account management trilogy — replacing a manual, support-dependent process with a simple, native Settings experience. The most complex design challenge was communicating potential jurisdiction impact without creating unnecessary friction — resolved through the pre-confirmation bottom sheet and clear post-submission states.</p>
      </div>

      <hr className="flow-divider" />

      {/* DESIGN CHALLENGES */}
      <div className="section">
        <p className="section-label">Design Challenges</p>
        <p className="section-body">The Settings flows presented a consistent underlying challenge: designing self-serve account management experiences that felt simple and familiar to users, while quietly handling significant compliance and technical complexity underneath.</p>
        <p className="section-body">Each flow came with its own distinct constraint. The email flow required designing around a 24-hour cooldown. The phone flow introduced a third-party SDK dependency. The address flow added a self-reported field tied to silent jurisdiction re-evaluation. Across all three, designing consistent empty states for Level 1 users and ensuring each flow felt unified despite their technical differences required careful attention to pattern reuse and design system consistency.</p>
      </div>

      {/* COLLABORATION */}
      <div className="section">
        <p className="section-label">Collaboration</p>
        <p className="section-body">All three Settings flows were delivered in close collaboration with the PM, following individual PRDs for each feature. Compliance requirements were confirmed through stakeholder meetings before design began. Working with engineers was central to keeping the flows efficient — reusing existing design system components reduced build effort across all three flows without sacrificing consistency.</p>
      </div>

      {/* WHAT'S NEXT */}
      <div className="section">
        <p className="section-label">What's Next</p>
        <ul className="section-list">
          <li><strong>Native geo-blocking</strong> — the current GPS prompt is a temporary solution</li>
          <li><strong>2FA integration</strong> — the phone number collected will serve as the foundation for two-factor authentication</li>
          <li><strong>Design system improvements</strong> — the disabled state contrast issue flagged during the email flow will be addressed</li>
          <li><strong>Session resume</strong> — users who abandon mid-flow currently restart from the beginning</li>
          <li><strong>Mandatory phone verification at onboarding</strong> — an active consideration building on the patterns established here</li>
        </ul>
      </div>

      {/* CLOSING */}
      <div className="section">
        <p className="section-body">The Settings flows were some of the most technically constrained work I've done — and some of the most rewarding. Designing within strict compliance requirements, third-party SDK limitations, and existing component boundaries pushed me to think more creatively about what good design looks like when the canvas isn't blank.</p>
      </div>

      <a href="/rockwallet" className="back-link">← Back to RockWallet</a>

    </main>
  );
}