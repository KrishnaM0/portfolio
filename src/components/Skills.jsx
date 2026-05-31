import { useState } from "react"
import SectionTitle from "./SectionTitle"

export default function Skills() {
  const skillsData = {
    "Programming Languages": [
      "Python",
      "SQL",
      "Java",
      "JavaScript"
    ],

    "Data Engineering & Cloud": [
      "PySpark",
      "Azure Cloud Services",
      "Databricks",
      "Power BI",
      "Pandas",
      "NumPy"
    ],

    "Frontend": [
      "HTML",
      "CSS",
      "Bootstrap",
      "React.js",
      "Tailwind CSS"
    ],

    "Backend": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Mongoose",
      "EJS"
    ],

    "Databases": [
      "MySQL",
      "MongoDB",
      "MongoDB Atlas"
    ],

    "Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
      "Render",
      "WordPress"
    ],

    "Core Concepts": [
      "OOP",
      "DBMS",
      "SDLC"
    ],

    "Soft Skills": [
      "Teamwork",
      "Problem Solving",
      "Adaptability"
    ]
  }

  const categories = Object.keys(skillsData)
  const [active, setActive] = useState(categories[0])

  return (
    <section id="skills" className="py-28 px-6">
      <SectionTitle
        title="Skills"
        subtitle="Technologies, tools and concepts I work with"
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
                border transition-all duration-300
                ${
                  active === category
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-500/30"
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
                bg-gradient-to-r from-indigo-500/10 to-purple-500/10
                border border-indigo-500/30
                text-gray-200
                hover:scale-110
                hover:bg-indigo-500/20
                hover:shadow-md hover:shadow-indigo-500/20
                transition-all duration-300
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