
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#contact",
  },
  {
    title: "Student Management System",
    description:
      "A project idea for managing student records, classes, and academic information.",
    tech: ["Python", "Database", "SQL"],
    link: "#contact",
  },
  {
    title: "AI Learning Assistant",
    description:
      "An idea for an assistant that helps students learn concepts and practice quizzes.",
    tech: ["Python", "AI", "Next.js"],
    link: "#contact",
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "SQL",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080b16] text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#080b16]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-2xl font-bold">
            My<span className="text-violet-400">Portfolio.</span>
          </a>

          <div className="hidden gap-7 text-sm text-gray-300 md:flex">
            <a href="#home" className="hover:text-violet-400">Home</a>
            <a href="#about" className="hover:text-violet-400">About</a>
            <a href="#skills" className="hover:text-violet-400">Skills</a>
            <a href="#projects" className="hover:text-violet-400">Projects</a>
            <a href="#contact" className="hover:text-violet-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-violet-500"
          >
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32"
      >
        <div>
          <p className="mb-5 font-medium tracking-widest text-violet-400">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-violet-400">Your Name</span>
            <br />
            A Future
            <br />
            <span className="text-gray-300">Software Developer</span>
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-gray-400">
            I am a passionate IT student who loves building modern websites,
            learning new technologies, and exploring Artificial Intelligence.
            I turn ideas into useful digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-600 px-7 py-3 font-semibold transition hover:bg-violet-500"
            >
              View My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-violet-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex gap-6 text-sm text-gray-400">
            <a href="https://github.com/" target="_blank" rel="noreferrer"
              className="hover:text-violet-400">GitHub ↗</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"
              className="hover:text-violet-400">LinkedIn ↗</a>
          </div>
        </div>

        {/* Profile Card */}
        <div className="flex justify-center">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-[2rem] border border-violet-400/30 bg-gradient-to-br from-violet-600/20 via-[#15152b] to-blue-500/10 p-8 shadow-2xl shadow-violet-900/20">
            <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-violet-500/20 blur-2xl" />

            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-36 w-36 items-center justify-center rounded-full border-2 border-violet-400 bg-violet-500/10 text-6xl">
                👩‍💻
              </div>
              <h2 className="text-2xl font-bold">Your Name</h2>
              <p className="mt-2 text-violet-300">
                IT Student | Developer
              </p>
              <p className="mt-4 text-sm text-gray-400">
                Learning • Building • Growing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
            Get to know me
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">About Me</h2>

          <p className="mx-auto mt-7 max-w-3xl leading-8 text-gray-400">
            I am an IT student interested in software development, web
            technologies, and Artificial Intelligence. My goal is to improve
            my programming skills, work on practical projects, and use
            technology to solve real-world problems. I believe in continuous
            learning and consistent practice.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
            {[
              ["🎓", "Education", "IT Student"],
              ["💻", "Interests", "Web Development"],
              ["🚀", "Goal", "Grow in Technology"],
            ].map(([icon, title, detail]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-[#101426] p-5">
                <div className="text-2xl">{icon}</div>
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-400">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
            What I work with
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl">My Skills</h2>
          <p className="mt-4 text-gray-400">
            Technologies I use or am currently learning.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-6 py-4 font-medium text-violet-200 transition hover:-translate-y-1 hover:border-violet-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center">
            <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
              My recent work
            </p>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-gray-400">
              A selection of projects and ideas from my learning journey.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="group rounded-2xl border border-white/10 bg-[#101426] p-6 transition hover:-translate-y-2 hover:border-violet-400/50"
              >
                <div className="mb-6 flex h-36 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600/30 to-blue-500/10 text-5xl">
                  {["🌐", "🎓", "🤖"][index]}
                </div>

                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="mt-6 inline-block font-medium text-violet-400 hover:text-violet-300"
                >
                  Learn More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-24 text-center">
        <p className="mb-3 font-semibold uppercase tracking-widest text-violet-400">
          Let&apos;s connect
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">
          Have a Project in Mind?
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          I am always interested in learning, collaborating, and exploring
          new opportunities. Feel free to get in touch.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="mt-8 inline-block rounded-full bg-violet-600 px-8 py-4 font-semibold transition hover:bg-violet-500"
        >
          ✉ Email Me
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-7 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  );
}

