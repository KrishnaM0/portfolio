import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <SectionTitle
        title="About Me"
        subtitle="Building solutions through code, data and cloud technologies"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="space-y-6 text-gray-300 leading-8 text-lg">

            <p className="transition hover:text-white">
              I am an Information Technology graduate currently working as a
              Data Engineer at <span className="text-indigo-400 font-medium">LTM (LTIMindtree)</span>.
              My journey began with full-stack web development, where I built
              responsive and scalable web applications using modern technologies,
              including a centralized Smart E-Learning Platform developed as my
              final-year project.
            </p>

            <p className="transition hover:text-white">
              Through professional training and hands-on learning, I developed a
              strong foundation in Data Engineering and Cloud technologies.
              I have gained experience working with
              <span className="text-indigo-400"> SQL, Python, PySpark, Azure, Databricks </span>
              and <span className="text-indigo-400">Power BI</span>, while
              building an understanding of data processing, ETL workflows,
              analytics and cloud-based solutions.
            </p>

            <p className="transition hover:text-white">
              I actively participated in Smart India Hackathon, college
              hackathons and project competitions, where I led teams and worked
              on real-world problem-solving ideas. These experiences strengthened
              my collaboration, leadership and decision-making skills while
              reinforcing my passion for continuous learning and innovation.
            </p>

          </div>
        </GlassCard>
      </div>
    </section>
  )
}