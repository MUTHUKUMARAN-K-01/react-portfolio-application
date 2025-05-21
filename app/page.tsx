"use client"

import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Skill from "@/components/Skill"
import Project from "@/components/Project"
import Footer from "@/components/Footer"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <About />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  )
}
