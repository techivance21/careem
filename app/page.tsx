"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Section from "./components/Section"
import About from "./components/About"
import ServicesSection from "./components/ServicesSection"
import Client from "./components/Client"
import Blog from "./components/Blog"
import Safety from "./components/Safety"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <Home />
      <Section />
      <About />
      <ServicesSection />
      <Client />
      <Blog />
      <Safety />
      <Footer />
    </>
  )
}