"use client";

import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const photo = document.querySelector(".about-photo") as HTMLElement;
    if (photo) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              photo.classList.add("jiggle-a");
              observer.unobserve(photo);
            }
          });
        },
        { threshold: 0, rootMargin: "0px 0px 200px 0px" }
      );
      observer.observe(photo);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <main className="main-content about-main">

      <div className="about-header">
        <img src="/images/about/Profile.webp" alt="Aviss Kejia Zhao" className="about-photo" />
        <div className="about-bio">
          <h1>Curious about people.<br />Passionate about digital craft.<br />Designing the space in between.</h1>
          <p>I'm <strong>Aviss Kejia Zhao</strong>, a <strong>product designer</strong> and <strong>associate registered graphic designer (RGD)</strong> based in Toronto, Canada. I hold a Bachelor of Design from Thompson Rivers University (2023) and an Advanced Diploma in Interaction Design & Development from George Brown Polytechnic (2020).</p>
          <p>I'm a product designer who believes great design lives at the intersection of visual craft and human understanding. I approach every project by grounding decisions in user needs, then pushing the visual and interaction quality until the experience feels both intuitive and considered. With a multidisciplinary education and years of experience across fintech, e-commerce, and digital products, I bring a wide lens to every design challenge — from systems thinking to pixel-level precision.</p>
          <p>My experience spans full-time roles and contract projects across product design, visual design, and design systems. I see design as both a discipline and a joy — something that rewards curiosity, patience, and a genuine care for the people using what you build.</p>
          <p>Outside of work, I'm drawn to cultural experiences — traveling, watching films, and discovering the hidden corners of cities. In 2024, I took time away to reconnect with family and explore Shaxi Ancient Town in Dali, Yunnan. Now I'm back — fully recharged, with a fresh perspective, and a redefined approach to design through the integration of AI.</p>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="section">
        <p className="section-label">Education</p>
        <ul className="edu-list">
          <li>
            <span className="edu-degree">Bachelor of Design</span>
            <span className="edu-school">Thompson Rivers University, Class of 2023</span>
            <span className="edu-note">2023 PLAR Award</span>
          </li>
          <li>
            <span className="edu-degree">Google UX Design Certificate</span>
            <span className="edu-school">2021 – 2022</span>
          </li>
          <li>
            <span className="edu-degree">Advanced Diploma — Interaction Design & Development</span>
            <span className="edu-school">George Brown Polytechnic, Class of 2020</span>
            <span className="edu-note">Dean's Honour List, All Semesters · The Registered Graphic Designers Award</span>
          </li>
        </ul>
      </div>

      {/* EXPERTISE */}
      <div className="section">
        <p className="section-label">Expertise</p>
        <ul className="expertise-list">
          <li><span className="expertise-label">UI/UX</span><span className="expertise-desc">UX Research & Usability Testing, Wireframes, User Flows, Journey Maps, High-Fidelity UI, Prototypes, Responsive Design</span></li>
          <li><span className="expertise-label">Visual Design & Art Direction</span><span className="expertise-desc">Visual Communication, Branding, Marketing Assets, Image Optimization</span></li>
          <li><span className="expertise-label">Design Systems</span><span className="expertise-desc">Component Libraries, Guidelines, Scalable UI Systems, Brand Consistency across Platforms</span></li>
          <li><span className="expertise-label">Collaboration</span><span className="expertise-desc">Cross-Functional Teamwork (Product, Tech, Marketing)</span></li>
          <li><span className="expertise-label">Tools</span><span className="expertise-desc">Figma, Adobe CC, HTML & CSS</span></li>
          <li><span className="expertise-label">AI-Integrated Workflow</span><span className="expertise-desc">Vibe coding, AI-assisted design & prototyping, prompt engineering for design tasks (Claude)</span></li>
          <li><span className="expertise-label">Accessibility</span><span className="expertise-desc">Inclusive Design & WCAG</span></li>
          <li><span className="expertise-label">Languages</span><span className="expertise-desc">English (Advanced), Chinese (Native — asset for bilingual design)</span></li>
        </ul>
      </div>

      {/* CREDENTIALS */}
      <div className="section">
        <p className="section-label section-label-sm">Credentials</p>
        <ul className="credential-list">
          <li><span>2023 PLAR Award</span><a href="/credentials/PLAR-Award.pdf" target="_blank">View →</a></li>
          <li><span>Associate RGD Certificate</span><a href="/credentials/Associate-RGD.pdf" target="_blank">View →</a></li>
          <li><span>Google UX Design Certificate</span><a href="/credentials/Google-UX-Design.pdf" target="_blank">View →</a></li>
          <li><span>2020 RGD Graduate Award</span><a href="/credentials/RGD-Grad-Award.png" target="_blank">View →</a></li>
        </ul>
      </div>

    </main>
  );
}