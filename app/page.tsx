"use client";

import { useEffect } from "react";

const leftProjects = [
  {
    href: "/rockwallet",
    img: "/images/RockWallet-cover.webp",
    alt: "RockWallet Product Design",
    title: "RockWallet - Product Design",
    tags: "UI/UX, Product Design, Research, AI-Integrated Workflow, Cross-functional Collaboration",
  },
  {
    href: "/virgocx-design-system",
    img: "/images/VirgoCX-design-system-cover.webp",
    alt: "VirgoCX Design System",
    title: "VirgoCX - Design System",
    tags: "UI/UX, Product Design, Research, Design System, Accessibility",
  },
  {
    href: "/gate-io",
    img: "/images/Gate.io-cover.webp",
    alt: "Gate.io",
    title: "Gate.io",
    tags: "UI/UX, Product Design, Research, Problem Analysis",
  },
  {
    href: "/cineplex-redesign",
    img: "/images/Cineplex-cover.webp",
    alt: "Cineplex Mobile App Redesign",
    title: "Cineplex Mobile App Redesign",
    tags: "UI/UX, Product Design, Research, Visual Design, Prototype",
  },
  {
    href: "/lumia-nft",
    img: "/images/Lumia-cover.webp",
    alt: "Lumia NFT",
    title: "Lumia NFT",
    tags: "UI/UX, Branding, Research, Visual Design, Prototype",
  },
  {
    href: "/hidden",
    img: "/images/Hidden-cover.webp",
    alt: "Hidden",
    title: "Hidden",
    tags: "UI/UX, Research, Branding, Augmented Reality, Visual Design",
  },
];

const rightProjects = [
  {
    href: "/virgocx-design-collection",
    img: "/images/VirgoCX-project-showcase-cover.webp",
    alt: "VirgoCX Project Showcases",
    title: "VirgoCX Design Collection",
    tags: "UI/UX, Product Design, Research, Graphic/Visual Design",
  },
  {
    href: "/tru-moodle",
    img: "/images/True-moodle-cover.webp",
    alt: "TRU Moodle Dashboard Redesign",
    title: "TRU Moodle Dashboard Redesign",
    tags: "UI/UX, Web Design, Research, Visual Communication",
  },
  {
    href: "/momoisland",
    img: "/images/Momoisland-cover.webp",
    alt: "Momoisland",
    title: "Momoisland E-Commerce Mobile App UI Design",
    tags: "UI/UX, Product Design, Research",
  },
  {
    href: "/vertical-farming",
    img: "/images/Vertical-farming-cover.webp",
    alt: "Vertical Farming",
    title: "Vertical Farming",
    tags: "Interaction Installation, UI/UX, Research, Motion Graphic",
  },
  {
    href: "/creative-ui",
    img: "/images/Creative-ui-cover.webp",
    alt: "Creative UI Design",
    title: "Creative UI Design",
    tags: "Web/App UI Design, Visual Design, Creation",
  },
  {
    href: "/usability-wechat",
    img: "/images/Usability-testing-cover.webp",
    alt: "Usability Testing for WeChat",
    title: "Usability Testing for WeChat",
    tags: "UX Research, UX Analysis, Usability Studies",
  },
];

export default function Home() {
  useEffect(() => {
    const leftCards = document.querySelectorAll(".col-left .project");
    const rightCards = document.querySelectorAll(".col-right .project");

    const allCards = [
      ...Array.from(leftCards).map((el, i) => ({ el, i, side: "left" })),
      ...Array.from(rightCards).map((el, i) => ({ el, i, side: "right" })),
    ].sort((a, b) => a.i - b.i);

    allCards.forEach(({ el, i, side }) => {
      const card = el as HTMLElement;
      card.style.opacity = "0";
      setTimeout(() => {
        card.classList.add(side === "left" ? "jiggle-a" : "jiggle-b");
      }, i * 120);
    });
  }, []);

  return (
    <main className="main-content">
      <div className="projects">
        <div className="col-left">
          {leftProjects.map((p) => (
            <a key={p.href} href={p.href} className="project">
              <div className="project-thumb">
                <img src={p.img} alt={p.alt} />
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-tags">{p.tags}</div>
            </a>
          ))}
        </div>

        <div className="col-right">
          {rightProjects.map((p) => (
            <a key={p.href} href={p.href} className="project">
              <div className="project-thumb">
                <img src={p.img} alt={p.alt} />
              </div>
              <div className="project-title">{p.title}</div>
              <div className="project-tags">{p.tags}</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}