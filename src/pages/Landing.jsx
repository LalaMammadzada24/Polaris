import React from 'react'
import LandingHero from '../components/landing/LandingHero'
import LandingPolarisOffers from '../components/landing/LandingPolarisOffers'
import LandingCommunity from '../components/landing/LandingCommunity'
import LandingMentors from '../components/landing/LandingMentors'
import Colearner from '../components/landing/Colearner'
const Landing = () => {
  return (
    <>
      <LandingHero/>
      <LandingPolarisOffers/>
      <LandingCommunity/>
      <LandingMentors/>
      <Colearner/>
    </>
  )
}

export default Landing