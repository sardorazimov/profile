import Hero from '@/components/shared/hero'
import HeroDasboard from '@/components/shared/HeroDasboard'
import TestimonialsPage from '@/components/shared/testmonilas'
import Welo from '@/components/shared/Welo'
import AmazingBg from '@/components/svg/AmazingBg'
import GridBackground from '@/components/svg/GridBackground'
import RgbBackground from '@/components/svg/RgbBackground'
import React from 'react'

const page = () => {
  return (
    <div>
      <RgbBackground/>
      <Welo/>
      <HeroDasboard/>
      <TestimonialsPage/>
    </div>
  )
}

export default page
