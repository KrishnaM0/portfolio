import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { MdEmail } from "react-icons/md"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <SectionTitle
        title="Contact"
        subtitle="Let's connect and build something great together"
      />

      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="flex flex-wrap justify-center gap-6">

            {/* Email */}
            <ContactIcon
              icon={<MdEmail />}
              label="Email"
              link="mailto:krishnamuskawad31@gmail.com"
            />

            {/* LinkedIn */}
            <ContactIcon
              icon={<FaLinkedin />}
              label="LinkedIn"
              link="https://www.linkedin.com/in/krishna-muskawad/"
            />

            {/* GitHub */}
            <ContactIcon
              icon={<FaGithub />}
              label="GitHub"
              link="https://github.com/KrishnaM0"
            />

            {/* Instagram */}
            <ContactIcon
              icon={<FaInstagram />}
              label="Instagram"
              link="https://www.instagram.com/krishna_muskawad/"
            />

          </div>

          <p className="mt-8 text-center text-gray-300">
            Pune, India 🇮🇳
          </p>
        </GlassCard>
      </div>
    </section>
  )
}

/* Reusable icon button */
function ContactIcon({ icon, label, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex flex-col items-center justify-center
        w-28 h-28
        rounded-xl
        bg-gradient-to-br from-indigo-500/10 to-purple-500/10
        border border-indigo-500/30
        text-gray-200
        hover:scale-110
        hover:bg-indigo-500/20
        transition-all duration-300
      "
    >
      <span className="text-3xl text-indigo-400">
        {icon}
      </span>
      <span className="mt-2 text-sm">
        {label}
      </span>
    </a>
  )
}
