import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { FaTrophy, FaUsers, FaLightbulb } from "react-icons/fa"

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <SectionTitle
        title="Achievements"
        subtitle="Leadership, hackathon and key learnings"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <ul className="space-y-6 text-gray-300">

            {/* Achievement 1 */}
            <li className="group flex items-start gap-4 transition">
              <FaTrophy className="text-indigo-400 text-xl mt-1 transition-transform duration-300 group-hover:scale-125" />
              <span className="group-hover:text-white transition">
                <span className="font-semibold">Led a team</span> in the Smart India Hackathon (Internal Round) - project idea shortlisted for final selection.
              </span>
            </li>

            {/* Achievement 2 */}
            <li className="group flex items-start gap-4 transition">
              <FaUsers className="text-indigo-400 text-xl mt-1 transition-transform duration-300 group-hover:scale-125" />
              <span className="group-hover:text-white transition">
                Participated in college-level hackathon & inter-college project competition, managing both development & coordination.
              </span>
            </li>

            {/* Achievement 3 */}
            <li className="group flex items-start gap-4 transition">
              <FaLightbulb className="text-indigo-400 text-xl mt-1 transition-transform duration-300 group-hover:scale-125" />
              <span className="group-hover:text-white transition">
                Improved final-year project based on SIH evaluations and feedback.
              </span>
            </li>

          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
