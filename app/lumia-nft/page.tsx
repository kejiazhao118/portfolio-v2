import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lumia NFT — AVISS KEJIA ZHAO",
};

export default function LumiaNFT() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">Lumia NFT Marketplace Mobile App</h1>
      <p className="case-subtitle">A passion project designing a dedicated NFT marketplace mobile app — from UX research and branding to high-fidelity UI and prototype.</p>

      <img src="/images/lumia-nft/Cover.webp" alt="Lumia NFT Marketplace Mobile App" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">Having worked in the cryptocurrency industry, topics around blockchain, crypto, and NFTs were part of my daily work. NFT (non-fungible token) is a unique digital identifier recorded on a blockchain that certifies ownership and authenticity — it cannot be copied, substituted, or subdivided, and its ownership can be transferred, enabling NFTs to be bought, sold, and traded.</p>
        <p className="section-body">As the global crypto market grew, many trading platforms began developing their own NFT platforms to meet demand for buying, selling, collecting, and trading digital assets. Our company was also building an NFT platform — web-based but responsive on mobile.</p>
        <p className="section-body">This passion project explores what a dedicated mobile app version of that platform could look like. The primary goal: a focused NFT marketplace that makes it easy for users to engage with digital assets in a clean, intuitive experience.</p>
      </div>

      <div className="section">
        <p className="section-label">UX Research</p>
        <p className="section-body">The project began with comprehensive research into the existing NFT app landscape — studying competitor platforms, analyzing user reviews, and identifying trends in customer needs and pain points.</p>

        <p className="section-body" style={{ marginTop: "1.5rem" }}><strong>Competitor Analysis — OpenSea</strong></p>
        <p className="section-body">OpenSea was chosen as the primary competitor for analysis, as it is widely recognized as the world's first and largest digital marketplace for crypto collectibles and NFTs. I explored their website thoroughly and downloaded their app, completing several usability tasks — including attempting an NFT purchase, searching for specific pieces, and finding seller information.</p>
        <p className="section-body">The goal of competitor analysis is to understand where a product stands in the market, identify usability gaps, inform design decisions, and build reliable evidence for product direction. Through this process, I found that OpenSea's vast inventory made the purchasing flow feel unnecessarily complex and multi-stepped. This became a key design direction for Lumia: <strong>simplify the NFT purchasing process and create a genuinely user-friendly experience.</strong></p>
        <img src="/images/lumia-nft/Competitor.webp" alt="OpenSea Competitor Analysis" className="img-full" />

        <p className="section-body" style={{ marginTop: "1.5rem" }}><strong>Customer Reviews</strong></p>
        <p className="section-body">Reviewing OpenSea's user feedback provided direct insight into what users value and where frustrations arise — informing the design decisions for Lumia's key flows.</p>
        <img src="/images/lumia-nft/Review-1.webp" alt="OpenSea Review 1" className="img-full" />
        <img src="/images/lumia-nft/Review-2.webp" alt="OpenSea Review 2" className="img-full" />
        <img src="/images/lumia-nft/Review-3.webp" alt="OpenSea Review 3" className="img-full" />
        <img src="/images/lumia-nft/Review-4.webp" alt="OpenSea Review 4" className="img-full" />
        <img src="/images/lumia-nft/Review-5.webp" alt="OpenSea Review 5" className="img-full" />

        <p className="section-body" style={{ marginTop: "1.5rem" }}><strong>User Personas</strong></p>
        <p className="section-body">Two user personas were created to represent the target audience — helping to empathize with real users, communicate research findings, and guide design decisions toward meeting specific user needs.</p>
        <img src="/images/lumia-nft/Persona-1.webp" alt="User Persona James" className="img-full" />
        <img src="/images/lumia-nft/Persona-2.webp" alt="User Persona Joanne" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">Design Process</p>

        <p className="section-body"><strong>Information Architecture</strong></p>
        <p className="section-body">Information architecture (IA) is a foundational step in the design process — organizing content, structuring the app, and ensuring users can navigate intuitively to find what they need. The IA chart maps common features into content groups, linking related pages and establishing a clear hierarchy across the app.</p>
        <img src="/images/lumia-nft/IA.webp" alt="Information Architecture" className="img-full" />

        <p className="section-body" style={{ marginTop: "2rem" }}><strong>Low-Fidelity Wireframes</strong></p>
        <p className="section-body">Wireframes translate the information architecture and user flow into a visual structure — focusing on layout, navigation, and hierarchy without getting into visual detail. This step helps validate the overall structure before investing in high-fidelity design.</p>
        <img src="/images/lumia-nft/Wireframe-1.webp" alt="Wireframe 1" className="img-full" />
        <img src="/images/lumia-nft/Wireframe-2.webp" alt="Wireframe 2" className="img-full" />
        <img src="/images/lumia-nft/Wireframe-3.webp" alt="Wireframe 3" className="img-full" />

        <p className="section-body" style={{ marginTop: "2rem" }}><strong>Branding & Design System</strong></p>
        <p className="section-body">Branding plays a central role in creating a distinct identity for the app. The Lumia NFT brand was built around five key components:</p>
        <ul className="section-list">
          <li><strong>Name</strong> — "Lumia NFT" serves as the primary identifier, distinguishing it within the market</li>
          <li><strong>Logo</strong> — a visual representation of the app's identity: recognizable, purposeful, and tied to the world of digital art</li>
          <li><strong>Typography</strong> — chosen to reinforce the app's visual personality and ensure readability</li>
          <li><strong>Color Palette</strong> — aligned with the app's purpose and target audience, including primary, secondary, and accent colors</li>
          <li><strong>Visual Design</strong> — icons, illustrations, and graphic elements that create a cohesive, polished interface</li>
        </ul>
        <img src="/images/lumia-nft/Branding.webp" alt="Branding Overview" className="img-full" />

        <p className="section-body">The logo uses the letter "L" as its base, connected to a square representing a pixel — a nod to the fundamental building blocks of digital art and NFT collections like CryptoPunks. After evaluating multiple versions, the final logo rounds the bottom corner of the "L" and uses a distinct color for the square to improve visibility. All letterforms are consistent in size, font, and spacing. Both light and dark mode versions were created to ensure optimal visibility across interface settings.</p>
        <img src="/images/lumia-nft/Logo-exploration.webp" alt="Logo Exploration" className="img-full" />
        <img src="/images/lumia-nft/Logo.webp" alt="Final Logo" className="img-full" />
        <img src="/images/lumia-nft/Typography.webp" alt="Typography" className="img-full" />
        <img src="/images/lumia-nft/Color.webp" alt="Color Palette" className="img-full" />
        <img src="/images/lumia-nft/UI-kit.webp" alt="UI Kit" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">High-Fidelity UI Design</p>
        <p className="section-body">Lumia's overall UI follows a minimalist approach — white background, black typography and buttons — creating strong contrast that enhances readability and lets the NFT artwork take centre stage. Waves and planet motifs representing the concept of digital space appear selectively on less information-dense pages, keeping the interface clean and uncluttered. Given that NFTs often feature a wide range of colors, keeping the surrounding UI simple ensures users can focus on the artwork and essential information without distraction.</p>

        <img src="/images/lumia-nft/UI-authorization.webp" alt="Authorization Screens" className="img-full" />
        <p className="caption">Authorization</p>
        <img src="/images/lumia-nft/UI-wallet.webp" alt="Wallet Connection Screens" className="img-full" />
        <p className="caption">Wallet Connection</p>
        <img src="/images/lumia-nft/UI-homepage.webp" alt="Home Page Screens" className="img-full" />
        <p className="caption">Home Page</p>
        <img src="/images/lumia-nft/UI-product.webp" alt="Product Page Screens" className="img-full" />
        <p className="caption">Product Page</p>
        <img src="/images/lumia-nft/UI-purchasing.webp" alt="Purchasing Screens" className="img-full" />
        <p className="caption">Purchasing</p>
        <img src="/images/lumia-nft/UI-seller.webp" alt="Seller Page and Activity Screens" className="img-full" />
        <p className="caption">Seller's Page & Activity</p>
        <img src="/images/lumia-nft/UI-settings.webp" alt="Settings Screens" className="img-full" />
        <p className="caption">Settings</p>

        <p className="section-body" style={{ marginTop: "2rem" }}><strong>Individual Screens</strong></p>
        <div className="img-grid-3">
          <img src="/images/lumia-nft/Screen-1.webp" alt="Screen 1" />
          <img src="/images/lumia-nft/Screen-2.webp" alt="Screen 2" />
          <img src="/images/lumia-nft/Screen-3.webp" alt="Screen 3" />
        </div>
        <div className="img-grid-3">
          <img src="/images/lumia-nft/Screen-4.webp" alt="Screen 4" />
          <img src="/images/lumia-nft/Screen-5.webp" alt="Screen 5" />
          <img src="/images/lumia-nft/Screen-7.webp" alt="Screen 7" />
        </div>
        <div className="img-grid-3">
          <img src="/images/lumia-nft/Screen-6.webp" alt="Screen 6" />
          <img src="/images/lumia-nft/Screen-8.webp" alt="Screen 8" />
          <img src="/images/lumia-nft/Screen-9.webp" alt="Screen 9" />
        </div>
        <div className="img-grid-3">
          <img src="/images/lumia-nft/Screen-10.webp" alt="Screen 10" />
          <img src="/images/lumia-nft/Screen-11.webp" alt="Screen 11" />
          <img src="/images/lumia-nft/Screen-12.webp" alt="Screen 12" />
        </div>
        <div className="img-grid-3">
          <img src="/images/lumia-nft/Screen-13.webp" alt="Screen 13" />
          <img src="/images/lumia-nft/Screen-14.webp" alt="Screen 14" />
          <img src="/images/lumia-nft/Screen-15.webp" alt="Screen 15" />
        </div>
      </div>

      <div className="section">
        <p className="section-label">App Mockups</p>
        <img src="/images/lumia-nft/Mockup-1.webp" alt="App Mockup 1" className="img-full" />
        <img src="/images/lumia-nft/Mockup-2.webp" alt="App Mockup 2" className="img-full" />
        <img src="/images/lumia-nft/Mockup-3.webp" alt="App Mockup 3" className="img-full" />
        <img src="/images/lumia-nft/Mockup-4.webp" alt="App Mockup 4" className="img-full" />
        <img src="/images/lumia-nft/Mockup-5.webp" alt="App Mockup 5" className="img-full" />
        <img src="/images/lumia-nft/Mockup-6.webp" alt="App Mockup 6" className="img-full" />
      </div>

      <div className="section">
        <p className="section-label">High-Fidelity Prototype</p>
        <img src="/images/lumia-nft/Prototype.webp" alt="Prototype Preview" className="img-full" />
        <p className="section-body">→ <a href="https://www.figma.com/file/qc8DZW0E5dCr9fUVnZy44x/Lumia-NFT-App?node-id=124%3A27939&t=vGogKBtNNEiX4ju2-1&type=design" target="_blank" style={{ color: "hsl(9, 63%, 65%)" }}>View Lumia NFT Marketplace Mobile App Prototype</a></p>
      </div>

      <div className="section">
        <p className="section-label">Usability Studies</p>
        <p className="section-body">Usability studies were conducted to uncover areas requiring revision based on the current prototype. By observing participants interacting with the app, their feedback provided valuable insights to guide further iteration.</p>
        <ul className="section-list">
          <li>Search bars are not yet available</li>
          <li>The home page product carousel is not yet available</li>
          <li>The purchasing flow is straightforward with clear, essential selections</li>
          <li>Creating an NFT — a major feature — still needs to be designed and developed</li>
          <li>Collection sections are not yet available</li>
        </ul>
        <p className="section-body">Both pros and cons were reviewed with participants. This feedback will guide future iterations — usability studies are a critical part of the design process, helping identify issues before the design is finalized and ensuring the product continues to improve through each cycle.</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">Lumia NFT has been an engaging and multifaceted passion project — spanning ideation, UX research, branding, UI design, and prototyping. Working on it deepened my understanding of NFT market dynamics and gave me insight into what users genuinely want from a digital asset marketplace.</p>
        <p className="section-body">The project also sharpened my design thinking and hands-on skills across every phase of the process. Lumia NFT is an ongoing project — one I'm committed to continuing and building on over time.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link">← Back to Work</a>
      </div>

    </main>
  );
}