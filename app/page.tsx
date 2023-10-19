'use client'

import { InitialSection } from './components/initialSection/initialSection'
import { DescriptionSection } from './components/descriptionSection/descriptionSection'
import { PetSection } from './components/petSection/petSection'
import { CarouselSection } from './components/carouselSection/carouselSection'
import { RepechageSection } from './components/repechageSection/repechageSection'


export default function Home() {
  return (
    <>
      <InitialSection/>
      <DescriptionSection/>
      <PetSection/>
      <CarouselSection/>
      <RepechageSection/>
    </>
  )
}
