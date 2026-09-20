import { useState } from "react"

const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <span className="text-2xl">🌥️</span>

          <h1 className="text-2xl font-bold text-sky-600">
            Atoms
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sky-600 font-semibold hover:text-sky-800 transition-colors">
            Home
          </a>

          <a href="#weather" className="text-gray-700 hover:text-sky-600 transition-colors">
            Weather
          </a>

          <a href="#about" className="text-gray-700 hover:text-sky-600 transition-colors">
            About
          </a>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden sm:flex items-center bg-gray-100 rounded-full p-1">
            <button className="px-3 py-1 rounded-full bg-sky-500 text-white text-sm font-medium">
              °C
            </button>

            <button className="px-3 py-1 text-gray-600 text-sm font-medium">
              °F
            </button>
          </div>

          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Toggle dark mode">
            🌙
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl">
            ☰
          </button>
          {menuOpen && (
            <div className="absolute right-6 top-16 flex gap-5 rounded-xl border border-sky-100 bg-sky-50 px-5 py-4 shadow-lg md:hidden">

              <a href="#home" className="font-medium text-gray-700 transition hover:text-sky-600">
                Home
              </a>

              <a href="#weather" className="font-medium text-gray-700 transition hover:text-sky-600">
                Weather
              </a>

              <a href="#about" className="font-medium text-gray-700 transition hover:text-sky-600">
                About
              </a>

            </div>
          )}

        </div>

      </div>
    </nav>
  )
}

export default Navbar