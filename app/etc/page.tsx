"use client";

import { useEffect } from "react";

const leftItems = [
  { img: "/images/etc/3d-chess.webp", alt: "3D Chess Modelling", title: "3D Chess Modelling", tags: "3D Modelling, 3D Design" },
  { img: "/images/etc/Timeline.webp", alt: "Infographic Timeline", title: "Infographic — Timeline", tags: "Information Design, Visual Design, Data Visualization" },
  { img: "/images/etc/Illustration.webp", alt: "Illustration", title: "Illustration", tags: "Illustration, Digital Drawing" },
  { img: "/images/etc/Wedding-logo.webp", alt: "Freelance Wedding Logo", title: 'Freelance — Wedding Logo "Piano & Violin"', tags: "Graphic Design" },
  { img: "/images/etc/Shaxi-logo.webp", alt: "Freelance Shaxi Logo", title: "Freelance — Logo for Jie Xiang Ju Inn, Sha'xi Ancient Town", tags: "Graphic Design" },
];

const rightItems = [
  { img: "/images/etc/Illustration-2.webp", alt: "Illustration 2", title: "Illustration", tags: "Illustration, Digital Drawing" },
  { img: "/images/etc/Tech-drawing.webp", alt: "Tech Drawing", title: "Tech Drawing", tags: "Technical Drawing, Design" },
  { img: "/images/etc/Tech-drawing-gameboy.webp", alt: "Tech Drawing Game Boy", title: "Tech Drawing — Game Boy", tags: "Technical Drawing, Design" },
  { img: "/images/etc/Illustration-3.webp", alt: "Illustration 3", title: "Illustration", tags: "Illustration, Digital Drawing" },
  { img: "/images/etc/Banner.webp", alt: "Freelance Banner Design", title: "Freelance — Banner Design for Yesbit Technology Ltd.", tags: "Graphic Design" },
];

export default function Etc() {
  useEffect(() => {
    const leftCards = Array.from(document.querySelectorAll(".col-left .project"));
    const rightCards = Array.from(document.querySelectorAll(".col-right .project"));

    const allCards = [
      ...leftCards.map((el, i) => ({ el, i, side: "left" })),
      ...rightCards.map((el, i) => ({ el, i, side: "right" })),
    ].sort((a, b) => a.i - b.i);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const card = entry.target as HTMLElement;
            const side = card.dataset.side;
            const index = parseInt(card.dataset.index || "0");
            setTimeout(() => {
              card.classList.add(side === "left" ? "jiggle-a" : "jiggle-b");
            }, index * 80);
            observer.unobserve(card);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    allCards.forEach(({ el, i, side }) => {
      const card = el as HTMLElement;
      card.dataset.side = side;
      card.dataset.index = String(i);
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="main-content etc-main">
      <div className="projects">
        <div className="col-left">
          {leftItems.map((item, i) => (
            <div key={i} className="project" style={{ cursor: "default" }}>
              <div className="project-thumb">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="project-title">{item.title}</div>
              <div className="project-tags etc-tags">{item.tags}</div>
            </div>
          ))}
        </div>

        <div className="col-right">
          {rightItems.map((item, i) => (
            <div key={i} className="project" style={{ cursor: "default" }}>
              <div className="project-thumb">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="project-title">{item.title}</div>
              <div className="project-tags etc-tags">{item.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}