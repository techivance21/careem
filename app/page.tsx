"use client"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import LeaseCar from "./components/LeaseCar"
import LeaseBike from "./components/LeaseBike"
import TaxiService from "./components/TaxiService"
import DeliveryService from "./components/DeliveryService"
import ChargingStations from "./components/ChargingStations"
import HeroVideoSection from "./components/HeroVideoSection"
import TermsCondition from "./components/TermsCondition"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <LeaseCar />
      <LeaseBike />
      <TaxiService />
      <DeliveryService />
      <ChargingStations />
      <HeroVideoSection />
      <TermsCondition />
      <Footer />
    </>
  )
}