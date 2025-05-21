function About() {
  return (
    <div id="about" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Muthukumaran K
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aspiring Full-Stack Developer & Problem-Solver. I'm a 1st-year Computer Science undergrad at Chennai
            Institute of Technology, currently holding a 8.69 CGPA. I love building web projects and solving coding
            challenges to sharpen my skills.
          </p>
        </div>

        {/* Profile Image */}
        <div className="relative flex justify-center mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 rounded-full blur-lg opacity-20"></div>
          <img
            src="/images/profile.png"
            alt="Muthukumaran K"
            className="rounded-full transform hover:scale-110 transition duration-300 shadow-lg relative z-10 border-4 border-white w-48 h-48 object-cover"
          />
        </div>

        {/* Education Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Education</h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600">Bachelor of Engineering (CSE)</h3>
                <p className="text-lg text-gray-600">Chennai Institute of Technology, Chennai</p>
              </div>
              <div className="mt-2 md:mt-0">
                <p className="text-lg text-gray-600">2024 – 2028</p>
                <p className="text-lg font-medium text-indigo-600">CGPA: 8.69</p>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Introduction to Cybersecurity</h3>
              <p className="text-gray-600">Cisco Networking Academy</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Introduction to Data Science</h3>
              <p className="text-gray-600">Cisco Networking Academy</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Introduction to Modern AI</h3>
              <p className="text-gray-600">Cisco Networking Academy</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Introduction to IoT and Digital Transformation</h3>
              <p className="text-gray-600">Cisco Networking Academy</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">AI Fundamentals with IBM SkillsBuild</h3>
              <p className="text-gray-600">Cisco Networking Academy</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Fundamentals of HTML & Python</h3>
              <p className="text-gray-600">Coding Ninjas</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Software Engineering Job Simulation</h3>
              <p className="text-gray-600">Goldman Sachs</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">ChatGPT for Everyone</h3>
              <p className="text-gray-600">Guvi</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">C-50 Python 50 Very Easy Challenges</h3>
              <p className="text-gray-600">SkillRack</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Hack-n-Droid</h3>
              <p className="text-gray-600">VIT Chennai</p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-indigo-600">Innovate-X Hackathon</h3>
              <p className="text-gray-600">SSN College of Engineering</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Achievements</h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">Innovate-X Hackathon (SSN)</h3>
              <p className="text-lg text-gray-600">
                Advanced past idea submission round into top 21 teams out of 100+.
              </p>
            </div>
            <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-600">Coding Challenges</h3>
              <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-600">
                <li>230+ problems solved on LeetCode</li>
                <li>500+ total problems on SkillRack, CodeChef & GFG</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
