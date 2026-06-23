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
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
          </svg>
        </a>
        <a href="https://www.instagram.com/avisszhao/" target="_blank" aria-label="Instagram">
          <i className="bi bi-instagram" style={{ fontSize: "20px" }}></i>
        </a>
        <a href="mailto:aviszkj@hotmail.com" aria-label="Email">
          <i className="bi bi-envelope" style={{ fontSize: "20px" }}></i>
        </a>
      </div>
    </aside>
  );
}