import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative UI Design — AVISS KEJIA ZHAO",
};

export default function CreativeUI() {
  return (
    <main className="main-content case-main">

      <a href="/" className="back-link">← Back to Work</a>

      <h1 className="case-title">Creative UI Design</h1>
      <p className="case-subtitle">A collection of personal UI design explorations — spanning apps and websites — focused on aesthetics, visual composition, and creative expression.</p>

      <img src="/images/creative-ui/Cover.webp" alt="Creative UI Design Cover" className="case-cover" />

      <div className="section">
        <p className="section-label">Context</p>
        <p className="section-body">Outside of my main projects, I enjoy exploring creative UI design for apps and websites. These are not full-scale case studies — they focus on the aesthetic side of design: experimenting with color combinations, typography, layout composition, and visual hierarchy to create visually compelling interfaces.</p>
        <p className="section-body">These explorations help me develop and sharpen skills in visual design, color theory, and intuitive UI composition — skills that directly inform my broader UI/UX practice.</p>
      </div>

      <div className="section">
        <p className="section-label">Creative UI Design</p>

        <img src="/images/creative-ui/Course-hub.webp" alt="Online Design Course Hub UI" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Online Design Course Hub UI</p>

        <img src="/images/creative-ui/Mengyi-1.webp" alt="Interdisciplinary Artist Mengyi Zhou's Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Interdisciplinary Artist Mengyi Zhou's Website</p>

        <img src="/images/creative-ui/Mengyi-2.webp" alt="Interdisciplinary Artist Mengyi Zhou's Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Interdisciplinary Artist Mengyi Zhou's Website</p>

        <img src="/images/creative-ui/Lumia-website.webp" alt="Lumia NFT Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Lumia NFT Website</p>

        <img src="/images/creative-ui/Iceland-website.webp" alt="Iceland Travel Guide Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Iceland Travel Guide Website</p>

        <img src="/images/creative-ui/Iceland-app.webp" alt="Iceland Travel Guide App" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Iceland Travel Guide App</p>

        <img src="/images/creative-ui/Shaxi.webp" alt="Shaxi Ancient Town Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Shaxi Ancient Town Website</p>

        <img src="/images/creative-ui/Portfolio.webp" alt="Portfolio Website" className="img-full" />
        <p className="caption" style={{ marginBottom: "3rem" }}>Portfolio Website</p>
      </div>

      <div className="section">
        <p className="section-label">Outcomes</p>
        <p className="section-body">These personal UI explorations complement my design portfolio by showcasing visual sensibility, creativity, and attention to detail beyond the constraints of client work. More than anything, they're a space for self-expression — a way to explore personal style, aesthetic preferences, and design instincts freely.</p>
      </div>

      <div style={{ padding: 0 }}>
        <a href="/" className="back-link">← Back to Work</a>
      </div>

    </main>
  );
}