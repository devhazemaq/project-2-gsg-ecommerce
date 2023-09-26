import CardsRecomm from '@/components/molecules/CardsRecomm/CardsRecomm'
import React from 'react'
import { StyleRecoIt } from './style'
import { Heading } from '@/components/atoms/typography'

const RecommendedItems = () => {
  return (
    <StyleRecoIt>
      <Heading> Recommended items</Heading>
      <CardsRecomm />
    </StyleRecoIt>
  )
}

export default RecommendedItems