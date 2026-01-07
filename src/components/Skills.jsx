 
import { useState } from "react"
import SectionTitle from "./SectionTitle"

export default function Skills() {
  const skillsData = {
    "Programming Languages": ["Java", "JavaScript"],
    "Frontend": ["HTML", "CSS", "Bootstrap", "React.js", "Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "REST APIs", "Mongoose", "EJS"],
    "Databases": ["MySQL", "MongoDB", "MongoDB Atlas", "PL/SQL"],
    "Tools": ["Render", "WordPress", "VS Code", "IntelliJ IDEA", "Git", "GitHub"],
    "Core Concepts": ["OOP", "DBMS", "SDLC"],
    "Soft Skills": ["Teamwork", "Problem Solving", "Adaptability"]
  }

  const categories = Object.keys(skillsData)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="py-28 px-6">
      <SectionTitle
        title="Skills"
        subtitle="My technical expertise & core strengths"
      />

      <div className="max-w-5xl mx-auto">

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`
                px-5 py-2 rounded-xl text-sm
                border transition
                ${
                  active === category
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "border-gray-700 text-gray-400 hover:border-indigo-400 hover:text-indigo-400"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="flex flex-wrap justify-center gap-4">
          {skillsData[active].map(skill => (
            <span
              key={skill}
              className="
                px-6 py-3 rounded-3xl
                bg-linear-to-r from-indigo-500/10 to-purple-500/10
                border border-indigo-500/30
                text-gray-200
                hover:scale-110
                hover:bg-indigo-500/20
                transition
              "
            >
              {skill}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
