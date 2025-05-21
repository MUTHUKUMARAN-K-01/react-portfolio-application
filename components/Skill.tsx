"use client"

import { useState } from "react"

export default function Skill() {
  const [skill, setSkill] = useState("languages")

  const skills = {
    languages: [
      { name: "C", prof: 85 },
      { name: "C++", prof: 80 },
      { name: "Java", prof: 75 },
      { name: "JavaScript", prof: 70 },
      { name: "HTML", prof: 85 },
      { name: "CSS", prof: 75 },
      { name: "Python", prof: 80 },
      { name: "DSA", prof: 75 },
    ],
    learning: [
      { name: "MERN Stack", prof: 60 },
      { name: "React", prof: 65 },
      { name: "Tailwind CSS", prof: 70 },
      { name: "MongoDB", prof: 55 },
      { name: "Express.js", prof: 50 },
      { name: "Node.js", prof: 60 },
    ],
  }

  const getproflabel = (prof) => {
    if (prof >= 90) return "Expert"
    if (prof > 75) return "Advanced"
    if (prof >= 60) return "Intermediate"
    return "Beginner"
  }

  return (
    <div id="skills" className="min-h-screen w-full bg-gradient-to-r from-white to-gray-60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            A comprehensive overview of my technical expertise and what I'm currently learning
          </p>
        </div>

        {/* Toggle button */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setSkill("languages")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "languages"
                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            Languages & Frameworks
          </button>
          <button
            onClick={() => setSkill("learning")}
            className={`px-6 py-3 rounded-lg text-semibold text-lg transition-all duration-200 ${
              skill == "learning"
                ? "bg-gradient-to-r from-indigo-700 to-purple-700 text-white shadow-lg"
                : "text-gray-600 hover:text-indigo-800"
            }`}
          >
            In Learning
          </button>
        </div>

        {/* Map to show output */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills[skill].map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-xl font-semibold text-gray-600">{skill.name}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center ">
                  <span className="text-sm text-gray-700">{getproflabel(skill.prof)}</span>
                  <span className="text-sm font-semibold text-indigo-600">{skill.prof}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 rounded-full transition-all duration-200"
                    style={{ width: `${skill.prof}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
