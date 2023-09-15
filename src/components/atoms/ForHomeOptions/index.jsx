import React from 'react'
import { Body, Body2 } from '../typography'
import { StyledHomeOptions } from './style'

const ForHomeOptions = () => {
  return (
    <StyledHomeOptions>
      <ul>
        <li className='li__style'><Body2 as={"span"} className='' >Automobiles</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Clothes and wear</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Home interiors</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Computer and tech</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Tools, equipments</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Sports and outdoor</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Animal and pets</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >Machinery tools</Body2></li>
        <li><Body2 as={"span"} className='style__body2__typo' >More category</Body2></li>
      </ul>
    </StyledHomeOptions>
  )
}

export default ForHomeOptions