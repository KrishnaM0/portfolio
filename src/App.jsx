import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-gray-950 text-gray-200 font-sans">
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      {/* <Achievements /> */}
      <Contact />
    </div>
  )
}
