import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaBuilding
} from "react-icons/fa"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <SectionTitle
        title="Experience"
        subtitle="From Graduate Engineer Trainee to Data Engineer"
      />

      <div className="max-w-5xl mx-auto">
        <GlassCard>

          {/* Company Header */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaBuilding className="text-indigo-400 shrink-0" />
                LTM (LTIMindtree)
              </h3>

              <p className="text-gray-400 mt-2">
                Jan 2026 - Present
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10 relative border-l-2 border-indigo-500/40 pl-8 space-y-10">

            {/* Data Engineer */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-indigo-500 border-4 border-gray-950 group-hover:scale-125 transition-all duration-300"></span>

              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <h4 className="text-xl font-semibold text-indigo-400 flex items-center gap-2">
                  <FaBriefcase className="shrink-0" />
                  Data Engineer - P1
                </h4>

                <span className="text-gray-400">
                  May 2026 - Present
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <FaMapMarkerAlt className="text-indigo-400 shrink-0" />
                Bengaluru, India • Hybrid
              </div>

              <ul className="mt-5 space-y-3 text-gray-300">
                <li className="flex gap-3 group/item">
                  <FaArrowRight className="text-indigo-400 mt-1 shrink-0 group-hover/item:translate-x-1 transition" />
                  <span className="group-hover/item:text-white transition">
                    Allocated to the Unilever - Europe project as part of the Data Engineering team.
                  </span>
                </li>

                <li className="flex gap-3 group/item">
                  <FaArrowRight className="text-indigo-400 mt-1 shrink-0 group-hover/item:translate-x-1 transition" />
                  <span className="group-hover/item:text-white transition">
                    Currently undergoing project onboarding and knowledge transfer sessions.
                  </span>
                </li>
              </ul>
            </div>

            {/* GET */}
            <div className="relative group">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-purple-500 border-4 border-gray-950 group-hover:scale-125 transition-all duration-300"></span>

              <div className="flex flex-col md:flex-row md:justify-between gap-2">
                <h4 className="text-xl font-semibold text-purple-400 flex items-center gap-2">
                  <FaBriefcase className="shrink-0" />
                  Graduate Engineer Trainee (D&A - Azure - PySpark)
                </h4>

                <span className="text-gray-400">
                  Jan 2026 - May 2026
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mt-2">
                <FaMapMarkerAlt className="text-purple-400 shrink-0" />
                Navi Mumbai, India
              </div>

              <ul className="mt-5 space-y-3 text-gray-300">
                <li className="flex gap-3 group/item">
                  <FaArrowRight className="text-purple-400 mt-1 shrink-0 group-hover/item:translate-x-1 transition" />
                  <span className="group-hover/item:text-white transition">
                    Completed training in SQL, Python, PySpark, Azure Cloud Services, Databricks and Power BI.
                  </span>
                </li>

                <li className="flex gap-3 group/item">
                  <FaArrowRight className="text-purple-400 mt-1 shrink-0 group-hover/item:translate-x-1 transition" />
                  <span className="group-hover/item:text-white transition">
                    Gained hands-on exposure to Data Engineering concepts and ETL workflows.
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </GlassCard>
      </div>
    </section>
  )
}