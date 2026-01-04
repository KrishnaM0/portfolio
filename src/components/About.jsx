import SectionTitle from "./SectionTitle"

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <SectionTitle
        title="About Me"
        subtitle="Who I am and what I love building"
      />

      <div className="max-w-4xl mx-auto text-center text-gray-300 leading-8 text-lg">
        <p>
          I am a passionate Information Technology undergraduate (BE 2025)
          with strong expertise in full-stack web development.
          I enjoy creating scalable, clean and user-centric applications
          using modern technologies.
        </p>
      </div>
    </section>
  )
}
