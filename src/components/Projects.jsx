import SectionTitle from "./SectionTitle"
import GlassCard from "./GlassCard"
import { FaGithub } from "react-icons/fa"

export default function Projects() {

const featuredProject = {
title: "Retail Sales Analytics",
desc: "Built a retail sales analytics solution using Medallion Architecture to process, transform and visualize retail business data.",

tech: "Azure Data Factory · ADLS · Azure Databricks · PySpark · SQL · Power BI",

image: "/Retail Sales Analytics Dashboard.png",

github: "https://github.com/KrishnaM0",

points: [
  "Built a retail sales analytics project using Medallion Architecture (Bronze, Silver, Gold).",
  "Processed CSV data from customers, products, orders, sales and stores datasets using Azure Databricks and PySpark.",
  "Performed data cleansing, date standardization, duplicate removal and email masking using PySpark.",
  "Created Silver and Rejected layer Delta tables for validated and rejected records.",
  "Implemented SCD Type-2 for customer and product dimension tables in the Gold layer.",
  "Connected Databricks SQL Warehouse with Power BI to build interactive dashboards and reports."
]

}

const projects = [
{
title: "EduX - Centralized Smart E-Learning Platform",
desc: "Built to enhance online learning experiences.",
tech: "Node.js · Express.js · MongoDB · REST APIs · Mongoose · EJS · Bootstrap",
image: "/EduX-img.png",
github: "https://github.com/KrishnaM0/EduX",
live: "https://edux-ad83.onrender.com/"
},
{
title: "StayFinder - Tourist Renting Platform",
desc: "A platform to discover, list and manage rental properties.",
tech: "Node.js · Express.js · MongoDB · REST APIs · Mongoose · EJS · Bootstrap · MVC",
image: "/StayFinder-img.png",
github: "https://github.com/KrishnaM0/StayFinder",
live: "https://stayfinder-5vbt.onrender.com/listings"
},
{
title: "Transaction Dashboard",
desc: "Built a transaction analytics dashboard using third-party API data.",
tech: "Node.js · Express.js · MongoDB · REST APIs · Mongoose · Chart.js · EJS",
image: "/TransactionDashboard-img.png",
github: "https://github.com/KrishnaM0/Roxiler",
live: "https://transactiondashboard.onrender.com/transactions"
},
{
title: "EngiGenius - A Blogging Website",
desc: "Blogging platform designed to enable authors to share their ideas.",
tech: "Node.js · Express.js · MongoDB · REST APIs · Mongoose · EJS · Bootstrap",
image: "/EngiGenius-img.png",
github: "https://github.com/KrishnaM0/EngiGenius",
live: "https://engigenius.onrender.com/"
}
]

return ( <section id="projects" className="py-28 px-6"> <SectionTitle
     title="Projects"
     subtitle="Selected works showcasing my skills"
   />

  {/* Featured Project */}
  <div className="max-w-6xl mx-auto mb-10">
    <GlassCard>

      <div className="overflow-hidden rounded-xl">
        <img
          src={featuredProject.image}
          alt={featuredProject.title}
          className="
            w-full
            rounded-xl
            border border-white/10
            hover:scale-[1.02]
            transition-all duration-500
          "
        />
      </div>

      <div className="mt-6">

        <span
          className="
            inline-block
            px-3 py-1
            text-xs
            rounded-full
            bg-indigo-500/20
            border border-indigo-500/30
            text-indigo-300
          "
        >
          Featured Project • Data Engineering
        </span>

        <h3 className="text-2xl md:text-3xl font-bold text-white mt-4">
          {featuredProject.title}
        </h3>

        <p className="text-gray-400 mt-3 leading-7">
          {featuredProject.desc}
        </p>

        <p className="text-indigo-400 text-sm mt-3">
          {featuredProject.tech}
        </p>

        <ul className="mt-6 space-y-3 text-gray-300">
          {featuredProject.points.map(point => (
            <li key={point} className="flex gap-3">
              <span className="text-indigo-400 shrink-0">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a
            href={featuredProject.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2
              text-base
              rounded
              border border-indigo-500
              text-amber-50
              hover:bg-indigo-500/10
              transition
              inline-flex
              items-center
              justify-center
            "
          >
            <FaGithub />
          </a>
        </div>

      </div>

    </GlassCard>
  </div>

  {/* Other Projects */}
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

    {projects.map(p => (
      <GlassCard key={p.title}>

        <div className="overflow-hidden rounded-xl">
          <img
            src={p.image}
            alt={p.title}
            className="
              rounded-xl
              mb-4
              object-cover
              h-48
              w-full
              hover:scale-105
              transition-all
              duration-300
            "
          />
        </div>

        <h3 className="text-xl font-semibold text-white">
          {p.title}
        </h3>

        <p className="text-gray-400 mt-2">
          {p.desc}
        </p>

        <p className="text-indigo-400 text-sm mt-2">
          {p.tech}
        </p>

        <div className="mt-5 flex gap-4">

          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2
              text-base
              rounded
              border border-indigo-500
              text-amber-50
              hover:bg-indigo-500/10
              transition
            "
          >
            <FaGithub />
          </a>

          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="
              px-4 py-2
              text-sm
              rounded
              border border-indigo-500
              hover:bg-indigo-950
              transition
            "
          >
            🚀
          </a>

        </div>

      </GlassCard>
    ))}

  </div>
</section>
)
}
