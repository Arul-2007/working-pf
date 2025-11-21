import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Arul</span></h1>
        <p>A passionate Web Developer crafting modern digital experiences.</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}
