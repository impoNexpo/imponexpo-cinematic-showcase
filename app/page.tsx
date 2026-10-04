"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

const features = [
  {
    title: "AI Trade Assistant",
    text: "Crossbotra orchestrates sourcing, supplier vetting, order execution, and compliance checks across fragmented supply chains.",
    icon: "🤖",
  },
  {
    title: "Verified Supplier Network",
    text: "Matchmaking with certified manufacturers, brands, and exporters. Confidence scoring and multilingual insights for every supplier.",
    icon: "✓",
  },
  {
    title: "Escrow-Grade Payments",
    text: "Secure milestone-based transactions with risk-aware financing. Payment confidence from quote to delivery settlement.",
    icon: "🔒",
  },
];

const resourceCategories = [
  { name: "Insights", description: "AI & trade thought leadership" },
  { name: "Learning Zone", description: "Self-paced courses on compliance, finance, AI" },
  { name: "Tutorials", description: "Step-by-step product walkthroughs" },
  { name: "Guides", description: "Playbooks for trade operations" },
];

const tradeflow = [
  "Discover suppliers",
  "Validate credentials",
  "Negotiate terms",
  "Execute orders",
  "Track & settle",
];

const stats = [
  { value: "75+", label: "countries" },
  { value: "2.4M+", label: "signals" },
  { value: "24/7", label: "AI monitoring" },
  { value: "99.4%", label: "visibility" },
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const orbs = useMemo(
    () => [
      { left: "8%", top: "12%", size: 320, color: "primary" },
      { left: "58%", top: "16%", size: 380, color: "secondary" },
      { left: "72%", top: "62%", size: 460, color: "accent" },
    ],
    []
  );

  return (
    <main className="page-shell">
      <div className="background-noise" />

      <motion.div style={{ y }} className="hero-ambient">
        {orbs.map((orb, idx) => (
          <div
            key={idx}
            className={`orb orb-${orb.color}`}
            style={{
              left: orb.left,
              top: orb.top,
              width: orb.size,
              height: orb.size,
            }}
          />
        ))}
      </motion.div>

      <header className="topbar glass-panel">
        <div className="brand-wrap">
          <div className="brand-mark">I</div>
          <span>ImpoNexpo</span>
        </div>
        <nav>
          <a href="#platform">Platform</a>
          <a href="#resources">Resources</a>
          <a href="#workflow">Trade Flow</a>
          <a href="#engineering">Engineering</a>
        </nav>
        <button className="button button-primary">Start Trading</button>
      </header>

      <section className="hero section">
        <div
          className="hero-viewport"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
            setPointer({ x, y });
          }}
        >
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">AI-powered global trade infrastructure</p>
            <h1>
              Connected commerce,
              <span> decoded by AI.</span>
            </h1>
            <p className="lead">
              Discover verified suppliers, manage trade risk, and move goods with confidence across
              global markets. Imponexpo brings sourcing, compliance, financing, and fulfillment into one
              connected operating system.
            </p>
            <div className="hero-actions">
              <button className="button button-primary">Explore Platform</button>
              <button className="button button-secondary">View Resources</button>
            </div>
            <div className="reputation">
              <div>
                <strong>2.4M+</strong>
                <span>product signals indexed</span>
              </div>
              <div>
                <strong>75+ countries</strong>
                <span>trade coverage</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-scene"
            animate={{
              rotateX: -14 + pointer.y * 12,
              rotateY: 16 + pointer.x * 20,
              y: pointer.y * 14,
            }}
            transition={{ type: "spring", stiffness: 85, damping: 16 }}
            style={{ transformPerspective: 1400 }}
          >
            <div className="scene-glow" />
            <div className="scene-grid" />
            <div className="ring ring-a" />
            <div className="ring ring-b" />

            <div className="data-card card-main glass-panel">
              <div className="card-header">
                <span className="status-dot" />
                Live Trade Activity
              </div>
              <div className="card-graph">
                {["short", "mid", "tall", "mid", "short", "tall"].map((h, i) => (
                  <span key={i} className={`bar ${h}`} />
                ))}
              </div>
              <div className="signal-row">
                <span>Supplier confidence</span>
                <strong>94.7</strong>
              </div>
            </div>

            <div className="mini-card glass-panel card-top">AI Verified</div>
            <div className="mini-card glass-panel card-bottom">Escrow Safe</div>
            <div className="mini-card glass-panel card-right">Connected</div>
          </motion.div>
        </div>
      </section>

      <section id="platform" className="section platform-section">
        <div className="section-heading">
          <p className="eyebrow">Core Platform</p>
          <h2>Three pillars of intelligent global trade.</h2>
        </div>

        <div className="feature-grid">
          {features.map((feature, idx) => (
            <motion.article
              key={feature.title}
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section stats-panel glass-panel">
        <div className="section-heading narrow">
          <p className="eyebrow">Global Reach</p>
          <h2>Scale and visibility across borders.</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="resources" className="section resources-section">
        <div className="section-heading">
          <p className="eyebrow">Learning & Resources</p>
          <h2>Master global trade with AI guidance.</h2>
        </div>

        <div className="resource-grid">
          {resourceCategories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              className="resource-card glass-panel"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
              <a href="#" className="card-link">Explore →</a>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">The Trade Lifecycle</p>
          <h2>From discovery to settlement in minutes.</h2>
        </div>

        <div className="flow-line">
          {tradeflow.map((step, idx) => (
            <motion.div
              key={step}
              className="flow-step glass-panel"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <span className="step-num">{String(idx + 1).padStart(2, "0")}</span>
              <h4>{step}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="engineering" className="section engineering-section glass-panel">
        <div>
          <p className="eyebrow">Open Research & Engineering</p>
          <h2>AI, NLP, and agentic systems for commerce.</h2>
          <p className="lead">
            Explore our open-source projects, research papers, and collaborate with the Imponexpo
            engineering team on GitHub.
          </p>
        </div>
        <button className="button button-primary">Visit GitHub</button>
      </section>

      <section className="section cta-section glass-panel">
        <div>
          <p className="eyebrow">Ready to transform your trade?</p>
          <h2>Join 2000+ importers already using Imponexpo.</h2>
        </div>
        <button className="button button-primary">Get Started Free</button>
      </section>
    </main>
  );
}
