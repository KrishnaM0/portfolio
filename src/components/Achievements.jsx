import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <SectionTitle
        title="Achievements"
        subtitle="Leadership, hackathons and recognitions"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <ul className="text-gray-300 list-disc list-inside space-y-3">
            <li>Led a team in Smart India Hackathon (Internal Round)</li>
            <li>Participated in inter-college hackathons</li>
            <li>Improved final-year project based on SIH feedback</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
