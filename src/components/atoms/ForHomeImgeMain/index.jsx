import React from 'react'
import { BigHeading, TitleH4 } from '../typography'
import CusttomButton from '../CustomButton'
import { StyleWraperHomeImageMain, StyledInfo } from './style'

const ForHomeImgeMain = () => {
  return (
    <StyleWraperHomeImageMain> 
      
      <StyledInfo >
        <TitleH4>Latest trending</TitleH4>
        <BigHeading className='style__for__bigheading'>Electronic items</BigHeading>
        <CusttomButton btnColor={"whiteSizeBig"} btnText='Learn more' />
      </StyledInfo>
    </StyleWraperHomeImageMain>
  )
}

export default ForHomeImgeMain