import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </nav>

      {/* Hero Section */}
      <section className="section hero">
        <article className="hero-content">
          <h3 className="title">Hey, I am Nachliel Pokroy</h3>
          <h2 className="text">
            I am a{" "}
            <span style={{ fontWeight: "bold" }}>
              Junior FullStack Developer
            </span>
            <br />
            with a year and a half of experience.
          </h2>
        </article>
      </section>

      {/* Present Section */}
      <section id="about" className="section ">
        <h2 className="title">👤 About Me</h2>
        <div className="card about">
          <article className="hero-image">
            <Image
              src="/profile.jpg"
              alt="Nachliel Pokroy"
              width={150}
              height={150}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </article>
          <p className="text">
            I&apos;m a FullStack Developer using React, NodeJS, JS, and TS. I am
            patient and thorough, wanting to contribute and influence. I am also
            responsible, with a high work ethic and good interpersonal skills.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="title">🖥️ Experience</h2>
        <div className="card">
          <h3 className="subtitle">
            Easyapps <label className="timeline"> March 2022 - Present</label>
          </h3>

          <p className="text">
            Building and testing automations and React apps for monday.com
            marketplace, building and maintaining CRM&apos;s on Airtable.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="title">🎓 Education</h2>
        <div className="card">
          <p className="text">
            <label className="subtitle">FullStack Developer Bootcamp</label> -
            2024 - Coding Academy
          </p>
          <p className="text">
            <label className="subtitle">Software Practical Engineer</label> -
            2024 - Ariel Technical College, graduated with honors.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="title">🤖 Projects</h2>
        <div className="card">
          <p className="text">
            <label className="subtitle">
              <a href="https://ci-events.org" target="_blank">
                CI Calendar
              </a>
            </label>{" "}
            - an intreactive calendar for the Israeli Contact Improv community.
            A PWA built with React, NodeJS, and Supabase.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section footer">
        <div className="social-links">
          <a
            href="https://linkedin.com/in/nachliel"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image
              src="/linkedin-100.svg"
              alt="LinkedIn"
              width={36}
              height={36}
            />
          </a>
          <a
            href="https://github.com/nachlielp"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Image src="/github-100.svg" alt="GitHub" width={36} height={36} />
          </a>
          <a
            href="/Resume_Nachliel_Pokroy.pdf"
            download
            className="social-link"
          >
            <Image src="/pdf-80.png" alt="CV" width={36} height={36} />
          </a>
        </div>
      </section>
    </div>
  );
}
