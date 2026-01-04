import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <SectionTitle
        title="Education"
        subtitle="Academic background"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

            {/* Left: University Logo */}
            <div className="flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/f/f6/Savitribai_Phule_Pune_University_Logo.png"
                alt="Savitribai Phule Pune University Logo"
                className="w-24 h-24 object-contain rounded-lg bg-white p-2"
              />
            </div>

            {/* Right: Education Details */}
            <div className="flex-1 w-full">

              {/* Degree + CGPA */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-semibold text-white">
                  Bachelor of Engineering (Information Technology)
                </h3>
                <p className="text-gray-300 mt-1 md:mt-0 font-semibold">
                  CGPA: 8.06
                </p>
              </div>

              {/* University + Duration */}
              <div className="flex flex-col md:flex-row md:justify-between mt-2">
                <p className="text-gray-300">
                  Savitribai Phule Pune University
                </p>
                <p className="text-gray-300 mt-1 md:mt-0">
                  Aug 2021 – Jun 2025
                </p>
              </div>

            </div>
          </div>

        </GlassCard>
      </div>
    </section>
  )
}
