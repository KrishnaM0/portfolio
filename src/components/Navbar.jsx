import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    "Home",
    "About",
    "Education",
    "Skills",
    "Projects", 
    "Experience",   
    // "Achievements",
    "Contact"
  ]

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
            {/* Logo */}
            <a href="#home" className="text-xl font-bold text-indigo-500">
            Krishna<span className="text-white">.dev</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-sm font-medium">
                {links.map(link => (
                    <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-indigo-400 transition"
                    >
                    {link}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
            className="md:hidden text-gray-300"
            onClick={() => setOpen(!open)}
            >
            ☰
            </button>
        </div>

        {/* Mobile Menu */}
        {open && (
            <div className="md:hidden bg-gray-900 border-t border-gray-800">
                {links.map(link => (
                    <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="block px-6 py-3 text-gray-300 hover:bg-gray-800"
                    >
                    {link}
                    </a>
                ))}
            </div>
        )}
    </nav>
  )
}
