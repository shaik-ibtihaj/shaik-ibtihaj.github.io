"use client";

import { Code2, Database, Brain, Layers } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-section-alt py-24">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <p
              className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--neon-blue)" }}
            >
              About Me
            </p>
            <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
              Bridging{" "}
              <span className="gradient-text">Software &amp; Intelligence</span>
            </h2>
            <p
              className="reveal leading-relaxed mb-6"
              style={{
                color: "var(--muted-foreground)",
                fontSize: "1rem",
                lineHeight: 1.8,
                transitionDelay: "0.2s",
              }}
            >
              I am a highly motivated Computer Science student with a strong foundation
              in software development, data engineering, and artificial intelligence.
              I enjoy building scalable, real-world applications using modern technologies
              and continuously learning new tools to solve complex problems.
            </p>
            <p
              className="reveal leading-relaxed mb-8"
              style={{
                color: "var(--muted-foreground)",
                fontSize: "1rem",
                lineHeight: 1.8,
                transitionDelay: "0.3s",
              }}
            >
              My experience spans full-stack development, machine learning, and
              data-driven systems through academic projects and internships. I am
              particularly interested in roles that combine software engineering
              with intelligent automation and data. Eager to contribute, grow in
              a collaborative environment, and create impactful technology solutions.
            </p>

            <div
              className="reveal flex flex-wrap gap-3"
              style={{ transitionDelay: "0.4s" }}
            >
              <button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="btn-neon"
              >
                View Projects
              </button>
              <a
                href="#"
                download
                className="btn-outline-neon inline-block text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="grid grid-cols-2 gap-4 reveal-right">
            {[
              {
                icon: <Code2 size={28} />,
                label: "Full-Stack Dev",
                desc: "React, Node.js, REST APIs",
                color: "#60a5fa",
              },
              {
                icon: <Brain size={28} />,
                label: "AI & ML",
                desc: "Scikit-learn, TensorFlow",
                color: "#a78bfa",
              },
              {
                icon: <Database size={28} />,
                label: "Data Engineering",
                desc: "SQL, Pandas, NumPy",
                color: "#f472b6",
              },
              {
                icon: <Layers size={28} />,
                label: "CS Fundamentals",
                desc: "DSA, OOP, Architecture",
                color: "#22d3ee",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card p-5 flex flex-col gap-3"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${item.color}18`,
                    color: item.color,
                    border: `1px solid ${item.color}33`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
