import { Heading } from '@/components/atoms/typography'
import CardsExtraSercices from '@/components/molecules/CardsExtraSercices'
import React from 'react'
import { StyleOurServ } from './style'

const OuExtraServices = () => {
  return (
    <StyleOurServ>
      <Heading>Our extra services</Heading>
      <CardsExtraSercices />
    </StyleOurServ>
  )
}

export default OuExtraServices