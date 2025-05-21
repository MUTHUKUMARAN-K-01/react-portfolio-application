import { ExternalLink, Github } from "lucide-react"

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "TUNERIZZ (Website)",
      role: "Assistant Developer",
      description: "A music streaming web app.",
      link: "https://github.com/PRIY4DH4RS4N-D/tunerizz",
      technologies: ["Web Development", "Music Streaming", "UI/UX"],
    },
  ]

  return (
    <div id="projects" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">A showcase of my development work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:border-2 hover:border-indigo-500 transition-all duration-200 p-5"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-indigo-600 font-medium mb-3">{project.role}</p>
              <p className="text-gray-600 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-4 mb-4">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="px-3 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                    {tech}
                  </div>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold transition-all duration-200"
                rel="noreferrer"
              >
                View on GitHub
                <Github className="w-4 h-4 ml-2" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">More projects coming soon as I continue to build and learn!</p>
          <a
            href="https://github.com/MUTHUKUMARAN-K-01"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            View All on GitHub
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </div>
  )
}
