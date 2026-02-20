"use client";

import { Github } from "lucide-react";

const projects = [
  {
    title: "Health Plus",
    subtitle: "Healthcare Management System",
    description:
      "A digital healthcare platform for managing appointments and medical records, streamlining patient-doctor interactions with a modern full-stack architecture.",
    tech: ["React", "Node.js", "SQL", "REST APIs"],
    github: "https://github.com/shaik-ibtihaj/Health-Plus",
    color: "#60a5fa",
  },
  {
    title: "Campus360",
    subtitle: "Smart Campus Mobile App",
    description:
      "All-in-one campus companion app for announcements, schedules, navigation, and services — designed for seamless student life.",
    tech: ["Kotlin", "Android Studio", "Firebase"],
    github: "https://github.com/shaik-ibtihaj/Campus-360",
    color: "#a78bfa",
  },
  {
    title: "Churn Prediction System",
    subtitle: "ML Predictive Analytics",
    description:
      "Predictive ML model to identify customer churn using historical behavioral data, enabling proactive retention strategies.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com/shaik-ibtihaj/churn-prediction",
    color: "#f472b6",
  },
  {
    title: "Full-Stack Web Application",
    subtitle: "Responsive Web App",
    description:
      "Responsive web application with authentication, database integration, and a clean modern UI for real-world usability.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/shaik-ibtihaj",
    color: "#22d3ee",
  },
  {
    title: "Data Analysis & Visualization",
    subtitle: "Exploratory Data Analysis",
    description:
      "Exploratory data analysis and insight generation using real-world datasets, producing actionable visualizations.",
    tech: ["Python", "Pandas", "Matplotlib", "Jupyter"],
    github: "https://github.com/shaik-ibtihaj",
    color: "#34d399",
  },
  {
    title: "OOP Software Application",
    subtitle: "Object-Oriented Design",
    description:
      "Modular application demonstrating clean OOP principles including inheritance, encapsulation, and design patterns.",
    tech: ["Java", "C++"],
    github: "https://github.com/shaik-ibtihaj",
    color: "#fb923c",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-section-alt py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--neon-cyan)" }}
          >
            Portfolio
          </p>
          <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className="section-subtitle reveal mx-auto text-center"
            style={{ transitionDelay: "0.2s" }}
          >
            A selection of projects built across full-stack development, machine learning, and data engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-6 flex flex-col gap-4 group reveal"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Top bar accent */}
              <div
                className="h-1 w-12 rounded-full mb-1 transition-all duration-300 group-hover:w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              {/* Title */}
              <div>
                <h3 className="font-bold text-lg leading-tight">{project.title}</h3>
                <p
                  className="text-xs mt-0.5 font-medium"
                  style={{ color: project.color }}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--muted-foreground)" }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="skill-badge text-xs"
                    style={{
                      background: `${project.color}12`,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 hover:gap-2.5"
                  style={{ color: "var(--muted-foreground)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = project.color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-foreground)")}
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://github.com/shaik-ibtihaj"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-neon inline-flex items-center gap-2"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
