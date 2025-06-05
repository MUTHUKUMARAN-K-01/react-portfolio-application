import { Github, Linkedin, Mail } from "lucide-react"

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Muthukumaran K</h3>
            <p className="text-white/80">Aspiring Full-Stack Developer & Problem-Solver</p>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-teal-200 transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/80 hover:text-teal-200 transition-colors duration-200">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/80 hover:text-teal-200 transition-colors duration-200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-teal-200 transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://github.com/MUTHUKUMARAN-K-01"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/muthukumaran-k-"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:muthukumaran.42510@gmail.com"
                className="text-white/80 hover:text-teal-200 transition-colors duration-200"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/80">© 2025 Muthukumaran K. Built with React & TailwindCSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
