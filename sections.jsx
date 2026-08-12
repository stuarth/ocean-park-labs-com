/* global React */
const { useEffect, useRef, useState } = React;
const COORD = "49.02° N · 122.87° W";

/* scroll-reveal hook: adds .in when element enters viewport */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ── NAV ─────────────────────────────────────────────────────────────── */
function Nav({ name }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <nav className={"nav" + (scrolled ? " scrolled" : "")}>
      <a className="brand" href="#top">Ocean Park Labs</a>
      <div className="links">
        <a href="#practice">Practice</a>
        <a href="#work">Work</a>
        <a href="#lab">Lab</a>
        <a href="#about">About</a>
        <a className="navcta" href="#contact">Contact&nbsp;→</a>
      </div>
    </nav>
  );
}

/* ── HERO ────────────────────────────────────────────────────────────── */
function Hero({ headline }) {
  return (
    <section className="hero wrap" id="top">
      <div className="reveal in"><span className="eyebrow lede">Independent technology practice · Est. coastal BC</span></div>
      <h1 className="reveal in" data-d="1" dangerouslySetInnerHTML={{ __html: headline }} />
      <p className="sub reveal in" data-d="2">
        Two decades turning hard technology into outcomes, from payment rails moving
        tens of billions a month to AI-first strategy in the field. I build the systems,
        and the teams, that hold up under load.
      </p>
      <div className="actions reveal in" data-d="3">
        <a className="cta cta--box" href="#contact">Start a conversation <span className="arr">→</span></a>
        <a className="cta cta--line" href="#work">See selected work <span className="arr">→</span></a>
      </div>
      <div className="scrollcue reveal in" data-d="4"><span className="ln"></span>Scroll</div>
    </section>
  );
}

/* ── PROOF BAR ───────────────────────────────────────────────────────── */
function Proof() {
  return (
    <section className="proof">
      <div className="wrap row reveal">
        <span className="label">Track record</span>
        <div className="items">
          <span><b>$10B+/mo</b> payments at scale</span>
          <span><b>Multiple</b> startup exits</span>
          <span><b>AI-first</b> agtech, today</span>
          <span><b>20 yrs</b> shipping technology</span>
        </div>
      </div>
    </section>
  );
}

/* ── PRACTICE ────────────────────────────────────────────────────────── */
function Practice() {
  const modes = [
    { n: "01", t: "AI-First Strategy", role: "Strategy · Applied AI", p: "Move leadership from AI ambition to deployed, field-proven systems: a clear thesis, the right first bets, and the engineering to ship them." },
    { n: "02", t: "Engineering Leadership", role: "Fractional / Interim CTO", p: "Stand up the team and the architecture that scale together: hiring, technical direction, and the operating rhythm that keeps shipping reliable." },
    { n: "03", t: "Zero-to-One & Turnarounds", role: "0→1 · Recovery", p: "From first commit to clean exit, or from stalled to shipping. Senior judgment for the moments that decide whether a company makes it." },
  ];
  return (
    <section className="practice wrap" id="practice">
      <div className="shead reveal">
        <h2>Three ways I work with <em>teams that have to ship.</em></h2>
        <span className="coord idx">Practice / 01</span>
      </div>
      <div className="modes">
        {modes.map((m, i) => (
          <div className="mode reveal" data-d={String((i % 3) + 1)} key={m.n}>
            <span className="mnum">{m.n}</span>
            <h3>{m.t}</h3>
            <div className="role">{m.role}</div>
            <p>{m.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── SELECTED WORK ───────────────────────────────────────────────────── */
function Work() {
  const items = [
    { n: "01", t: "Designed the reliability algorithms behind payment rails moving $10B+ a month", m: "Cut failed-transaction rates while scaling throughput", tags: "Top fintech · Platform" },
    { n: "02", t: "Pioneered field-proven methods for measuring agricultural productivity", m: "Turned messy ground-truth into decisions teams could trust", tags: "Agtech · Applied research" },
    { n: "03", t: "Set and shipped an AI-first strategy across an agtech company", m: "From thesis to deployed systems, org-wide", tags: "Current · Strategy" },
    { n: "04", t: "Led technology through multiple startups to acquisition", m: "Founder-level ownership, 0→1 to exit", tags: "Founder-level · M&A" },
    { n: "05", t: "Built and grew engineering organizations that endure", m: "Teams that keep their quality bar after I leave", tags: "Leadership · Teams" },
    { n: "06", t: "Authored through-line, an open method for orchestrating agentic coding", m: "Decisions as the unit of work; verdicts that outlive one agent session", tags: "Open source · Agentic AI", href: "#lab" },
  ];
  return (
    <section className="work wrap" id="work">
      <div className="shead reveal">
        <h2>Selected <em>work.</em></h2>
        <span className="coord idx">Placeholders · swap for real</span>
      </div>
      <div className="wlist">
        {items.map((it) => {
          const Row = it.href ? "a" : "div";
          return (
            <Row className="witem reveal" key={it.n} href={it.href}>
              <span className="num">{it.n}</span>
              <div className="body">
                <div className="t">{it.t}</div>
                <div className="m">{it.m}</div>
              </div>
              <div className="tags">{it.tags}</div>
            </Row>
          );
        })}
      </div>
    </section>
  );
}

/* ── FROM THE LAB ────────────────────────────────────────────────────── */
function Lab() {
  return (
    <section className="lab wrap" id="lab">
      <div className="shead reveal">
        <h2>Agentic engineering based on <em>principles.</em></h2>
        <span className="coord idx">From the lab</span>
      </div>
      <div className="labgrid">
        <div className="labprose reveal" data-d="1">
          <p>
            Push an AI coding effort past a single session and it fails in a
            familiar way: the agent re-asks questions you already answered,
            forgets verdicts, and quietly makes calls that were yours to make.
            Code was never the bottleneck. The decisions around it are.
          </p>
          <p>
            <b>through-line</b> is my answer, built in the open. It distills the
            commitments that recur across an effort into principles you adopt
            once, then holds every later decision to them. Verdicts propagate
            through the map of open questions, you keep direction, and the agent
            keeps the route.
          </p>
        </div>
        <aside className="labcard reveal" data-d="2">
          <h3>through-line</h3>
          <p>A principles-driven skill for driving efforts larger than one agent session. Runs under Claude Code and Codex.</p>
          <div className="install">npx skills@latest add stuarth/through-line</div>
          <a className="cta cta--line" href="https://github.com/stuarth/through-line" target="_blank" rel="noreferrer">Read the method on GitHub <span className="arr">→</span></a>
        </aside>
      </div>
    </section>
  );
}

/* ── APPROACH ────────────────────────────────────────────────────────── */
function Approach() {
  const ps = [
    { n: "P1", t: "Measure what's hard to measure.", p: "The advantage usually hides in the metric nobody has bothered to define, whether in a field or a payment system. I build the instrument first." },
    { n: "P2", t: "The team is the architecture.", p: "Systems reflect the org that builds them. Get the people and the operating rhythm right and the technical decisions get easier." },
    { n: "P3", t: "Ship beats perfect, but only just.", p: "Velocity and rigor aren't opposites. The job is to find the bar that's high enough to trust and low enough to move." },
    { n: "P4", t: "Earn trust with systems that don't break.", p: "Reliability is a feature you feel before you can name it. At scale, it's the whole product." },
  ];
  return (
    <section className="approach wrap" id="approach">
      <div className="shead reveal">
        <h2>How I think about <em>the work.</em></h2>
        <span className="coord idx">Operating principles</span>
      </div>
      <div className="principles">
        {ps.map((p, i) => (
          <div className="principle reveal" data-d={String((i % 2) + 1)} key={p.n}>
            <span className="pn">{p.n}</span>
            <h3>{p.t}</h3>
            <p>{p.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── ABOUT ───────────────────────────────────────────────────────────── */
function About({ name }) {
  return (
    <section className="about wrap" id="about">
      <div className="grid">
        <div className="portrait reveal">
          <image-slot id="portrait" shape="rect" fit="cover" placeholder="Drop a portrait"></image-slot>
          <div className="pcap"><span>{name}</span><span>Ocean Park, BC</span></div>
        </div>
        <div className="reveal" data-d="1">
          <span className="eyebrow">About</span>
          <h2 style={{ marginTop: "20px" }}>Twenty years in technology, spent on the problems that <em>actually decide things.</em></h2>
          <p className="lede2">I'm {name}, an engineer and technology leader based in Ocean Park, on the coast of British Columbia.</p>
          <div className="body">
            <p>
              My career has run from the platform layer of a top-tier fintech, where the
              systems I led moved tens of billions of dollars a month, to the open fields of
              agtech, where I now set and implement an AI-first strategy. Along the way I've
              taken multiple startups from first commit to exit.
            </p>
            <p>
              The thread is a stubborn interest in measuring what's hard to measure: reliability
              algorithms that keep payments flowing, and field-proven ways to quantify
              agricultural productivity where the ground truth is messy and the stakes are real.
            </p>
            <p>
              Ocean Park Labs is how I take that on independently now: a small, deliberate
              practice for a handful of companies betting on AI, payments, and platforms.
            </p>
          </div>
          <div className="sig">— {name}</div>
          <div className="meta">
            <span><b>Based</b> Ocean Park, BC</span>
            <span><b>Focus</b> AI · Payments · Platforms</span>
            <span><b>Status</b> Select engagements, 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CONTACT + FOOTER ────────────────────────────────────────────────── */
function Contact({ name, email }) {
  return (
    <section className="contact wrap" id="contact">
      <div className="reveal">
        <span className="eyebrow">Available for select engagements · 2026</span>
        <h2>Let's talk about what you <em>have to ship.</em></h2>
        <p className="sub">
          Fractional CTO work, AI strategy, and the hard technical calls in between.
          If the problem is real, I'd like to hear about it.
        </p>
        <div className="actions">
          <a className="email" href={"mailto:" + email}>{email}</a>
        </div>
        <div className="actions" style={{ marginTop: "30px" }}>
          <a className="cta cta--box" href={"mailto:" + email}>Start a conversation <span className="arr">→</span></a>
        </div>
      </div>
    </section>
  );
}

function Footer({ name }) {
  return (
    <footer className="foot wrap">
      <div className="row reveal">
        <span className="coordbig">{COORD}</span>
        <span>© 2026 Ocean Park Labs · {name}</span>
        <div style={{ display: "flex", gap: "26px" }}>
          <a href="https://www.linkedin.com/in/stuarthinson/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/stuarth" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Top ↑</a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { useReveal, Nav, Hero, Proof, Practice, Work, Lab, Approach, About, Contact, Footer, COORD });
