"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useMemo, useState } from "react";

const featureCards = [
  {
    title: "AI Trade Intelligence",
    text: "Confidence scoring, multilingual insights, and structured product discovery across fragmented supply chains.",
  },
  {
    title: "Verified Procurement",
    text: "Secure sourcing workflows with supplier validation, documentation intelligence, and timeline visibility.",
  },
  {
    title: "Connected Payments",
    text: "Escrow-grade confidence with risk-aware financing and operational clarity from quote to delivery.",
  },
];

const metrics = [
  { value: "75+", label: "markets connected" },
  { value: "24/7", label: "intelligent monitoring" },
  { value: "3x", label: "faster deal clarity" },
  { value: "99.4%", label: "workflow visibility" },
];

const flow = [
  "Discovery",
  "Validation",
  "Negotiation",
  "Fulfillment",
  "Settlement",
];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);

  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const glows = useMemo(
    () => [
      { className: "orb orb-one", left: "8%", top: "12%", size: 260 },
      { className: "orb orb-two", left: "54%", top: "18%", size: 340 },
      { className: "orb orb-three", left: "67%", top: "58%", size: 420 },
    ],
    []
  );

  return (
    <main className="page-shell">
      <div className="background-noise" />

      <motion.div style={{ y }} className="hero-ambient">
        {glows.map((orb) => (
          <div
            key={orb.className}
            className={orb.className}
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
          <a href="#capabilities">Capabilities</a>
          <a href="#workflow">Workflow</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="button button-primary">Book a demo</button>
      </header>

      <section className="hero section">
        <div
          className="hero-viewport"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
            setPointer({ x, y });
          }}
        >
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="eyebrow">AI-powered commerce infrastructure</p>
            <h1>
              Global trade,
              <span> decoded for action.</span>
            </h1>
            <p className="lead">
              Trustworthy procurement, connected supply chains, and intelligent market orchestration — built for importers and exporters moving at scale.
            </p>
            <div className="hero-actions">
              <button className="button button-primary">Get started</button>
              <button className="button button-secondary">See platform</button>
            </div>
            <div className="reputation">
              <div>
                <strong>2.4M+</strong>
                <span>product signals processed</span>
              </div>
              <div>
                <strong>41 countries</strong>
                <span>trade coverage</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-scene"
            animate={{
              rotateX: -12 + pointer.y * 10,
              rotateY: 14 + pointer.x * 18,
              y: pointer.y * 12,
            }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            style={{ transformPerspective: 1200 }}
          >
            <div className="scene-glow" />
            <div className="scene-grid" />
            <div className="ring ring-a" />
            <div className="ring ring-b" />
            <div className="data-card card-main glass-panel">
              <div className="card-header">
                <span className="status-dot" />
                Live trade intelligence
              </div>
              <div className="card-graph">
                <span className="bar short" />
                <span className="bar mid" />
                <span className="bar tall" />
                <span className="bar mid" />
                <span className="bar short" />
                <span className="bar tall" />
              </div>
              <div className="signal-row">
                <span>Supplier score</span>
                <strong>96.8</strong>
              </div>
            </div>

            <div className="mini-card glass-panel card-top">Escrow-ready</div>
            <div className="mini-card glass-panel card-bottom">AI routing</div>
            <div className="mini-card glass-panel card-right">Verified</div>
          </motion.div>
        </div>
      </section>

      <section id="platform" className="section platform-intro">
        <div className="section-heading">
          <p className="eyebrow">Platform</p>
          <h2>Commerce intelligence built for complex global operations.</h2>
        </div>

        <div className="feature-grid">
          {featureCards.map((feature, index) => (
            <motion.article
              key={feature.title}
              className="feature-card glass-panel"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
            >
              <div className="feature-icon">0{index + 1}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="section metrics-panel glass-panel">
        <div className="section-heading narrow">
          <p className="eyebrow">Performance</p>
          <h2>Operational visibility that keeps every trade decision clear.</h2>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              className="metric-item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="workflow" className="section workflow-section">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>
          <h2>From sourcing signal to settlement certainty.</h2>
        </div>

        <div className="flow-line">
          {flow.map((step, index) => (
            <motion.div
              key={step}
              className="flow-step glass-panel"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="section cta-panel glass-panel">
        <div>
          <p className="eyebrow">Build smarter trade</p>
          <h2>Turn fragmented commerce into a connected operating system.</h2>
        </div>
        <button className="button button-primary">Request a strategy call</button>
      </section>
    </main>
  );
}
