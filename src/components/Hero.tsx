"use client";

import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating background orbs */}
      <div
        className="orb w-[500px] h-[500px] -top-20 -left-40"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div
        className="orb w-[400px] h-[400px] top-1/3 -right-20"
        style={{
          background: "radial-gradient(circle, #8b5cf6, transparent)",
          animationDelay: "2s",
        }}
      />
      <div
        className="orb w-[300px] h-[300px] bottom-20 left-1/4"
        style={{
          background: "radial-gradient(circle, #60a5fa, transparent)",
          animationDelay: "4s",
        }}
      />
      <div
        className="orb w-[250px] h-[250px] top-1/4 left-1/2"
        style={{
          background: "radial-gradient(circle, #a78bfa, transparent)",
          animationDelay: "1s",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(129,140,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(129,140,248,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-8 reveal"
          style={{ color: "var(--neon-blue)", borderColor: "rgba(96,165,250,0.3)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="font-extrabold leading-tight mb-4 reveal"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            letterSpacing: "-0.03em",
            transitionDelay: "0.1s",
          }}
        >
          <span className="gradient-text-animated">Shaik Ibtihajulla Sha</span>
        </h1>

        {/* Role */}
        <h2
          className="font-semibold mb-4 reveal"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "var(--muted-foreground)",
            transitionDelay: "0.2s",
          }}
        >
          Data Science &amp; Software Engineer
        </h2>

        {/* Tagline */}
        <p
          className="mb-10 reveal"
          style={{
            fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
            color: "var(--muted-foreground)",
            maxWidth: "500px",
            margin: "0 auto 2.5rem",
            transitionDelay: "0.3s",
          }}
        >
          Strategic Leader · Operations Expert · Team Builder
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-12 reveal"
          style={{ transitionDelay: "0.4s" }}
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-neon"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-outline-neon"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-3 reveal"
          style={{ transitionDelay: "0.5s" }}
        >
          <a
            href="https://github.com/shaik-ibtihaj"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/shaik-ibtihaj-7127b8381/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:shaikIbtiha07@gmail.com"
            className="social-icon-btn"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="mt-16 flex flex-col items-center gap-1 mx-auto cursor-pointer reveal"
          style={{
            color: "var(--muted-foreground)",
            background: "none",
            border: "none",
            transitionDelay: "0.6s",
          }}
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
