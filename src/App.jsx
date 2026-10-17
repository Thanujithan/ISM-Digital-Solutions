
import { useEffect, useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Check,
  ChevronRight,
  Code2,
  Globe2,
  Headphones,
  Layers3,
  Menu,
  Monitor,
  Play,
  Rocket,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import "./index.css";


// ==========================================
// NAVIGATION LINKS
// ==========================================

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Portfolio", "#portfolio"],
  ["Contact", "#contact"],
];


// ==========================================
// SERVICES DATA
// ==========================================

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to attract customers and grow your online presence.",
    items: [
      "Business & e-commerce websites",
      "Responsive UI/UX design",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Solutions",
    description:
      "Practical software tailored to simplify your workflows and solve real business problems.",
    items: [
      "Web apps & dashboards",
      "Business process automation",
    ],
  },
  {
    icon: ShieldCheck,
    title: "IT Support & Maintenance",
    description:
      "Dependable assistance to keep your digital tools updated, safe and running smoothly.",
    items: [
      "Website maintenance",
      "Troubleshooting & updates",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Business Solutions",
    description:
      "Technology advice and digital systems to help your business work smarter and scale.",
    items: [
      "Digital transformation",
      "Systems & integration",
    ],
  },
];


// ==========================================
// PORTFOLIO DATA
// ==========================================

const projects = [
  {
    title: "Travel & Tourism Website",
    category: "Website demo concept",
    image: "/assets/demo-travel.webp",
    tag: "WEB DESIGN",
  },
  {
    title: "Education Management Dashboard",
    category: "Software demo concept",
    image: "/assets/demo-dashboard.webp",
    tag: "WEB APPLICATION",
  },
  {
    title: "Fashion E-commerce Website",
    category: "Online store demo concept",
    image: "/assets/demo-shop.webp",
    tag: "E-COMMERCE",
  },
];


// ==========================================
// GREEN FOLIAGE COMPONENT
// ==========================================

function Foliage({ side = "left", extra = "" }) {
  return (
    <img
      className={`foliage foliage-${side} ${extra}`}
      src="/assets/neon-foliage.svg"
      alt=""
      aria-hidden="true"
    />
  );
}


// ==========================================
// NAVBAR COMPONENT
// ==========================================

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onHash = () => {
      setActive(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", onHash);
    onHash();

    return () => {
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <header className="site-header">
      <nav
        className="nav container"
        aria-label="Main navigation"
      >

        {/* LOGO */}
        <a
          href="#home"
          className="brand"
          onClick={() => setOpen(false)}
          aria-label="ISM Digital Solutions home"
        >
          <img
            src="/ism-logo.png"
            alt="ISM Digital Solutions"
          />
        </a>

        {/* NAVIGATION */}
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className={active === href ? "active" : ""}
              onClick={() => {
                setActive(href);
                setOpen(false);
              }}
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Get Started
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* GET STARTED */}
        <a
          href="#contact"
          className="button button-primary nav-cta"
        >
          Get Started
          <ArrowUpRight size={17} />
        </a>

        {/* MOBILE MENU */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </nav>
    </header>
  );
}


// ==========================================
// 3D HERO ARTWORK
// ==========================================

function HeroArtwork() {
  return (
    <div
      className="hero-artwork"
      aria-label="Concept image: floating 3D laptop, smartphone and business dashboard"
    >

      {/* ORBIT ANIMATIONS */}
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />

      {/* 3D LAPTOP IMAGE */}
      <img
        className="hero-devices"
        src="/assets/hero-devices-transparent.png"
        alt="3D laptop and smartphone displaying digital business dashboards"
      />

      {/* FLOATING GLASS CARD 01 */}
      <div className="glass-float glass-float-one">
        <span className="glass-float-icon">
          <Sparkles size={21} />
        </span>

        <span>
          Ideas into
          <br />
          <strong>Impact</strong>
        </span>

        <ArrowUpRight size={17} />
      </div>

      {/* FLOATING GLASS CARD 02 */}
      <div className="glass-float glass-float-two">
        <BadgeCheck size={22} />

        <span>
          Built for
          <br />
          <strong>your growth</strong>
        </span>
      </div>

      {/* GLOW PARTICLES */}
      <span className="glow-particle glow-a" />
      <span className="glow-particle glow-b" />

    </div>
  );
}


// ==========================================
// REUSABLE SECTION TITLE
// ==========================================

function SectionTitle({
  eyebrow,
  title,
  green,
  description,
  href,
  cta,
}) {
  return (
    <div className="section-title">

      <div>
        <span className="mini-overline">
          {eyebrow}
        </span>

        <h2>
          {title} <span>{green}</span>
        </h2>
      </div>

      <div className="section-title-side">
        {description && <p>{description}</p>}

        {cta && (
          <a href={href} className="subtle-link">
            {cta}
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

    </div>
  );
}


// ==========================================
// MAIN WEBSITE APPLICATION
// ==========================================

function App() {
  return (
    <>

      <Navbar />

      <main>

        {/* ==================================
            HOME / HERO SECTION
        ================================== */}

        <section className="hero" id="home">

          <Foliage
            side="left"
            extra="hero-foliage-left"
          />

          <Foliage
            side="right"
            extra="hero-foliage-right"
          />

          <div className="hero-aura" />

          <div className="container hero-grid">

            {/* HERO TEXT */}
            <div className="hero-content">

              <div className="hero-kicker">
                <span />
                TECHNOLOGY · PEOPLE · GROWTH
              </div>

              <h1>
                Transforming
                <br />
                Businesses with{" "}
                <em>Smart Digital Solutions</em>
              </h1>

              <p className="hero-description">
                We create powerful websites, custom software
                and reliable digital solutions to help
                businesses grow in a connected world.
              </p>

              {/* HERO BUTTONS */}
              <div className="hero-actions">

                <a
                  className="button button-primary"
                  href="#services"
                >
                  Our Services
                  <ArrowUpRight size={17} />
                </a>

                <a
                  className="button button-outline"
                  href="#portfolio"
                >
                  <Play
                    size={16}
                    fill="currentColor"
                  />
                  Explore Our Work
                </a>

              </div>

              {/* HERO FEATURES */}
              <div className="hero-points">

                <div>
                  <span>
                    <Rocket />
                  </span>

                  Innovative
                  <br />
                  Solutions
                </div>

                <div>
                  <span>
                    <Layers3 />
                  </span>

                  Business-Focused
                  <br />
                  Design
                </div>

                <div>
                  <span>
                    <Headphones />
                  </span>

                  Reliable
                  <br />
                  Support
                </div>

              </div>
            </div>

            {/* HERO 3D VISUAL */}
            <HeroArtwork />

          </div>

          <div className="hero-bottom-glow" />

        </section>


        {/* ==================================
            BENEFITS BAR
        ================================== */}

        <div
          className="container benefit-bar"
          aria-label="Our focus areas"
        >

          <div>
            <Monitor />
            <span>
              Websites &amp;
              <strong> Web Apps</strong>
            </span>
          </div>

          <div>
            <Code2 />
            <span>
              Custom
              <strong> Software</strong>
            </span>
          </div>

          <div>
            <ShieldCheck />
            <span>
              Care &amp;
              <strong> Maintenance</strong>
            </span>
          </div>

          <div>
            <Globe2 />
            <span>
              Sri Lanka &amp;
              <strong> Beyond</strong>
            </span>
          </div>

        </div>


        {/* ==================================
            SERVICES SECTION
        ================================== */}

        <section
          className="services-section section-light"
          id="services"
        >

          <div className="subtle-light-leaf" />

          <div className="container">

            <SectionTitle
              eyebrow="OUR SERVICES"
              title="Complete IT Solutions for"
              green="Your Business"
              description="From website development to custom software and ongoing support, we offer practical technology for growing businesses."
              href="#contact"
              cta="Discuss Your Project"
            />

            <div className="services-grid">

              {services.map(
                ({ icon: Icon, title, description, items }, i) => (
                  <article
                    className="service-tile"
                    key={title}
                  >

                    {/* SERVICE ICON */}
                    <div className="service-art">

                      <div className="service-icon-3d">
                        <Icon
                          strokeWidth={2}
                          size={44}
                        />
                      </div>

                      <span className="service-spark">
                        <Sparkles size={15} />
                      </span>

                    </div>

                    <div className="service-number">
                      0{i + 1}
                    </div>

                    <h3>{title}</h3>

                    <p>{description}</p>

                    {/* SERVICE FEATURES */}
                    <ul>
                      {items.map((item) => (
                        <li key={item}>
                          <Check size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className="service-link"
                    >
                      Learn More
                      <ArrowRight size={16} />
                    </a>

                  </article>
                )
              )}

            </div>
          </div>
        </section>


        {/* ==================================
            ABOUT SECTION
        ================================== */}

        <section
          className="about-section"
          id="about"
        >

          <Foliage
            side="left"
            extra="about-foliage"
          />

          <div className="container about-layout">

            {/* ABOUT DESCRIPTION */}
            <div className="about-copy">

              <span className="mini-overline">
                ABOUT US
              </span>

              <h2>
                Helping Businesses{" "}
                <span>Grow Through Technology</span>
              </h2>

              <p>
                ISM Digital Solutions is being developed
                to help businesses work smarter with
                affordable websites, tailored software
                and dependable digital support.
              </p>

              <p>
                We focus on understanding your goals
                first, then creating practical technology
                around them.
              </p>

              <a
                className="button button-primary"
                href="#contact"
              >
                Let's Work Together
                <ArrowUpRight size={17} />
              </a>

            </div>

            {/* OFFICE VISUAL */}
            <div className="office-frame">

              <img
                src="/assets/studio-office.webp"
                alt="ISM Digital Solutions branded office design concept"
              />

              <div className="image-label">
                <Sparkles size={16} />
                A smarter digital tomorrow
              </div>

            </div>

            {/* ABOUT HIGHLIGHTS */}
            <div className="about-highlights">

              <div>
                <BadgeCheck />
                <strong>Thoughtful Design</strong>
                <small>Made around business needs</small>
              </div>

              <div>
                <Code2 />
                <strong>Modern Solutions</strong>
                <small>Built for everyday use</small>
              </div>

              <div>
                <Globe2 />
                <strong>Global Outlook</strong>
                <small>Local roots, wider ambitions</small>
              </div>

            </div>

          </div>
        </section>


        {/* ==================================
            PORTFOLIO SECTION
        ================================== */}

        <section
          className="portfolio-section section-light"
          id="portfolio"
        >

          <div className="container">

            <SectionTitle
              eyebrow="PORTFOLIO PREVIEW"
              title="Creative Concepts."
              green="Real Possibilities."
              description="Explore sample designs showing the experiences we can build. These are illustrative demo concepts, not completed client work."
              href="#contact"
              cta="Start a Project"
            />

            <div className="project-grid">

              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.title}
                >

                  {/* PROJECT IMAGE */}
                  <div className="project-image">

                    <img
                      src={project.image}
                      alt={`${project.title} concept preview`}
                    />

                    <span className="project-category">
                      {project.tag}
                    </span>

                  </div>

                  {/* PROJECT DETAILS */}
                  <div className="project-details">

                    <div>
                      <small>{project.category}</small>
                      <h3>{project.title}</h3>
                    </div>

                    <a
                      href="#contact"
                      aria-label={`Ask about ${project.title}`}
                    >
                      <ArrowUpRight size={20} />
                    </a>

                  </div>

                </article>
              ))}

            </div>
          </div>
        </section>


        {/* ==================================
            WORK PROCESS SECTION
        ================================== */}

        <section className="process-section">

          <Foliage
            side="right"
            extra="process-foliage"
          />

          <div className="container">

            <span className="mini-overline">
              HOW WE WORK
            </span>

            <h2>
              A Simple Process for{" "}
              <span>Powerful Results</span>
            </h2>

            <div className="process-row">

              {[
                [
                  "01",
                  "Discover",
                  "We learn about your business and goals.",
                ],
                [
                  "02",
                  "Design",
                  "We shape a clear solution and UI.",
                ],
                [
                  "03",
                  "Develop",
                  "We build, test and refine.",
                ],
                [
                  "04",
                  "Launch",
                  "We go live and provide support.",
                ],
              ].map(([no, title, desc]) => (
                <div
                  className="process-step"
                  key={no}
                >

                  <span>{no}</span>

                  <h3>{title}</h3>

                  <p>{desc}</p>

                  <ChevronRight
                    className="process-chevron"
                    size={19}
                  />

                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ==================================
            CONTACT CTA SECTION
        ================================== */}

        <section
          className="contact-section"
          id="contact"
        >

          <div className="container">

            <div className="cta-panel">

              <Foliage
                side="left"
                extra="cta-foliage"
              />

              <div className="cta-content">

                <span className="mini-overline">
                  LET'S BUILD SOMETHING GREAT
                </span>

                <h2>
                  Ready to take your business{" "}
                  <span>to the next level?</span>
                </h2>

                <p>
                  Bring us your ideas. We can discuss
                  the right digital solution for your business.
                </p>

                <span className="contact-note">
                  Contact details and a working enquiry
                  form will be added when you provide
                  the official email.
                </span>

              </div>

              <a
                href="#home"
                className="button button-primary"
                aria-label="Back to top"
              >
                Explore ISM
                <ArrowUpRight size={16} />
              </a>

            </div>
          </div>
        </section>

      </main>


      {/* ==================================
          WEBSITE FOOTER
      ================================== */}

      <footer className="site-footer">

        <div className="container footer-main">

          {/* COMPANY DETAILS */}
          <div>

            <a
              href="#home"
              className="brand"
            >
              <img
                src="/ism-logo.png"
                alt="ISM Digital Solutions"
              />
            </a>

            <p>
              Smart solutions. Modern technology.
              <br />
              A smarter digital tomorrow.
            </p>

          </div>

          {/* QUICK LINKS */}
          <div>

            <h3>Quick Links</h3>

            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
              >
                {name}
              </a>
            ))}

          </div>

          {/* SERVICES */}
          <div>

            <h3>Our Services</h3>

            {services.map((service) => (
              <a
                key={service.title}
                href="#services"
              >
                {service.title}
              </a>
            ))}

          </div>

          {/* CONTACT */}
          <div>

            <h3>Let's Connect</h3>

            <p>
              Contact details coming soon.
            </p>

            <a
              href="#contact"
              className="footer-contact"
            >
              Discuss Your Project
              <ArrowUpRight size={16} />
            </a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="container footer-bottom">

          <span>
            © {new Date().getFullYear()} ISM Digital Solutions
          </span>

          <span>
            Building a Smarter, Digital Tomorrow. ↗
          </span>

        </div>

      </footer>

    </>
  );
}

export default App;
