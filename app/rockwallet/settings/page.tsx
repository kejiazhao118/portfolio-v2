import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings Flows — RockWallet — AVISS KEJIA ZHAO",
};

export default function SettingsFlows() {
  return (
    <main className="main-content case-main">

      <a href="/rockwallet" className="back-link">← Back to RockWallet</a>

      <h1 className="case-title">Settings Flows</h1>
      <p className="case-subtitle">Settings flows for the 2.0 MVP release — update & verify phone, email, and address, designed with user experience at the core.</p>

      <img src="/images/rock-wallet/settings-flows/Settings.webp" alt="Settings Flows" className="case-cover" style={{ marginBottom: "1.5rem" }} />

      {/* FLOW 1: EMAIL */}
      <hr className="flow-divider" />

      <div className="section flow-title">
        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>Settings — Update and Verify Email</p>
      </div>

      <div className="section">
        <p className="section-label">Overview</p>
        <p className="section-body">RockWallet 2.0 required a self-serve email update and verification flow within Account Settings. Working closely with the PM and following the PRD, the goal was to replace an existing operational workaround with a secure, native experience — allowing users to independently update and verify their email address via OTP, without compromising account security or leaving them in an ambiguous state.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <p className="section-body">RockWallet 1.0 was not designed with self-serve account management in mind — email updates were never a native feature.</p>
        <ul className="section-list">
          <li>Users had no way to update their email address independently</li>
          <li>The only option was to contact support and wait up to 24 hours</li>
          <li>The process required a manual workaround — a secondary account and a deliberate verification failure</li>
          <li>This created friction at high-intent moments, particularly for returning users blocked from completing a transaction</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Since this was the first of the three Settings flows to be designed, the research phase was broader — establishing the foundation that the phone and address flows would later build on.</p>
        <p className="section-body">Competitor and fintech research focused on how other platforms handle self-serve email update and verification, with particular attention to clarity of state management, OTP patterns, and how errors are communicated without alarming users. The goal was to identify patterns that felt familiar and trustworthy — not novel or technically exposing.</p>
        <p className="section-body">Two key decisions were made to reduce build effort while maintaining a consistent experience:</p>
        <ul className="section-list">
          <li><strong>Reusing onboarding verification screens</strong> — the email verification screens and OTP logic from onboarding were repurposed without modification. The same screens, resend rules, and wrong attempt limits apply — ensuring consistency across the product and eliminating unnecessary rebuild effort</li>
          <li><strong>Designing a reusable cooldown mechanic</strong> — the 24-hour cooldown enforced after a successful email update was designed as a generic, reusable pattern that can be applied to future security-sensitive actions beyond email updates</li>
        </ul>
        <p className="section-body">The research also confirmed that the success of this flow depended not just on functionality, but on communication — users needed to know exactly where they were at every step, what would happen next, and that their current email would remain active until the new one was verified.</p>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Verify-Email.webp" alt="Settings Update and Verify Email Screens" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label" style={{ marginTop: "2.5rem" }}>Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Scalable Entry Point Design</p>
        <p className="section-body">To support both the email and phone update flows, I introduced a tappable "Edit" button at the top-right of the "Contact Info" card — creating a single, consistent entry point for both flows. This approach was designed with scalability in mind: the same pattern can be extended to the "Profile Address" section in the future, keeping the Settings experience unified and predictable as the product grows.</p>
        <img src="/images/rock-wallet/settings-flows/Entry-point-email.webp" alt="Entry point for email" className="img-full" />

        <p className="subsection-title">Leveraging the Design System</p>
        <p className="section-body">The bottom sheet component already existed in the design system, making it a natural choice for this flow. Reusing it ensured visual and interaction consistency across the app, while keeping the implementation efficient for the development team. It's also scalable — new content or options can be added in the future without requiring a new pattern.</p>
        <img src="/images/rock-wallet/settings-flows/Email-design-decision-1.webp" alt="Email design decision 1" className="img-full" />

        <p className="subsection-title">Communicating the 24-Hour Cooldown</p>
        <p className="section-body">For compliance reasons, a 24-hour cooldown is enforced after a successful email update — users cannot send or withdraw funds off-platform during this window.</p>
        <p className="section-body">To ensure users are never caught off guard, I added two layers of communication: an inline notification visible on the email update screen, and a bottom sheet that appears when the user taps "Verify Email" — acting as a pre-confirmation step before they commit. This way, users understand the restriction upfront and can plan around it before tapping "Update Anyway."</p>
        <img src="/images/rock-wallet/settings-flows/24hr-cooldown-notification.webp" alt="24hr cooldown notification" className="img-full" />

        <p className="subsection-title">A Note on the Design System</p>
        <p className="section-body">While working through the flow, I noticed that the existing disabled state text was difficult to read — the contrast was insufficient for comfortable legibility. Rather than blocking the flow's progress, I flagged this as a design system improvement to address later: introducing a lighter, more legible color treatment for disabled states across the product. The flow remained the priority, but this observation was noted for future iteration.</p>

        <p className="subsection-title">Maintaining Consistency with Onboarding Patterns</p>
        <p className="section-body">Three key decisions were made to ensure consistency across the product:</p>
        <ul className="section-list">
          <li><strong>Input validation rules</strong> — when an invalid email address is entered, the same input validation rules and error patterns defined during onboarding are applied, keeping the experience familiar and predictable for users</li>
          <li><strong>Server-side validation</strong> — since email addresses are validated on the backend, the same flow pattern developed during onboarding was followed, ensuring a consistent experience across both contexts</li>
          <li><strong>Resend OTP limit</strong> — the resend limit follows the same rules established during onboarding: 1 initial send, up to 3 resends, and a 1-hour lockout once the limit is reached — keeping security behaviour consistent across all verification flows in the app</li>
        </ul>
        <img src="/images/rock-wallet/settings-flows/Valid-invalid-email.webp" alt="Valid and invalid email" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Resend-limit-rule.webp" alt="Resend limit rule" className="img-full" />

        <p className="subsection-title">Defining Edge Cases</p>
        <p className="section-body">Beyond the happy path, three key edge cases were identified and designed for to ensure the flow remained robust and user-friendly under unexpected conditions: an invalid OTP entry, a network error during verification, and an expired code. Each case was accounted for with clear feedback and recovery options, so users always knew what went wrong and how to proceed.</p>
        <img src="/images/rock-wallet/settings-flows/Edge-cases-email.webp" alt="Edge cases" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Input-Invalid-OTP.webp" alt="Input Invalid OTP Cases" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Edge-cases-2.webp" alt="Edge cases 2" className="img-full" />

        <p className="subsection-title">Compliance Requirement — 24-Hour Cooldown</p>
        <p className="section-body">A 24-hour cooldown is a compliance requirement enforced after a successful email update — during this window, users are restricted from sending or withdrawing funds off-platform. As a designer, it was important to balance this business and compliance requirement with a clear, honest user experience. Rather than surfacing the restriction only after the fact, the design proactively communicates the cooldown at two touchpoints — an inline notification and a pre-confirmation bottom sheet — so users can make an informed decision before committing to the update.</p>
        <img src="/images/rock-wallet/settings-flows/24hr-cooldown-in-progress.webp" alt="24hr cooldown in progress" className="img-full" />
      </div>

      <div className="section" style={{ marginBottom: "1.5rem" }}>
        <p className="section-label">Outcomes</p>
        <p className="section-body">The email update and verification flow replaced a fragmented, support-dependent process with a secure, self-serve experience — one that respects both user autonomy and compliance requirements. Every design decision, from the scalable entry point to the layered cooldown communication and consistent OTP patterns, was made with the goal of giving users confidence and clarity at every step.</p>
        <p className="section-body">This flow laid a solid foundation for future Settings features, including phone number and address updates, establishing a consistent pattern that can be extended as the product continues to grow.</p>
        <img src="/images/rock-wallet/settings-flows/Email-happy-path.webp" alt="Email happy path" className="img-full" />
      </div>

      {/* FLOW 2: PHONE */}
      <hr className="flow-divider" />

      <div className="section flow-title">
        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>Settings — Update and Verify Phone Number</p>
      </div>

      <div className="section">
        <p className="section-label">Overview</p>
        <p className="section-body">RockWallet 2.0 required a self-serve phone number update flow within Account Settings. Previously, phone number changes were not self-serve — users had to contact support, navigate a manual workaround involving a secondary account and a deliberate verification failure, and wait for Compliance to complete a KYC merge.</p>
        <p className="section-body">The goal was to replace this process with a simple, native experience allowing users to independently update their phone number from Account Settings — primarily to give Customer Support a reliable contact channel beyond email.</p>
        <p className="section-body">Phone number collection and verification is handled via the Sumsub SDK, a non-native implementation that manages country code selection, format validation, and verification — reducing the custom build requirement on our end.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <p className="section-body">RockWallet 1.0 was not designed with self-serve account management in mind — phone number updates were never a native feature.</p>
        <ul className="section-list">
          <li>Users had no way to update their phone number independently</li>
          <li>Every change was fully gated by Customer Support and Compliance, requiring a manual workaround and a KYC merge</li>
          <li>This created friction for users at high-intent moments and consumed Compliance capacity on requests that were low-risk and high-frequency</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Since this was a Settings feature rather than a new product concept, research focused on how competitors and other fintech and crypto platforms handle phone number update and verification flows. Existing patterns were reviewed and adapted to fit RockWallet's specific business and compliance requirements.</p>
        <p className="section-body">A critical part of the research was understanding how <strong>Sumsub — the third-party SDK</strong> handling phone verification — operates, and designing the flow around its constraints. Unlike the email update flow, which was built entirely in-house, the phone verification flow required designing around an external SDK — meaning certain screens and interactions were owned by Sumsub, not RockWallet. This fundamentally shaped the design approach and scope.</p>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Verify-Phone.webp" alt="Settings Update and Verify Phone Number" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Handling Empty State — Level 1</p>
        <p className="section-body">Since phone number is not mandatory during onboarding, the design had to carefully account for users who had never added one. Users are defined by two verification levels: Level 1 (unverified) and Level 2 (verified). Only Level 2 users are permitted to make account changes — a business and compliance requirement.</p>
        <p className="section-body">For Level 1 users, an empty state was designed to handle the case where no phone number exists on the account. When a Level 1 user taps "Unlock Level 2," they are prompted to add and verify their phone number as part of the upgrade flow — turning the empty state into a natural entry point for verification rather than a dead end.</p>
        <img src="/images/rock-wallet/settings-flows/Phone-empty-state-level-1.webp" alt="Phone empty state for Level 1" className="img-full" />

        <p className="subsection-title">Sumsub Verification Flow</p>
        <p className="section-body">The Sumsub verification flow works in two distinct layers:</p>
        <ul className="section-list">
          <li><strong>Layer 1 — OTP Verification (user-facing):</strong> The user completes OTP verification inside the Sumsub SDK overlay. RockWallet does not build this screen — the SDK handles it entirely, including retry logic for incorrect codes</li>
          <li><strong>Layer 2 — Risk Assessment (silent, backend only):</strong> After OTP is confirmed, Sumsub silently assesses the phone number's risk profile and returns one of three results — trusted, could not fully assess, or high risk. Regardless of the result, if OTP passes, the phone number is updated and displayed as verified. The risk assessment is a backend signal only and never surfaces in the app</li>
        </ul>
        <p className="section-body">From a UI perspective, there is one user-facing outcome: OTP passes → phone number updated and verified. This informed the design decision to keep the flow simple and linear.</p>
        <p className="section-body">Once a user passes OTP verification via Sumsub, the phone number is updated regardless of the risk assessment result — whether Sumsub returns Green, Yellow, or Red. Risk flags are handled internally by Sumsub and reviewed manually by the Compliance team when needed. This is a deliberate business and compliance decision, and as a designer, it was important to reflect this accurately in the flow — the user always sees a successful outcome if OTP passes.</p>
        <p className="section-body">However, if OTP verification fails, the phone number cannot be added or updated. Three edge cases were identified and designed for:</p>
        <ul className="section-list">
          <li><strong>Invalid OTP</strong> — incorrect code entered by the user</li>
          <li><strong>Connectivity or signal issue</strong> — interruption during the verification process</li>
          <li><strong>Expired OTP</strong> — code timed out before the user could complete verification</li>
        </ul>
        <img src="/images/rock-wallet/settings-flows/Phone-edge-cases.webp" alt="Phone edge cases" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Phone-sumsub-results.webp" alt="Phone Sumsub results" className="img-full" />
      </div>

      <div className="section" style={{ marginBottom: "1.5rem" }}>
        <p className="section-label">Outcomes</p>
        <p className="section-body">The phone number update flow successfully replaced a fully support-gated process with a self-serve, native experience — reducing friction for users and freeing up Compliance capacity from a class of requests that were low-risk and high-frequency. By designing around the Sumsub SDK constraints and accounting for all edge cases, the flow delivered a simple, linear user experience while meeting RockWallet's business and compliance requirements. It also established a consistent pattern alongside the email update flow, setting the foundation for a unified self-serve account management experience within Settings.</p>
      </div>

      {/* FLOW 3: ADDRESS */}
      <hr className="flow-divider" />

      <div className="section flow-title">
        <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#111" }}>Settings — Update Address</p>
      </div>

      <div className="section">
        <p className="section-label">Overview</p>
        <p className="section-body">The address update flow completes the self-serve account management trilogy alongside email and phone — replacing a manual Customer Support touchpoint with a simple, native Settings experience.</p>
        <p className="section-body"><strong>Address is distinct from email and phone in one important way: it is a self-reported field that drives geolocation logic.</strong> When a user updates their address, the backend re-evaluates their jurisdiction category, which controls their feature access within the app. No KYC verification is required, but the jurisdiction re-evaluation runs silently in the background.</p>
        <p className="section-body">The goal was a low-friction field update consistent with the patterns already established in the email and phone flows — simple on the surface, with the right logic running behind the scenes.</p>
      </div>

      <div className="section">
        <p className="section-label">The Problem</p>
        <p className="section-body">RockWallet 1.0 was not designed with self-serve account management in mind — address updates were never a native feature.</p>
        <ul className="section-list">
          <li>Users who moved or had an incorrect address on file had no way to fix it independently</li>
          <li>Every change required contacting support and waiting for a manual L2 correction — creating friction for a routine update</li>
          <li>A stale address record carries downstream risk: the jurisdiction category tied to the address controls the user's feature access within the app, meaning an outdated address could silently affect what a user can and cannot do</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <p className="section-body">Since the address update flow is the third in a series of self-serve account management features — following email and phone — much of the foundational research had already been established. <strong>The focus shifted to understanding what makes address distinct from the other two fields, and what that means for the design.</strong></p>
        <p className="section-body">The key insight from the Research Review was that address is a self-reported field tied to geolocation logic. <strong>Unlike email and phone, updating an address triggers a silent jurisdiction re-evaluation in the backend — which can directly affect a user's feature access.</strong> This shaped the core design challenge: how do you communicate potential downstream impact to a user without creating unnecessary friction or alarming them unnecessarily?</p>
        <p className="section-body">Several key decisions were confirmed through the discovery and research process:</p>
        <ul className="section-list">
          <li><strong>No KYC verification required</strong> — address is self-reported, so no document collection or identity verification is needed on update</li>
          <li><strong>Jurisdiction re-evaluation is instantaneous</strong> — no pending state or access restriction during the update itself</li>
          <li><strong>Sumsub handles address validation</strong> — the mobile SDK already integrated is reused for address input and data sync, keeping the implementation consistent with the phone flow</li>
          <li><strong>Category 6 (prohibited country) reuses the existing account-disabled flow</strong> — no new pattern required</li>
        </ul>
        <img src="/images/rock-wallet/settings-flows/Settings-Update-Address.webp" alt="Settings Update Address Screens" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process — A selection of key design decisions that shaped the flow.</p>

        <p className="subsection-title">Handling Empty State — Level 1</p>
        <p className="section-body">Since address is not mandatory during onboarding, the design had to carefully account for users who had never added one. For Level 1 users, an empty state was designed to handle the case where no address exists on the account. When a Level 1 user taps "Unlock Level 2," they are prompted to add and verify their address as part of the upgrade flow — turning the empty state into a natural entry point for verification rather than a dead end.</p>
        <img src="/images/rock-wallet/settings-flows/Address-empty-state-level-1.webp" alt="Address empty state for Level 1" className="img-full" />

        <p className="subsection-title">Pre-Confirmation Bottom Sheet</p>
        <p className="section-body">Before entering the address update flow, a bottom sheet appears as a pre-confirmation step — informing users that updating their address may affect their access to certain services within the app. This is a compliance and business requirement: since address drives jurisdiction logic, users need to understand the potential downstream impact before committing to the change.</p>
        <p className="section-body">A "Learn more" link is included, directing users to documentation explaining which features are available by country or region — giving users the context they need to make an informed decision without interrupting the flow itself.</p>
        <img src="/images/rock-wallet/settings-flows/Address-bottomsheet.webp" alt="Address pre-confirmation bottom sheet" className="img-full" />

        <p className="subsection-title">Post-Submission: Sumsub Validation & Jurisdiction Re-evaluation</p>
        <p className="section-body">Once the user submits their new address, Sumsub validates that the address is real and properly formatted, then syncs the data and returns either a success or failure result. <strong>This is where Sumsub's role ends — it handles address validation and data sync only, not jurisdiction logic.</strong></p>
        <p className="section-body">The jurisdiction re-evaluation is entirely owned by RockWallet. Once Sumsub returns a successful result and the address is saved to the user record, the backend independently maps the address into one of seven geolocation categories — each defining what features the user can access within the app. These categories are business-defined, not Sumsub-defined.</p>
        <p className="section-body">If validation fails — due to a network issue, connectivity problem, or other edge case — the address is not updated and the user is informed with a clear error state and a path to retry.</p>
        <img src="/images/rock-wallet/settings-flows/Address-after-sumsub-validation.webp" alt="Address after Sumsub validation" className="img-full" />

        <p className="subsection-title">Category 6 — Account Disabled</p>
        <p className="section-body">If the submitted address maps to a Category 6 prohibited country, the account is fully disabled — this is a compliance requirement. Rather than designing a new flow, this outcome reuses the existing account-disabled experience already established in the product, ensuring consistency and reducing build effort.</p>
        <p className="section-body">The only available action is to close the app. On reopening, the user remains on the same blocked screen — they cannot bypass or retry. If they believe this is a mistake, they are directed to contact support.</p>
        <img src="/images/rock-wallet/settings-flows/Address-account-disabled.webp" alt="Account disabled flow" className="img-full" />
        <img src="/images/rock-wallet/settings-flows/Address-updated.webp" alt="Address updated and cannot update" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">The address update flow completed the self-serve account management trilogy — alongside email and phone — replacing a manual, support-dependent process with a simple, native Settings experience. By designing around Sumsub's validation and data sync capabilities, and accounting for all seven geolocation categories and their downstream access implications, the flow delivered a clean, low-friction experience while meeting RockWallet's business and compliance requirements.</p>
        <p className="section-body">The most complex design challenge was communicating potential jurisdiction impact without creating unnecessary friction or alarming users — resolved through the pre-confirmation bottom sheet and clear post-submission states. The patterns established here are consistent with the email and phone flows, reinforcing a unified self-serve account management system that can scale to future account attribute changes.</p>
      </div>

      <hr className="flow-divider" />

      <div className="section">
        <p className="section-label">Design Challenges</p>
        <p className="section-body">The Settings flows presented a consistent underlying challenge across all three: designing self-serve account management experiences that felt simple and familiar to users, while quietly handling a significant amount of compliance and technical complexity underneath.</p>
        <p className="section-body">Each flow came with its own distinct constraint. The email flow required designing around a 24-hour cooldown — a compliance requirement that needed to be communicated proactively without alarming users or disrupting the update process. The phone flow introduced a third-party SDK dependency, meaning key screens and interactions were owned by Sumsub rather than RockWallet — requiring the design to work around what the SDK owned while still delivering a coherent experience. The address flow added another layer: a self-reported field tied to silent jurisdiction re-evaluation, where updating an address could change a user's feature access without any visible verification step.</p>
        <p className="section-body">Across all three flows, designing consistent empty states for Level 1 users and ensuring each flow felt unified despite their technical differences required careful attention to pattern reuse and design system consistency.</p>
      </div>

      <div className="section">
        <p className="section-label">Collaboration</p>
        <p className="section-body">All three Settings flows were delivered in close collaboration with the PM, following individual PRDs for each feature. Compliance requirements — including the 24-hour cooldown, OTP resend limits, jurisdiction categories, and KYC gating — were confirmed through stakeholder meetings and alignment calls before design began.</p>
        <p className="section-body">Working with engineers was central to keeping the flows efficient. Reusing existing design system components — the bottom sheet, OTP screens from onboarding, and the account-disabled flow — reduced build effort across all three flows without sacrificing consistency. Design decisions were presented in stakeholder meetings, where concerns were raised, business requirements were balanced against user needs, and feasible solutions were agreed upon before moving to high-fidelity screens.</p>
      </div>

      <div className="section">
        <p className="section-label">What's Next</p>
        <p className="section-body">The three Settings flows delivered for the 2.0 launch were designed as a foundation — not a final state. Several items were explicitly deferred during the design process and are planned for future iterations:</p>
        <ul className="section-list">
          <li><strong>Native geo-blocking</strong> — the current GPS prompt is a temporary solution. Once the geo-blocking infrastructure is confirmed, the location verification experience will be revisited and redesigned to be seamless and native</li>
          <li><strong>2FA integration</strong> — the phone number collected and verified through the Settings flow will serve as the foundation for two-factor authentication, a future workstream that builds directly on this feature</li>
          <li><strong>Design system improvements</strong> — the disabled state contrast issue flagged during the email flow design will be addressed as a broader design system update, improving legibility across the product</li>
          <li><strong>Session resume</strong> — if a user abandons mid-flow, they currently restart from the beginning. A future iteration could introduce session resume behaviour to reduce friction for users who are interrupted mid-verification</li>
          <li><strong>Mandatory phone verification at onboarding</strong> — enforcing phone number collection and OTP verification as a required step at Level 2 KYC onboarding is an active consideration, building on the patterns established in the phone update flow</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-body">The Settings flows were some of the most technically constrained work I've done — and some of the most rewarding. Designing within strict compliance requirements, third-party SDK limitations, and existing component boundaries pushed me to think more creatively about what good design looks like when the canvas isn't blank. The result is a product experience that feels simple to the user, even when nothing about building it was.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/rockwallet" className="back-link">← Back to RockWallet</a>
      </div>

    </main>
  );
}