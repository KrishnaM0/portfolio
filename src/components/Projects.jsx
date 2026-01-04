import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { FaGithub } from "react-icons/fa"

export default function Projects() {
  const projects = [
    {
      title: "EduX - Centralized Smart E-Learning Platform",
      desc: "Built to enhance online learning experiences.",
      tech: "Node.js · Express · MongoDB",
      image: "/EduX-img.png",
      github: "https://github.com/KrishnaM0/EduX",
      // live: "#"
    },
    {
      title: "StayFinder - Tourist Renting Platform",
      desc: "A platform to discover, list and manage rental properties.",
      tech: "Node.js · MongoDB · MVC",
      image: "/StayFinder-img.png",
      github: "https://github.com/KrishnaM0/StayFinder",
      // live: "#"
    },
    {
      title: "Transaction Dashboard",
      desc: "Built a transaction analytics dashboard using third-party API data.",
      tech: "Node.js · Express · MongoDB",
      image: "/TransactionDashboard-img.png",
      github: "https://github.com/KrishnaM0/Roxiler",
      // live: "#"
    },
    {
      title: "EngiGenius - A Blogging Website",
      desc: "Blogging platform designed to enable authors to share their ideas.",
      tech: "Node.js · Express · MongoDB",
      image: "/EngiGenius-img.png",
      github: "https://github.com/KrishnaM0/EngiGenius",
      // live: "#"
    }
  ]

  return (
    <section id="projects" className="py-28 px-6">
      <SectionTitle
        title="Projects"
        subtitle="Selected works showcasing my skills"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map(p => (
          <GlassCard key={p.title}>
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              className="rounded-xl mb-4 object-cover h-48 w-full"
            />

            {/* Content */}
            <h3 className="text-xl font-semibold text-white">
              {p.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>

            <p className="text-indigo-400 text-sm mt-2">
              {p.tech}
            </p>

            {/* Buttons */}
            <div className="mt-5 flex gap-4">
              <a
                href={p.github}
                className="px-4 py-2 text-base rounded border border-indigo-500 text-amber-50 hover:bg-indigo-500/10 transition"
              >
                <FaGithub></FaGithub>
              </a>
              {/* <a
                href={p.live}
                className="px-4 py-2 text-sm rounded bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Live Demo
              </a> */}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
