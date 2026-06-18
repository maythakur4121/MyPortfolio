import { useState, useEffect, useRef } from "react";
import { profile, about, skills, experience, projects, education } from "./data.js";

/* ── Icons ─────────────────────────────────────────────────── */
const ArrowUpRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);
const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
    <line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/>
    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
  </svg>
);
const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ── Hooks ──────────────────────────────────────────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.12, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), pause);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setWordIdx((wordIdx + 1) % words.length);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);
  return text;
}

function useCounter(target, duration = 1200, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active || isNaN(target)) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

/* ── Nav ────────────────────────────────────────────────────── */
const navLinks = [
  ["about", "About"], ["skills", "Skills"], ["experience", "Experience"],
  ["projects", "Projects"], ["contact", "Contact"],
];

function Nav({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const close = () => setOpen(false);
  return (
    <header className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="nav-logo">Mayank<span>.</span>dev</a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <div className="nav-right">
          <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a className="nav-cta" href="#contact">Get in touch</a>
          <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={close}>{label}</a>
          ))}
          <a href="#contact" onClick={close} className="btn btn-primary" style={{ marginTop: 8, justifyContent: "center" }}>Get in touch</a>
        </div>
      )}
    </header>
  );
}

/* ── Hero ───────────────────────────────────────────────────── */
const typeWords = ["PHP / Laravel Developer", "REST API Builder", "Full-Stack Engineer", "MySQL Optimizer"];

function StatCounter({ s, active }) {
  const numMatch = s.value.match(/(\d+)/);
  const num = numMatch ? parseInt(numMatch[1]) : null;
  const suffix = num ? s.value.replace(String(num), "") : null;
  const count = useCounter(num, 1400, active);
  return (
    <div className="stat">
      <div className="stat-v">{num ? `${count}${suffix}` : s.value}</div>
      <div className="stat-l">{s.label}</div>
    </div>
  );
}

function Hero() {
  const typed = useTypewriter(typeWords);
  const [statsRef, statsVisible] = useInView();
  return (
    <section className="hero reveal-ready" id="top">
      <div className="wrap hero-inner">
        <span className="hero-eyebrow"><span className="dot dot--pulse" /> Backend-focused full-stack developer</span>
        <h1>Mayank Thakur<span className="accent">.</span></h1>
        <p className="hero-sub">
          <span className="typewriter">{typed}</span>
          <span className="cursor">|</span>
        </p>
        <div className="hero-prompt mono">
          <span className="pr">$ </span>
          <span className="fl">mayank</span> --role <span className="fl">"{profile.role}"</span> --exp <span className="fl">4y+</span> --loc <span className="fl">"{profile.location}"</span>
        </div>
        <div className="hero-cta">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          {profile.resumeFile && (
            <a className="btn btn-ghost" href={`/${profile.resumeFile}`} target="_blank" rel="noreferrer">Résumé <ArrowUpRight /></a>
          )}
        </div>
        <div className="hero-stats" ref={statsRef}>
          {profile.stats.map((s) => (
            <StatCounter key={s.label} s={s} active={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section wrapper with reveal ────────────────────────────── */
function Section({ id, children, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <section id={id} ref={ref} className={`${className} reveal ${inView ? "reveal--in" : ""}`}>
      {children}
    </section>
  );
}

function Route({ verb = "GET", path }) {
  return <span className="route mono"><span className="verb">{verb}</span> {path}</span>;
}

/* ── About ──────────────────────────────────────────────────── */
function About() {
  return (
    <Section id="about">
      <div className="wrap">
        <Route path="/about" />
        <h2 className="sec-title">About</h2>
        <p className="about-text">{about}</p>
      </div>
    </Section>
  );
}

/* ── Skills ─────────────────────────────────────────────────── */
function Skills() {
  return (
    <Section id="skills">
      <div className="wrap">
        <Route path="/skills" />
        <h2 className="sec-title">Technical skills</h2>
        <div className="skills-grid">
          {skills.map((s, si) => (
            <div
              className={`skill-card${s.group === "Laravel" ? " is-accent" : ""}`}
              key={s.group}
              style={{ "--delay": `${si * 60}ms` }}
            >
              <div className="skill-head">{s.group}</div>
              <div className="tags">
                {s.items.map((item, i) => (
                  <span className="tag" key={item} style={{ "--i": i }}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── Experience ─────────────────────────────────────────────── */
function Experience() {
  return (
    <Section id="experience">
      <div className="wrap">
        <Route path="/experience" />
        <h2 className="sec-title">Experience</h2>
        <div className="timeline">
          {experience.map((e, i) => (
            <article className="exp" key={e.company} style={{ "--delay": `${i * 100}ms` }}>
              <div>
                <div className="exp-period mono">{e.period}</div>
                <div className="exp-company-loc">{e.location}</div>
              </div>
              <div>
                <h3>{e.role} <span className="exp-company">· {e.company}</span></h3>
                <ul>
                  {e.points.map((p, j) => <li key={j} style={{ "--delay": `${j * 60}ms` }}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ── Projects ───────────────────────────────────────────────── */
const allFilters = ["All", "Laravel", "React.js", "CodeIgniter", "Stripe"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All"
    ? projects
    : projects.filter(p => p.tech.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <Section id="projects">
      <div className="wrap">
        <Route path="/projects" />
        <h2 className="sec-title">Selected projects</h2>
        <div className="filter-bar">
          {allFilters.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? " filter-btn--active" : ""}`}
              onClick={() => setFilter(f)}
            >{f}</button>
          ))}
        </div>
        <div className="proj-grid">
          {visible.map((p, i) => (
            <article className="proj-card" key={p.name} style={{ "--delay": `${i * 70}ms` }}>
              <div className="proj-top">
                <h3>{p.name}</h3>
                {p.url && (
                  <a className="proj-link" href={p.url} target="_blank" rel="noreferrer">
                    Visit <ArrowUpRight />
                  </a>
                )}
              </div>
              <p className="proj-desc">{p.description}</p>
              <div className="proj-tags">
                {p.tech.map(t => <span className="proj-tag mono" key={t}>{t}</span>)}
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="no-results mono">No projects match this filter.</p>
        )}
      </div>
    </Section>
  );
}

/* ── Education ──────────────────────────────────────────────── */
function Education() {
  return (
    <Section id="education">
      <div className="wrap">
        <Route path="/education" />
        <h2 className="sec-title">Education</h2>
        {education.map(e => (
          <div className="edu" key={e.degree}>
            <div>
              <h3>{e.degree}</h3>
              <p>{e.school}</p>
            </div>
            <div className="edu-period mono">{e.period}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ── Contact ────────────────────────────────────────────────── */
function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <Section id="contact" className="contact">
      <div className="wrap">
        <div className="contact-card">
          <Route verb="POST" path="/contact" />
          <h2>Let's build something.</h2>
          <p>I'm open to Laravel and full-stack roles. The fastest way to reach me is email — I usually reply within a day.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
            <button className="btn btn-line" onClick={copy}>
              {copied ? "✓ Copied!" : "Copy email"}
            </button>
            <a className="btn btn-line" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
          </div>
          <div className="contact-meta mono">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="wrap footer">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <span className="mono">Built with React · Vite</span>
    </footer>
  );
}

/* ── Scroll-to-top button ───────────────────────────────────── */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return show ? (
    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">↑</button>
  ) : null;
}

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <>
      <Nav dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
