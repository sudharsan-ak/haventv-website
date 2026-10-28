"use client";

import { useEffect, useState } from "react";
import { Brand } from "./Brand";
import { project } from "@/lib/data";
const links = [
  {id: "experience", text:"Themes"},
  {id: "features", text:"Features"},
  {id: "entertainment", text:"Watch Now"},
  {id: "install", text:"Install"},
] as const;

export function Header() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const sync = () => {
      const navHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 86;
      const line = window.scrollY + navHeight + 125;
      let current = "home";
      for (const id of ["home", ...links.map((item)=>item.id)]) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= line) current = id;
      }
      setActive(current);
      setScrolled(window.scrollY > 30);
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => { window.removeEventListener("scroll", sync); window.removeEventListener("resize", sync); };
  }, []);
  return <header className={scrolled ? "is-scrolled" : ""}>
    <div className="container nav-inner">
      <Brand />
      <a className="nav-github-mobile" href={project.repository} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      <nav className="nav-links" aria-label="Main navigation">
        {links.map(({id,text})=><a key={id} href={`#${id}`} aria-current={active===id ? "location" : undefined}>{text}</a>)}
        <a className="nav-github" href={project.repository} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a>
      </nav>
    </div>
  </header>;
}
