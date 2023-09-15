"use client"

import { StyleWraperForSuperDiscount } from './style'
import { Body2, Heading } from '@/components/atoms/typography'
import CusttomButton from '@/components/atoms/CustomButton'

const SuperDiscount = () => {
  return (
    <StyleWraperForSuperDiscount>

      <div className="info__discount">
        <Heading>Super discount on more than 100 USD</Heading>
        <Body2>Have you ever finally just write dummy info</Body2>
      </div>

    
      <CusttomButton btnColor={"orange"} btnText='Shop now'  />
      
    </StyleWraperForSuperDiscount>
  )
}

export default SuperDiscount