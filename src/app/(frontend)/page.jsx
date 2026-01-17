import AboutCompany from '@/components/AboutCompany'
import AreaWeServe from '@/components/AreaWeServe'
import CounterSection from '@/components/CounterSection'
import Hero from '@/components/Hero'
import MarqueeLogos from '@/components/MarqueeLogos'
import OurLetestProject from '@/components/OurLetestProject'
import OurPartner from '@/components/OurPartner'
import OurRecentCaseStudies from '@/components/OurRecentCaseStudies'
import OurService from '@/components/OurService'
import React from 'react'

const page = () => {
  return (
    <> 
     <Hero/>
     <AboutCompany/>
     <OurService/>
     <OurLetestProject/>
     <OurRecentCaseStudies/>
     <CounterSection/>
     <AreaWeServe/>
    <OurPartner/>
    </>
  )
}

export default page