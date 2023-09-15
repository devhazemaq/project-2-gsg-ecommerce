import React from 'react'
import { Body } from '../typography'
import { StyledInfor } from './style'
import { useRouter } from 'next/navigation'

const InformationForLoginAndRegister = ({textOne, textTwoBlue}) => {
  return (
    <StyledInfor>
      <Body>{textOne}</Body>

      <Body className='infColo'  >{textTwoBlue}</Body>
    </StyledInfor>
  )
}

export default InformationForLoginAndRegister
