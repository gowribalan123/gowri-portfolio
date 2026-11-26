import React, { useEffect, useState } from 'react'
import {
  ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Phone, MapPin,
  Menu, X, Code2, Database, Server, GraduationCap, BriefcaseBusiness,
  ExternalLink, Download, CheckCircle2, Layers3, Users, Globe2
} from 'lucide-react'

const skills = [
  { title: 'Frontend', icon: Code2, items: ['React.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Material UI', 'Bootstrap 5', 'Tailwind CSS'] },
  { title: 'Backend', icon: Server, items: ['ASP.NET Core', 'C#', 'Entity Framework Core', 'RESTful APIs', 'JWT Authentication', 'Role-Based Authorization'] },
  { title: 'Database', icon: Database, items: ['Microsoft SQL Server', 'SQL', 'Stored Procedures'] },
  { title: 'Tools & Other Skills', icon: Layers3, items: ['Visual Studio 2022', 'Visual Studio Code', 'Postman', 'Git', 'GitHub', 'Google Business Profile', 'Basic SEO', 'Intern Mentoring'] },
]

const projects = [
  {
    number: '01', name: 'MTravelo CRM', type: 'Customer Relationship Management',
    description: 'CRM workflows for lead management, customer information, follow-ups, bookings, payments and approvals. Also includes travel-service modules for flights, hotels, holiday packages, visa, passport, insurance, transport, activities and cruise services.',
    stack: ['React.js', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server'],
    tag: 'Independently handled', visual: 'crm', screenshot: `${import.meta.env.BASE_URL}images/mtravelo-crm.png`
  },
  {
    number: '02', name: 'MTravelo Tours & Travels', type: 'Travel & Tour Package Management',
    description: 'Travel and tour package features, custom tours, booking enquiries, blogs and administration modules, connected with REST APIs and SQL Server to support travel booking workflows.',
    stack: ['React.js', 'ASP.NET Core', 'C#', 'SQL Server'],
    tag: 'Independently handled', visual: 'travel', screenshot: `${import.meta.env.BASE_URL}images/mtravelo.png`
  },
  {
    number: '03', name: 'AyurCare (AyurNidan)', type: 'Ayurvedic Diagnostic & Hospital Management',
    description: 'Contributed to an admin dashboard for patient management, case analysis, treatments, medicines and reporting as part of a collaborative development effort. Worked on API integration, authentication, role-based authorization and SQL Server data access.',
    stack: ['React.js', 'ASP.NET Core', 'C#', 'Entity Framework Core', 'SQL Server'],
    tag: 'Collaborative project', visual: 'health', screenshot: `${import.meta.env.BASE_URL}images/ayurcare.png`
  },
  {
    number: '04', name: 'Thumbee', type: 'E-Commerce Platform',
    description: 'Product, shopping-cart, order-processing and customer-management features, along with administration modules for inventory, products, orders and reporting.',
    stack: ['React.js', 'Material UI', 'ASP.NET Core', 'C#', 'SQL Server'],
    tag: 'Independently handled', visual: 'commerce', screenshot: `${import.meta.env.BASE_URL}images/thumbee.png`
  },
]

const experience = [
  {
    role: 'Full Stack Developer', company: 'GSeven Technologies', period: 'Nov 2024 – Present', place: 'Irinjalakuda',
    points: [
      'Develop web application features using React.js, TypeScript, ASP.NET Core, C# and Microsoft SQL Server.',
      'Build reusable frontend components and integrate REST APIs with backend services and database workflows.',
      'Write SQL queries and stored procedures to support application functionality.',
      'Implement business features across CRM, travel management and e-commerce applications.',
      'Mentor interns in React.js, JavaScript, .NET Core and SQL Server through explanations, practical coding tasks and project guidance.'
    ]
  },
  {
    role: 'Lecturer', company: 'Lakshmi College of Science & Technologies', period: 'Aug 2014 – Feb 2017', place: 'Chalakudy',
    points: ['Delivered IT instruction and explained programming concepts to students.', 'Prepared learning activities and supported students in developing practical computer and technical skills.']
  },
  {
    role: 'Software Programmer & Faculty', company: 'G-Tec Computer Education', period: 'Jul 2011 – Jul 2014', place: 'Chalakudy',
    points: ['Performed software programming work and delivered IT training.', 'Explained software and computer application concepts through structured instruction and practical examples.']
  },
  {
    role: 'Software Programmer', company: 'Eye Technologies', period: 'Jul 2010 – Jul 2011', place: 'Angamaly',
    points: ['Carried out software programming responsibilities as part of the development team.']
  },
]

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const closeMenu = () => setMenuOpen(false)
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Experience', '#experience'], ['Projects', '#projects'], ['Contact', '#contact']]

  useEffect(() => {
    const sections = nav
      .map(([, href]) => document.querySelector(href))
      .filter(Boolean)

    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 160
      let current = 'home'

      sections.forEach((section) => {
        if (section.offsetTop <= currentPosition) current = `#${section.id}`
      })

      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">GB</span><span>Gowri Balan<span className="brand-dot">.</span></span></a>
        <button className="mobile-menu" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a className={activeSection === href ? 'active' : ''} key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="mailto:gowribalanak@gmail.com">Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> FULL STACK DEVELOPER</div>
            <h1>Building useful digital experiences, <em>from front to back.</em></h1>
            <p className="hero-lead">I'm Gowri Balan, a Full Stack Developer working with React.js, TypeScript, ASP.NET Core, C# and Microsoft SQL Server to build business-focused web applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-secondary" href="mailto:gowribalanak@gmail.com">Get in touch <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15} /> Thrissur, Kerala, India</span><span><CheckCircle2 size={15} /> Open to suitable opportunities</span></div>
          </div>
          <div className="hero-art" aria-label="Technology stack illustration">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="code-window">
              <div className="window-bar"><i></i><i></i><i></i><span>developer.ts</span></div>
              <div className="code-lines">
                <p><b>const</b> developer = {'{'}</p>
                <p className="indent"><span>name</span>: <strong>'Gowri Balan'</strong>,</p>
                <p className="indent"><span>role</span>: <strong>'Full Stack Developer'</strong>,</p>
                <p className="indent"><span>frontend</span>: [<strong>'React'</strong>, <strong>'TypeScript'</strong>],</p>
                <p className="indent"><span>backend</span>: [<strong>'.NET Core'</strong>, <strong>'C#'</strong>],</p>
                <p className="indent"><span>database</span>: <strong>'SQL Server'</strong></p>
                <p>{'}'}</p>
                <div className="code-cursor"></div>
              </div>
            </div>
            <div className="float-chip chip-react"><span className="chip-icon react-icon">⚛</span> React.js</div>
            <div className="float-chip chip-dotnet"><span className="chip-icon dotnet-icon">.N</span> ASP.NET Core</div>
            <div className="float-chip chip-sql"><Database size={16} /> SQL Server</div>
            <div className="hero-spark spark-a">✳</div><div className="hero-spark spark-b">✦</div>
          </div>
          <a className="scroll-note" href="#about">SCROLL TO EXPLORE <span></span></a>
        </section>

        <section className="intro-strip"><div className="section-wrap strip-inner"><span>WHAT I BRING</span><p>Thoughtful interfaces <b>·</b> Reliable APIs <b>·</b> Structured data <b>·</b> Practical mentoring</p></div></section>

        <section className="section-wrap section-block" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="A developer with a teaching mindset." />
          <div className="about-grid">
            <div className="about-main"><p className="large-copy">I enjoy turning business requirements into clear, functional web applications.</p><p>My work spans frontend development, backend services and database-driven features. I have worked on CRM workflows, travel management systems, e-commerce functionality and an Ayurvedic hospital management application.</p><p>Alongside development, I bring an IT teaching background and experience mentoring interns—breaking down technical concepts and guiding practical learning.</p></div>
            <div className="about-facts">
              <div className="fact-card"><Code2 /><div><strong>Full Stack</strong><span>Frontend to backend development</span></div></div>
              <div className="fact-card"><BriefcaseBusiness /><div><strong>Business Applications</strong><span>CRM, travel and e-commerce</span></div></div>
              <div className="fact-card"><Users /><div><strong>Mentoring</strong><span>Intern guidance and technical teaching</span></div></div>
              <div className="fact-card"><Globe2 /><div><strong>Based in Kerala</strong><span>Open to remote opportunities</span></div></div>
            </div>
          </div>
        </section>

        <section className="section-block skills-section" id="skills"><div className="section-wrap">
          <SectionHeading eyebrow="MY TOOLKIT" title="Technologies I work with." text="A practical set of tools for building and connecting modern web applications." />
          <div className="skills-grid">{skills.map(({ title, icon: Icon, items }) => <article className="skill-card" key={title}><div className="skill-title"><span className="skill-icon"><Icon size={20}/></span><h3>{title}</h3></div><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </div></section>

        <section className="section-wrap section-block" id="experience">
          <SectionHeading eyebrow="MY JOURNEY" title="Experience & teaching." text="Professional experience across software development, programming and IT education." />
          <div className="timeline">{experience.map((job, i) => <article className="timeline-item" key={job.company}><div className="timeline-marker">{i + 1}</div><div className="timeline-content"><div className="timeline-top"><div><h3>{job.role}</h3><h4>{job.company}</h4></div><span className="period">{job.period}</span></div><div className="job-place"><MapPin size={13}/>{job.place}</div><ul>{job.points.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
        </section>

        <section className="section-block projects-section" id="projects"><div className="section-wrap">
          <SectionHeading eyebrow="SELECTED WORK" title="Projects I've worked on." text="A selection of business applications and product features from my development experience." />
          <div className="projects-grid">{projects.map(project => <article className="project-card" key={project.number}>
            <div className={`project-visual ${project.visual}`}>
              <img className="project-screenshot" src={project.screenshot} alt={`${project.name} website screenshot`} />
              <div className="project-visual-top"><span>PROJECT / {project.number}</span></div>
            </div>
            <div className="project-info"><div className="project-kicker"><span>{project.type}</span><span className="project-number">{project.number}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="project-stack">{project.stack.map(s => <span key={s}>{s}</span>)}</div><div className="project-footer"><span><CheckCircle2 size={14}/>{project.tag}</span></div></div>
          </article>)}</div>
        </div></section>

        <section className="section-wrap section-block education-block" id="education">
          <div><SectionHeading eyebrow="EDUCATION" title="Learning foundation." /><div className="education-card"><span className="edu-icon"><GraduationCap /></span><div><h3>Master of Computer Applications (MCA)</h3><p>Postgraduate degree</p></div></div><div className="education-card"><span className="edu-icon"><GraduationCap /></span><div><h3>Bachelor of Science in Mathematics</h3><p>Undergraduate degree</p></div></div></div>
          <div className="certifications"><SectionHeading eyebrow="CERTIFICATIONS" title="Professional learning." /><div className="cert-list"><div><CheckCircle2/><span>Full Stack Development (MERN)</span><small>Entri Elevate</small></div><div><CheckCircle2/><span>Full Stack Development (MERN)</span><small>Illinois Institute of Technology</small></div><div><CheckCircle2/><span>Full Stack Development (MERN)</span><small>NSDC Certificate</small></div></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div><span className="eyebrow">HAVE A PROJECT OR AN OPPORTUNITY?</span><h2>Let's build something <em>meaningful.</em></h2><p>I'm interested in suitable Full Stack Developer roles, remote opportunities and development projects.</p><a className="button button-light" href="mailto:gowribalanak@gmail.com">Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-details"><a href="mailto:gowribalanak@gmail.com"><Mail/>gowribalanak@gmail.com<ArrowUpRight className="contact-arrow"/></a><a href="tel:+918943153347"><Phone/>+91 8943153347<ArrowUpRight className="contact-arrow"/></a><div><MapPin/>Thrissur, Kerala, India</div></div></div></section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">GB</span><span>Gowri Balan<span className="brand-dot">.</span></span></a><p>Designed to share my work and professional journey.</p><span>© {new Date().getFullYear()} Gowri Balan</span></div></footer>
    </div>
  )
}

export default App
