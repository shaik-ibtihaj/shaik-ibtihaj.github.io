"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-section-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <p className="font-bold text-xl gradient-text-animated mb-2">
              Shaik Ibtihaj
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Data Science &amp; Software Engineer. Building intelligent,
              scalable solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-semibold text-sm mb-4">Quick Links</p>
            <nav className="flex flex-col gap-2">
              {["home", "about", "skills", "projects", "contact"].map((id) => (
                <button
                  key={id}
                  onClick={() => handleNav(`#${id}`)}
                  className="nav-link text-left capitalize text-sm bg-transparent border-none p-0 cursor-pointer w-fit"
                >
                  {id}
                </button>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold text-sm mb-4">Connect</p>
            <div className="flex gap-3">
              <a
                href="https://github.com/shaik-ibtihaj"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-ibtihaj-7127b8381/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:shaikIbtiha07@gmail.com"
                className="social-icon-btn"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-sm flex items-center gap-1.5"
            style={{ color: "var(--muted-foreground)" }}
          >
            &copy; {year} Shaik Ibtihajulla Sha. All rights reserved.
          </p>
          <p
            className="text-xs flex items-center gap-1"
            style={{ color: "var(--muted-foreground)" }}
          >
            Built with{" "}
            <Heart
              size={12}
              className="inline"
              style={{ color: "#f472b6", fill: "#f472b6" }}
            />{" "}
            using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
