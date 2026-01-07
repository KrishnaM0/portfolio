import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <SectionTitle
        title="About Me"
        subtitle="Who I am and how I grow as a developer"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="space-y-6 text-gray-300 leading-8 text-lg">

            <p className="transition hover:text-white">
              I am an Information Technology graduate with a strong interest in
              software development and full-stack web technologies. Throughout
              my engineering journey, I have built multiple web applications,
              including a centralized Smart E-Learning Platform developed as my
              final-year project to enhance digital learning experiences.
            </p>

            <p className="transition hover:text-white">
              I actively participated in Smart India Hackathon, college-level
              hackathons, and project competitions, where I led teams and worked
              on real-world problem-solving ideas. These experiences strengthened
              my skills in collaboration, decision-making, and taking ownership
              of projects from concept to execution.
            </p>

            <p className="transition hover:text-white">
              I am a fast learner who enjoys exploring new tools and technologies
              while continuously improving my technical and problem-solving
              abilities.
            </p>

          </div>
        </GlassCard>
      </div>
    </section>
  )
}
