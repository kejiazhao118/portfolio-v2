"use client";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="sidebar-name">
        <a href="/">AVISS KEJIA<br />ZHAO</a>
      </div>

      <nav>
        <a href="/" className={`nav-bold ${pathname === "/" ? "active" : ""}`}>Work</a>
        <a href="/resume.pdf" target="_blank" className="nav-bold">CV</a>
        <a href="/about" className={`nav-gap nav-small ${pathname === "/about" ? "active" : ""}`}>About</a>
        <a href="/etc" className={`nav-small ${pathname === "/etc" ? "active" : ""}`}>Etc.</a>
      </nav>

      <div className="sidebar-social">
        <a href="https://www.linkedin.com/in/aviss-k-zhao-4834823b/" target="_blank" aria-label="LinkedIn">
          <i className="ti ti-brand-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/avisszhao/" target="_blank" aria-label="Instagram">
          <i className="ti ti-brand-instagram"></i>
        </a>
        <a href="mailto:aviszkj@hotmail.com" aria-label="Email">
          <i className="ti ti-mail"></i>
        </a>
      </div>
    </aside>
  );
}