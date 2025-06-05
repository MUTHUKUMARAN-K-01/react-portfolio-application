"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handlechange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Properly encode all form data to handle special characters
    const encodedSubject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
    const encodedBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    )

    // Construct the mailto link with properly encoded parameters
    const mailtoLink = `mailto:muthukumaran.42510@gmail.com?subject=${encodedSubject}&body=${encodedBody}`

    // Open the email client
    window.open(mailtoLink, "_blank")

    // Reset the form
    setFormData({ name: "", email: "", message: "" })

    // Optional: You could add a state variable to show a confirmation message
    // setSubmitSuccess(true)
  }

  return (
    <div id="contact" className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="mt-4 text-xl text-center text-gray-600 font-semibold">
            Let's connect and explore opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="text-lg font-medium">+91 89250 36049</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-lg font-medium">muthukumaran.42510@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/muthukumaran-k-"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    linkedin.com/in/muthukumaran-k-
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <a
                    href="https://github.com/MUTHUKUMARAN-K-01"
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
                  >
                    github.com/MUTHUKUMARAN-K-01
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handlechange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handlechange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded p-3"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={4}
                  value={formData.message}
                  onChange={handlechange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded p-3"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
