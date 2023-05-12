import React from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Header from './components/Header'
// import Section from './components'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Section4 from './components/Section4'
import Section5 from './components/Section5'
import Section6 from './components/Section6'
import Section7 from './components/Section7'
import SectionCopy from './components/SectionCopy'
const page = () => {
  return (
    <>
    
      <Section1/>
      <SectionCopy/>
      <Section2/>
      <Section3 delay={0}/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
    </>
  )
}

export default page 
