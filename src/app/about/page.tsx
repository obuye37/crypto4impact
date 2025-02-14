import Carousel from '@/components/CarouselFramer'
import { Slides } from '@/data/Slides'
import React from 'react'

const About = () => {
  return (
    <div>
      <Carousel images={Slides} />
    </div>
  )
}

export default About