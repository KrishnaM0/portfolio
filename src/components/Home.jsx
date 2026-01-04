export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold">
          Krishna <span className="text-indigo-500">Muskawad</span>
        </h1>
        <p className="mt-4 text-xl text-gray-300">
          Full-Stack Web Developer | Fresher
        </p>
        <p className="mt-2 text-gray-400 max-w-xl mx-auto">
          Building scalable, data-driven web applications using
          React, Node.js & MongoDB
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="/Resume - Krishna Muskawad.pdf" download className="px-6 py-2 bg-indigo-600 rounded hover:bg-indigo-700 font-semibold">
            Resume
          </a>
          <a href="https://github.com/KrishnaM0" className="px-6 py-2 border border-indigo-500 rounded hover:bg-indigo-500/10 font-semibold">
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
