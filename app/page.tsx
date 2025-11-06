"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Section from "./components/Section"
import About from "./components/About"
import Client from "./components/Client"
import Blog from "./components/Blog"
import Safety from "./components/Safety"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <About />
      <Client />
      <Blog />
      <Safety />
      <Footer />
    </>
  )
}