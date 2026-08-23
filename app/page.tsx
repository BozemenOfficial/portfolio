import Image from "next/image";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js", "REST API",
  "Prisma ORM", "SQL / SQLite", "JWT & Auth",
];

const services = [
  {
    number: "01",
    title: "Full-stack development",
    text: "Websites and web applications — from a responsive interface to API, database and deployment-ready code.",
  },
  {
    number: "02",
    title: "Existing project improvements",
    text: "Bug fixes, new features, UI updates and careful work inside an existing codebase.",
  },
  {
    number: "03",
    title: "Automation & integrations",
    text: "APIs, routine workflow automation and practical AI integrations where they create real value.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Nikolas D. — home">ND<span>.</span></a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a>
        </div>
        <a className="navCta" href="mailto:nikolasdusyk.99@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="heroMain">
          <p className="eyebrow"><span /> Available for freelance projects</p>
          <h1>I build web products<br />that <em>work.</em></h1>
          <p className="heroCopy">
            Full-Stack Developer focused on fast, clean and reliable websites
            and web applications — frontend, backend, APIs and databases.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#work">View selected work <span>↓</span></a>
            <a className="button secondary" href="mailto:nikolasdusyk.99@gmail.com">Email me</a>
          </div>
        </div>
        <aside className="heroAside" aria-label="Developer profile summary">
          <div className="monogram" aria-hidden="true">N</div>
          <div className="statusCard">
            <span className="statusDot" />
            <div><b>Nikolas D.</b><small>Full-Stack Developer</small></div>
          </div>
          <div className="heroMeta"><span>Based in Ukraine</span><span>Remote worldwide</span></div>
        </aside>
      </section>

      <div className="ticker" aria-label="Core skills">
        <div>
          {skills.concat(skills).map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}<i>✦</i></span>
          ))}
        </div>
      </div>

      <section className="section shell" id="work">
        <div className="sectionHead">
          <div><p className="kicker">Selected work</p><h2>One project.<br /><span>Full-stack scope.</span></h2></div>
          <p>A focused case study showing product thinking, UI work, backend logic, authentication and database design in one working product.</p>
        </div>

        <article className="projectCard">
          <div className="projectVisual">
            <Image src="/novashop-cover.png" alt="NovaShop full-stack e-commerce interface" fill priority sizes="(max-width: 900px) 100vw, 66vw" />
            <span className="projectType">Personal project · 2026</span>
          </div>
          <div className="projectInfo">
            <div className="projectTitleRow"><h3>NovaShop</h3><span>01</span></div>
            <p>A complete e-commerce application with product catalog, secure authentication, cart, checkout, order history and admin tools.</p>
            <ul className="featureList">
              <li>USER / ADMIN roles</li><li>JWT in httpOnly cookie</li><li>Transactional orders</li><li>Responsive interface</li>
            </ul>
            <div className="tags">
              {['Next.js 15', 'React 19', 'TypeScript', 'Prisma', 'SQLite'].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a className="textLink" href="https://github.com/BozemanChannel" target="_blank" rel="noreferrer">View GitHub profile <span>↗</span></a>
          </div>
        </article>
      </section>

      <section className="servicesSection" id="services">
        <div className="shell">
          <div className="sectionHead light">
            <div><p className="kicker">What I do</p><h2>Useful work.<br /><span>No extra noise.</span></h2></div>
            <p>I can take a clear task, build the solution and explain the result without turning the process into unnecessary complexity.</p>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <span className="serviceNumber">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section shell" id="about">
        <div className="aboutLabel"><span>About</span><i /></div>
        <div className="aboutContent">
          <h2>Building the whole product,<br />not just <em>one layer.</em></h2>
          <div className="aboutColumns">
            <p>I work across frontend and backend: responsive interfaces, application logic, APIs, authentication and databases. I care about understandable code and a result that is easy to use.</p>
            <p>I use AI tools for quickly handling routine tasks while keeping decisions, checks and final quality under human control.</p>
          </div>
          <div className="principles">
            <div><b>01</b><span>Clear communication</span></div><div><b>02</b><span>Practical solutions</span></div><div><b>03</b><span>Honest project scope</span></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footerMain">
          <p className="kicker">Have a project?</p><h2>Let&apos;s build something<br /><em>useful.</em></h2>
          <a className="footerEmail" href="mailto:nikolasdusyk.99@gmail.com">nikolasdusyk.99@gmail.com <span>↗</span></a>
        </div>
        <div className="shell footerBottom">
          <span>© 2026 Nikolas D.</span><a href="https://github.com/BozemanChannel" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
