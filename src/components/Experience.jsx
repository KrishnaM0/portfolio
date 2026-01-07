import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <SectionTitle
        title="Experience"
        subtitle="Industry exposure and professional learning"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="sm:flex sm:justify-between">
            <h3 className="text-xl font-semibold text-white">
              Web Content Developer Intern
            </h3>
            <p className="text-gray-350 mt-1 font-semibold">June 2024 – July 2024</p>
          </div>
          <div className="sm:flex sm:justify-between">
            <h3 className="text-gray-350 text-white">
              @FinnoExpert
            </h3>
            <p className="text-gray-350 mt-1">Pune, Maharashtra, India</p>
          </div>
          <ul className="mt-4 text-gray-300 list-disc list-inside space-y-2">
            <li>Assisted in optimizing and redesigning the website.</li>
            <li>Researched and created engaging articles on finance, business, market and technology topics.</li>
            <li>Collaborated with the editorial team to maintain content quality and consistency.</li>
            <li>Contributed to securing an international client through optimized and insightful content.</li>
          </ul>
        </GlassCard>
      </div>
    </section>
  )
}
