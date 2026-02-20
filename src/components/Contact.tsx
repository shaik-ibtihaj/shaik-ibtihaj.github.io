"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Send, Download, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const contacts = [
    {
      icon: <Github size={22} />,
      label: "GitHub",
      value: "shaik-ibtihaj",
      href: "https://github.com/shaik-ibtihaj",
      color: "#60a5fa",
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      value: "shaik-ibtihaj-7127b8381",
      href: "https://www.linkedin.com/in/shaik-ibtihaj-7127b8381/",
      color: "#a78bfa",
    },
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "shaikIbtiha07@gmail.com",
      href: "mailto:shaikIbtiha07@gmail.com",
      color: "#f472b6",
    },
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="section-container">
        <div className="text-center mb-16">
          <p
            className="reveal text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--neon-pink)" }}
          >
            Get In Touch
          </p>
          <h2 className="section-title reveal" style={{ transitionDelay: "0.1s" }}>
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p
            className="section-subtitle reveal mx-auto text-center"
            style={{ transitionDelay: "0.2s" }}
          >
            Have a project idea or opportunity? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Contact info */}
          <div className="reveal-left">
            <h3 className="font-semibold text-lg mb-6">Contact Information</h3>

            <div className="flex flex-col gap-4 mb-8">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass-card p-4 flex items-center gap-4 group no-underline"
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${c.color}15`,
                      color: c.color,
                      border: `1px solid ${c.color}30`,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      {c.label}
                    </p>
                    <p
                      className="text-sm font-medium mt-0.5 break-all"
                      style={{ color: "var(--foreground)" }}
                    >
                      {c.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Resume Download */}
              <a
                href="/Ibtihajulla%20Sha%20Resume.pdf"
                download="Ibtihajulla-Sha-Resume.pdf"
                className="btn-neon inline-flex items-center gap-2 w-full justify-center"
              >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          {/* Right: Contact form */}
          <div className="reveal-right">
            <div className="glass-card p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      background: "rgba(52, 211, 153, 0.15)",
                      color: "#34d399",
                      border: "1px solid rgba(52, 211, 153, 0.3)",
                    }}
                  >
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="btn-outline-neon mt-6"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Your Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "var(--muted-foreground)" }}
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project opportunity / Collaboration"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--muted-foreground)" }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      className="form-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-neon flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          style={{ animation: "spin 0.7s linear infinite" }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
