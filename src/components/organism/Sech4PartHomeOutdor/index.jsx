import CardImgForSec4_5 from '@/components/molecules/CardImgForSec4_5'
import CardServType from '@/components/molecules/CardServType'
import React from 'react'
import { StyledWraber } from './style'

const Sech4PartHomeOutdor = () => {
  return (
    <StyledWraber>
      <CardServType cardSrc="/sec4Outddoor.png" cardText1="Home and" cardText2="Oudoor"  /> 
      <CardImgForSec4_5 />
    </StyledWraber>
  )
}

export default Sech4PartHomeOutdor