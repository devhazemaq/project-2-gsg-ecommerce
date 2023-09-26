import ForHomeImgeMain from '@/components/atoms/ForHomeImgeMain'
import ForHomeOptions from '@/components/atoms/ForHomeOptions'
import HiUser from '@/components/atoms/HiUser'
import Paper from '@/components/atoms/Paper'
import React from 'react'
import { WraperHero } from './style'

const Hero = () => {
  return (
    <WraperHero>
      <ForHomeOptions />
        <ForHomeImgeMain />
        <div className='hero__part__rhgit' >
          <HiUser />
          <Paper papercolor={"orange"} paperText1={"Get US $10 off"} paperText2={"with a new"} paperText3={"supplier"} />
          <Paper papercolor={"turquoise"} paperText1={"Send quotes with"} paperText2={"supplier"} paperText3={"preferences"} />
        </div>
        
        
    </WraperHero>
  )
}

export default Hero