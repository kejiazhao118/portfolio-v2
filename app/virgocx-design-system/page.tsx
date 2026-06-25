import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VirgoCX - Design System — AVISS KEJIA ZHAO",
};

export default function VirgoCXDesignSystem() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link"><span>←</span> Back to Work</a>

      <h1 className="case-title">VirgoCX — Building a Design System from the Ground Up</h1>
      <p className="case-subtitle">Building a scalable design foundation for a growing Canadian crypto platform across web, mobile, and marketing channels.</p>

      <img src="/images/virgocx-ds/Cover.png" alt="VirgoCX Design System Cover" className="case-cover" />

      <div className="section">
        <p className="section-label">About VirgoCX</p>
        <p className="section-body">VirgoCX is a Canadian crypto trading platform serving both new and advanced traders across web, app, and marketing channels.</p>
      </div>

      <div className="section">
        <p className="section-label">My Role</p>
        <p className="section-body">UI/UX Designer — collaborated with the design lead, product manager, and developers. Focus: scalability, accessibility, and design-to-development workflow.</p>
      </div>

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">When I first joined VirgoCX, the team lacked a proper design system, which resulted in inconsistencies across products. I audited the existing UI, standardized components, and established guidelines for typography, color, spacing, and accessibility. Alongside this, I created logo variations for the company's overseas expansion. The result: faster collaboration, less repeated work, and a consistent visual foundation across all products and channels.</p>
        <p className="section-body"><strong>Confidentiality:</strong> Due to company policies on privacy and confidentiality, I am unable to disclose full details of the work process or product-related projects. However, for this ongoing project, I can share examples of standardized components to demonstrate my understanding of design systems and showcase my skills as a designer, while still respecting company guidelines and maintaining confidentiality.</p>
      </div>

      <hr className="divider" />

      <div className="section">
        <p className="section-label">The Problem</p>
        <img src="/images/virgocx-ds/The-problem.png" alt="The Problem" className="img-full" />
        <img src="/images/virgocx-ds/Issues.png" alt="Issues" className="img-full" />
        <p className="section-body"><strong>Examples of areas for improvement:</strong></p>
        <img src="/images/virgocx-ds/Areas-for-improvement-1.png" alt="Areas for improvement 1" className="img-full" />
        <img src="/images/virgocx-ds/Areas-for-improvement-2.png" alt="Areas for improvement 2" className="img-full" />
        <img src="/images/virgocx-ds/Areas-for-improvement-3.png" alt="Areas for improvement 3" className="img-full" />
        <img src="/images/virgocx-ds/Areas-for-improvement-4.png" alt="Areas for improvement 4" className="img-full" />
        <p className="section-body">The examples highlighted above represent only a portion of the areas for improvement within the design system. Many additional aspects will need to be assessed and refined to ensure the system remains scalable, consistent, and supportive of future growth.</p>
      </div>

      <div className="section">
        <p className="section-label">The Goal</p>
        <img src="/images/virgocx-ds/The-goal.png" alt="The Goal" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Research</p>
        <img src="/images/virgocx-ds/Research-and-audit.png" alt="Research and Audit" className="img-full" />
        <p className="section-body">Since we were building the design system from the ground up, I spent this phase researching <strong>how successful design systems are structured and what key considerations make them effective.</strong> I explored a variety of resources, including Figma community examples and materials from the Interaction Design Foundation, taking notes on best practices and common pitfalls.</p>
        <p className="section-body"><strong>Examples of some useful resources:</strong></p>
        <img src="/images/virgocx-ds/Figma-resources.png" alt="Figma resources" className="img-full" />
        <img src="/images/virgocx-ds/Interaction-design-foundation.png" alt="Interaction Design Foundation" className="img-full" />
        <img src="/images/virgocx-ds/Google-material-design.png" alt="Google Material Design" className="img-full" />
        <p className="section-body">Next, I worked with the design lead to <strong>audit the existing products</strong> — reviewing components, typography, color usage, spacing, and layout patterns. Since we were building from the ground up, <strong>I mainly focused on organizing the core elements</strong> — colors, typography, spacing, and key components — which helped us highlight inconsistency and gaps across the product.</p>
      </div>

      <div className="section">
        <p className="section-label">Accessibility</p>
        <img src="/images/virgocx-ds/Accessibility.png" alt="Accessibility" className="img-full" />
        <p className="section-body"><strong>My approach to accessibility has two parts:</strong></p>
        <p className="section-body"><strong>1. General accessibility basics</strong> — things like color contrast, readable typography, font size, clear hierarchy, responsive layouts, and keyboard-friendly interactions.</p>
        <img src="/images/virgocx-ds/Color-contrast.png" alt="Color contrast" className="img-full" />
        <img src="/images/virgocx-ds/Readable-font.png" alt="Readable font" className="img-full" />
        <img src="/images/virgocx-ds/Responsive-layout.png" alt="Responsive layout" className="img-full" />
        <p className="section-body"><strong>2. Accessibility in the context of the product.</strong> For example, when I was at VirgoCX, I noticed through competitive research that Binance had already started implementing accessibility features. In trading, most charts rely on a red–green color system, which makes it difficult for users with red-green color-vision deficiencies to interpret market signals accurately. So Binance even introduced a color-deficiency mode, which I think is <strong>a great example of inclusive design.</strong></p>
        <img src="/images/virgocx-ds/Binance-1.png" alt="Binance 1" className="img-full" />
        <img src="/images/virgocx-ds/Binance-2.png" alt="Binance 2" className="img-full" />
        <img src="/images/virgocx-ds/Binance-3.png" alt="Binance 3" className="img-full" />
        <p className="section-body">In trading — whether stocks, crypto, or forex — <strong>red and green dominate the screen</strong>. Red indicates a price decrease, while green signals an increase. For individuals with <strong>red-green color vision deficiencies</strong>, these cues can be difficult to interpret, leading to costly, poorly timed trades. In a market like crypto, which moves rapidly and never sleeps, even a few seconds of hesitation or misinterpretation can create a significant disadvantage.</p>
        <img src="/images/virgocx-ds/Binance-color-1.png" alt="Binance color 1" className="img-full" />
        <img src="/images/virgocx-ds/Binance-color-2.png" alt="Binance color 2" className="img-full" />
        <p className="section-body">In my competitor analysis of Binance, I noted that their recent UI Refined update introduced improvements such as enhanced typography, dark mode, and customizable layout widgets. <strong>They also included features addressing color vision deficiencies</strong> — an important consideration in trading platforms.</p>
        <p className="section-body"><strong>Accessibility Consideration/Improvements:</strong> Drawing from these observations, I prioritized accessibility in the VirgoCX design system by focusing on readability, responsive design, and consideration of color vision deficiency modes.</p>
        <img src="/images/virgocx-ds/Accessibility-improvement-1.png" alt="Accessibility improvement 1" className="img-full" />
        <img src="/images/virgocx-ds/Accessibility-improvement-2.png" alt="Accessibility improvement 2" className="img-full" />
        <img src="/images/virgocx-ds/Accessibility-improvement-3.png" alt="Accessibility improvement 3" className="img-full" />
        <p className="section-body">Based on research and competitor analysis, key accessibility considerations were identified for the design system. <strong>Accessibility is an ongoing effort, and there is always room to further incorporate improvements in the future.</strong></p>
      </div>

      <hr className="divider" />

      <div className="section">
        <p className="section-label">Process</p>
        <p className="section-body">To ensure consistency across the design system, I created a comprehensive table as a work guidance tool. It captured the initial state of each component, identified required improvements, documented the standardized redesign, and included a final quality and accessibility review.</p>
        <img src="/images/virgocx-ds/Before-and-after-1.png" alt="Before and After 1" className="img-full" />
        <img src="/images/virgocx-ds/Before-and-after-2.png" alt="Before and After 2" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Foundations & Components</p>
        <h3 className="vcx-subsection-title">Colors</h3>
        <p className="section-body">The first organized part of the design system was the color palette. When the company expanded overseas in 2022, Virgo Group introduced a new logo and brand colors. This provided the perfect opportunity to structure colors by function — logo colors, functional colors, neutral tones, and background colors.</p>
        <img src="/images/virgocx-ds/Colors.png" alt="Colors" className="img-full" />
        <p className="section-body">Most importantly, the colors followed standardized <strong>naming conventions</strong>. This means that <strong>color names describe their function or usage rather than the color itself</strong>, making them easy for developers to understand and implement.</p>
        <img src="/images/virgocx-ds/Color-naming-1.png" alt="Color naming 1" className="img-full" />
        <img src="/images/virgocx-ds/Color-naming-2.png" alt="Color naming 2" className="img-full" />
        <p className="section-body">Later that year, with the launch of dark mode on the mobile app, we introduced the dark mode color palette. This color foundation now anchors the design system and supports the scalability of future products.</p>
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Typography</h3>
        <p className="section-body">The <strong>Matter font family</strong> was chosen for the website, while the <strong>Nunito font family</strong> was applied across the mobile app and trading platform. Beyond font selection, I established detailed guidelines covering heading hierarchies, font sizes, line heights, and spacing ratios.</p>
        <img src="/images/virgocx-ds/Fonts.png" alt="Fonts" className="img-full" />
        <img src="/images/virgocx-ds/Font-desktop.png" alt="Typography desktop" className="img-full" />
        <img src="/images/virgocx-ds/Font-mobile.png" alt="Typography mobile" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Logo</h3>
        <p className="section-body">The original logos were documented in the design system. As the company expanded into Australia and the UK under Virgo Group, new logos were collaboratively developed with stakeholders. <strong>All logos were then systematically documented in the design system.</strong></p>
        <img src="/images/virgocx-ds/Logo.png" alt="Logo" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Button</h3>
        <p className="section-body"><strong>We standardized buttons and their sizes</strong> — large at 60px, medium at 50px, and small at 36px. We also removed gradient colors from the buttons and kept them solid to ensure visual consistency.</p>
        <img src="/images/virgocx-ds/Buttons-before.png" alt="Buttons before" className="img-full" />
        <img src="/images/virgocx-ds/Buttons-after.png" alt="Buttons after" className="img-full" />
        <img src="/images/virgocx-ds/Buttons-detail-1.png" alt="Buttons details" className="img-full" />
        <img src="/images/virgocx-ds/Buttons-detail-2.png" alt="Buttons details 2" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Icons</h3>
        <p className="section-body">At the beginning, icons for both web and mobile were not standardized, as most were sourced from the Noun Project. This led to inconsistencies in style and line weight. To address this, a complete set of standardized icons was purchased to ensure consistency across current products and to support future business expansion.</p>
        <img src="/images/virgocx-ds/Icons-1.png" alt="Icons 1" className="img-full" />
        <img src="/images/virgocx-ds/Icons-2.png" alt="Icons 2" className="img-full" />
        <p className="section-body"><strong>Cryptocurrency icons were heavily used across both product and visual design</strong> — ranging from the trading platform to marketing campaigns and printed event materials. To ensure consistency, I standardized these icons and properly labeled them in the design system.</p>
        <img src="/images/virgocx-ds/Crypto-icons.png" alt="Crypto icons" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Responsive Key Area Layout for Web & H5</h3>
        <p className="section-body">If the responsive key area layout isn't standardized, maintaining consistency becomes difficult — especially when multiple standalone websites exist under the company. We defined responsive key area layouts for both Web and H5 platforms to ensure consistent spacing and alignment across different screen sizes.</p>
        <p className="section-body">For Web (≥1248px), the key area ranges from 1200px to 1440px with horizontal padding between 24px and 360px. For H5 (&lt;992px), we adopted a mobile-first approach, scaling the key area from 944px down to 351px with padding from 24px to 12px.</p>
        <img src="/images/virgocx-ds/Responsive-key-area-layout.png" alt="Responsive Key Area Layout" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Header & Footer</h3>
        <p className="section-body">With the revamp of the main website virgocx.ca, the header and footer were standardized to ensure consistency ahead of the company's international expansion. The design was collaboratively developed with the product manager and head of the product team.</p>
        <img src="/images/virgocx-ds/Header.png" alt="Header" className="img-full" />
        <img src="/images/virgocx-ds/Header-virgoCX.png" alt="Header VirgoCX" className="img-full" />
        <img src="/images/virgocx-ds/Footer.png" alt="Footer" className="img-full" />
        <img src="/images/virgocx-ds/Footer-virgocx.png" alt="Footer VirgoCX" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Others</h3>
        <p className="section-body">The design system also includes a set of foundational and UI components — such as spacing scales, border radius tokens, checkboxes, dividers, switches, dropdown menus, input fields, and card layouts.</p>
        <img src="/images/virgocx-ds/Other-components.png" alt="Other components" className="img-full" />
        <p className="section-body"><strong>This design system is not a finished project but rather a foundation that continues to evolve.</strong> It is built to grow with the company's products, allowing more components and standardized elements to be documented and added over time.</p>
      </div>

      <hr className="divider" />

      <div className="section">
        <p className="section-label">Design System in Action</p>
        <h3 className="vcx-subsection-title">Canadian Website Redesign</h3>
        <p className="section-body">Using the design system during the website revamp ensured that each component was standardized and consistently implemented across the redesign. This not only created a more cohesive look and feel but also streamlined the process of updating and building new subpages.</p>
        <p className="section-body"><strong>Old website:</strong></p>
        <img src="/images/virgocx-ds/Old-website.png" alt="Old website" className="img-full" />
        <p className="section-body"><strong>Website revamp:</strong></p>
        <img src="/images/virgocx-ds/Website-revamp-1.png" alt="Website revamp 1" className="img-full" />
        <img src="/images/virgocx-ds/Website-revamp-2.png" alt="Website revamp 2" className="img-full" />
        <img src="/images/virgocx-ds/Website-revamp-3.png" alt="Website revamp 3" className="img-full" />
        <img src="/images/virgocx-ds/Banner.png" alt="Banner" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Brand / Global Consideration</h3>
        <p className="section-body">With VirgoCX expanding overseas, the updated design system became the foundation for building the new <strong>Virgo.co</strong> website, supporting the company's global business strategy. By leveraging standardized components, typography, and color systems, we ensured consistency across regions while still allowing flexibility for localization.</p>
        <img src="/images/virgocx-ds/Virgo-global-1.png" alt="Virgo global 1" className="img-full" />
        <img src="/images/virgocx-ds/Virgo-global-2.png" alt="Virgo global 2" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Dark Mode</h3>
        <p className="section-body">Instead of implementing broader accessibility features at once, the team and I decided to focus on <strong>dark mode</strong> first. Users check the markets throughout the day and night, so readability was key. We tried out several color palettes and finally landed on a dark mode for the mobile trading app first. With the design system in place, adding dark mode to the website in the future will be much easier.</p>
        <img src="/images/virgocx-ds/Darkmode-1.png" alt="Dark mode 1" className="img-full" />
        <img src="/images/virgocx-ds/Darkmode-2.png" alt="Dark mode 2" className="img-full" />
      </div>

      <div className="section">
        <h3 className="vcx-subsection-title">Design Consistency Across Teams and Channels</h3>
        <p className="section-body">Since the design system was established, core brand elements such as logos, colors, typography, and icons have been standardized and centralized. This allows not only the product team, but also the wealth and marketing teams to easily access and reuse these assets.</p>
        <p className="section-body"><strong>By extending beyond product UI, the design system became a shared visual foundation for the entire organization.</strong> It helps different teams work faster, while ensuring brand consistency across digital products, marketing channels, and physical printed materials.</p>
        <img src="/images/virgocx-ds/Brand-consistency-1.png" alt="Brand consistency 1" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-2.png" alt="Brand consistency 2" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-3.png" alt="Brand consistency 3" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-4.png" alt="Brand consistency 4" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-5.png" alt="Brand consistency 5" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-6.jpg" alt="Brand consistency 6" className="img-full" />
        <img src="/images/virgocx-ds/Brand-consistency-7.jpg" alt="Brand consistency 7" className="img-full" />
      </div>

      <hr className="divider" />

      <div className="section">
        <p className="section-label">Challenges</p>
        <p className="section-body">Behind the scenes, we had to navigate several challenges.</p>
        <img src="/images/virgocx-ds/Challenges.png" alt="Challenges" className="img-full" />
        <ul className="section-list">
          <li><strong>Timeline:</strong> This was a long-term, ongoing project that I worked on alongside my core responsibilities. Because of that, progress was incremental, and each phase took longer than initially expected. We focused on steady, sustainable progress rather than rushing incomplete solutions.</li>
          <li><strong>Technical constraints:</strong> While we prioritized foundations and core components first — most of which could be built and gradually implemented — there were still areas that required compromise. For example, ideally we wanted to use gradient buttons and possible animations, but developers pointed out that solid colors were more feasible at the time without heavy CSS overrides. We decided to use solid colors for now while keeping the long-term vision in mind.</li>
          <li><strong>Trade-off decisions:</strong> As the system continues to grow and we move deeper into details like component states, interaction behaviors, do/don't examples etc., technical limitations naturally surface more often. These situations require ongoing collaboration and mutual agreement to balance design quality, feasibility, and scalability.</li>
        </ul>
      </div>

      <div className="section">
        <p className="section-label">Collaboration</p>
        <img src="/images/virgocx-ds/Collaboration.png" alt="Collaboration" className="img-full" />
        <p className="section-body">I worked closely with the design lead to align on strategy, audit existing interface patterns, and define core principles. Throughout the process, I partnered with developers to understand technical constraints early and maintain a shared language around components and behaviors. Using shared tools like Figma, we reduced ambiguity, sped up handoffs, and kept design intent consistent with code implementation.</p>
      </div>

      <div className="section">
        <p className="section-label">Next Steps</p>
        <img src="/images/virgocx-ds/Next-step.png" alt="Next Steps" className="img-full" />
        <p className="section-body">The next steps for the design system include:</p>
        <ul className="section-list">
          <li><strong>Comprehensive documentation:</strong> Creating detailed documentation for all components and guidelines will make the system easier for the entire team to use and ensure consistency as it grows.</li>
          <li><strong>Expanding components:</strong> We plan to add more detailed components and may eventually separate the system into web and mobile versions to better support platform-specific needs.</li>
          <li><strong>Enhanced accessibility:</strong> Key initiatives include supporting users with color vision deficiencies and implementing a "senior mode." Stakeholders and the Head of Product have recognized the importance of these features and support their future implementation.</li>
          <li><strong>WCAG alignment:</strong> We will ensure components and interactions follow WCAG guidelines, including maintaining sufficient color contrast, providing descriptive labels for screen readers, and supporting scalable text. These measures will make the platform more inclusive and user-friendly for a diverse range of users.</li>
        </ul>
        <p className="section-body"><strong>Web Content Accessibility Guidelines</strong></p>
        <img src="/images/virgocx-ds/Wcag-howitworks.png" alt="WCAG 2" className="img-full" />
        <p className="section-body">WCAG 2.2 was officially published as a W3C Recommendation on October 5, 2023. It builds on earlier versions like WCAG 2.1 by introducing new success criteria that address gaps in accessibility, including better keyboard interaction, clearer focus visibility, and improved mobile usability. As digital products and user behaviors continue to evolve, these updated standards are especially important today. <strong>More governments and organizations are adopting WCAG as a legal requirement and best-practice benchmark, and aligning with WCAG 2.2 helps ensure products are inclusive, usable for a wider range of users, and compliant with accessibility regulations across different regions.</strong></p>
        <img src="/images/virgocx-ds/Wcag-howitworks.png" alt="WCAG How it Works" className="img-full" />
        <p className="section-body">The next step is to become familiar with WCAG 2.2 guidelines and use them as a reference when building and updating the design system. For example, we can check color contrast ratios to ensure text is readable, provide descriptive labels for screen readers, maintain proper focus indicators for keyboard navigation, and support scalable text for users who need larger fonts.</p>
        <p className="section-body">Following these standards is not only about compliance — it's also a great opportunity to learn, grow, and stay up-to-date with modern accessibility practices, ensuring our designs remain inclusive and user-friendly.</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <img src="/images/virgocx-ds/Outcomes.png" alt="Outcomes" className="img-full" />
        <p className="section-body">By standardizing core components, the design system led to an estimated <strong>20–30% faster design-to-development handoff</strong> and helped new team members onboard more quickly. Building this system gave me a deeper understanding of how design decisions impact scalability, consistency, and cross-team collaboration — and reinforced that a design system is never truly complete, but an evolving foundation that grows with the product.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link"><span>←</span> Back to Work</a>
      </div>

    </main>
  );
}