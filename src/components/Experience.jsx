import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <SectionTitle
        title="Experience"
        subtitle="Industry exposure and professional learning"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          {/* Role & Duration */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <FaBriefcase className="text-indigo-400" />
              Web Content Developer Intern
            </h3>

            <p className="text-gray-400 flex items-center gap-2 font-medium">
              <FaCalendarAlt className="text-indigo-400" />
              June 2024 - July 2024
            </p>
          </div>

          {/* Company & Location */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-2">
            <p className="text-gray-300 flex items-center gap-2">
              <FaBuilding className="text-indigo-400" />
              FinnoExpert
            </p>

            <p className="text-gray-400 flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-400" />
              Pune, Maharashtra, India
            </p>
          </div>

          {/* Responsibilities */}
          <ul className="mt-6 space-y-3 text-gray-300">
            {[
              "Assisted in optimizing and redesigning the website.",
              "Researched and created engaging articles on finance, business, market and technology topics.",
              "Collaborated with the editorial team to maintain content quality and consistency.",
              "Contributed to securing an international client through optimized and insightful content."
            ].map((item, index) => (
              <li
                key={index}
                className="group flex items-start gap-3 transition"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-indigo-400 group-hover:scale-150 transition"></span>
                <span className="group-hover:text-white transition">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
