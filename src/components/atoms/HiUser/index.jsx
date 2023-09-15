import React from 'react'
import Avatar from '../Avatar'
import { Body2 } from '../typography'
import { StyleWraperHiuser, StyledHiInfo, StyledHiInfoBody } from './style'
import CusttomButton from '../CustomButton'

const HiUser = () => {
  return (
    <StyleWraperHiuser>
      <StyledHiInfo>
        <Avatar/>
        <StyledHiInfoBody>
          <Body2>Hi, user</Body2>
          <Body2>let's get stated</Body2>
        </StyledHiInfoBody>
        
      </StyledHiInfo>
      
      < CusttomButton btnColor={"blue180"} btnText='Join now' />
      < CusttomButton btnColor={"white180"} btnText='Log in' />

    </StyleWraperHiuser>
  )
}

export default HiUser