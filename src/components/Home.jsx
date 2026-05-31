export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-6"
    >
      <div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Krishna <span className="text-indigo-500">Muskawad</span>
        </h1>

        <p className="mt-4 text-xl text-gray-300">
          Data Engineer • Full-Stack Developer
        </p>

        <p className="mt-2 text-gray-400 max-w-2xl mx-auto leading-8">
          Building scalable applications, data pipelines and cloud-powered
          solutions using Python, SQL, PySpark, Azure and modern web technologies.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/Resume - Krishna Muskawad.pdf"
            download
            className="
              px-6 py-3
              bg-indigo-600
              rounded-xl
              hover:bg-indigo-700
              transition
              font-semibold
            "
          >
            Resume
          </a>

          <a
            href="https://github.com/KrishnaM0"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-3
              border border-indigo-500
              rounded-xl
              hover:bg-indigo-500/10
              transition
              font-semibold
            "
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}