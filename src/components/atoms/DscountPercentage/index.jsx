import React from 'react'
import { SmallText } from '../typography'
import { StyledDscount } from './style'

const DscountPercentage = ({descountPerc = '-00%'}) => {
  return (
    <StyledDscount>
      <SmallText className='dscount__span'>{descountPerc}</SmallText>
    </StyledDscount>
  )
}

export default DscountPercentage