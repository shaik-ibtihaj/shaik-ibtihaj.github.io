"use client";

const skillCategories = [
  {
    title: "Programming Languages",
    color: "#60a5fa",
    skills: ["Python", "Java", "JavaScript", "SQL", "C/C++"],
  },
  {
    title: "Web & Software Development",
    color: "#a78bfa",
    skills: ["React", "HTML", "CSS", "Node.js", "REST APIs", "Full-Stack Dev"],
  },
  {
    title: "AI / Machine Learning",
    color: "#f472b6",
    skills: [
      "Machine Learning",
      "Data Analysis",
      "Model Development",
      "Computer Vision",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    title: "Data & Databases",
    color: "#22d3ee",
    skills: ["SQL", "Pandas", "NumPy", "Data Processing", "Database Management"],
  },
  {
    title: "Tools & Technologies",
    color: "#34d399",
    skills: ["Git", "GitHub", "Linux", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "Core Computer Science",
    color: "#fb923c",
    skills: ["Data Structures & Algorithms", "OOP", "Software Engineering"],
  },
  {
    title: "Soft Skills",
    color: "#e879f9",
    skills: [
      "Analytical Thinking",
      "Team Collaboration",
      "Communication",
      "Adaptability",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--neon-purple)" }}
          >
            Technical Expertise
          </p>
          <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p
            className="section-subtitle reveal mx-auto text-center"
            style={{ transitionDelay: "0.2s" }}
          >
            A comprehensive toolkit spanning software development, machine learning,
            and data engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={cat.title}
              className="glass-card p-6 reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: cat.color,
                    boxShadow: `0 0 10px ${cat.color}88`,
                  }}
                />
                <h3 className="font-semibold text-sm">{cat.title}</h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{
                      background: `${cat.color}12`,
                      borderColor: `${cat.color}30`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
