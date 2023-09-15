import { Body } from '@/components/atoms/typography'
import Image from 'next/image'
import React from 'react'
import { StyleContainCardServ, StyleMainCardServv } from './style'

const CardsExtraSercices = () => {
  return (
    <StyleMainCardServv>

      <StyleContainCardServ>
        <Image src={"/extraImage001.png"} alt='extraImage001' className='img__extra' width={262} height={120} />
        <div className='p__contain' >
          <Body>Source from</Body>
          <Body>Industry Hubs</Body>
          <img src="/iconSearch.svg" alt="iconSearch" className='img__icon' />
        </div>
      </StyleContainCardServ>
      <StyleContainCardServ>
        <Image src={"/extraImage002.png"} alt='extraImage001' className='img__extra' width={262} height={120} />
        <div className='p__contain' >
          <Body>Customize Your</Body>
          <Body>Products </Body> 
          <img src="/iconInventory_2Extra.svg" alt="iconInventory_2Extra" className='img__icon' />
        </div>
      </StyleContainCardServ>
      <StyleContainCardServ>
        <Image src={"/extraImage003.png"} alt='extraImage001' className='img__extra' width={262} height={120} />
        <div className='p__contain' >
          <Body>Fast, reliable shipping</Body>
          <Body>by ocean or air</Body> 
          <img src="/iconSend.svg" alt="iconSend" className='img__icon' />
        </div>
      </StyleContainCardServ>
      <StyleContainCardServ>
        <Image src={"/extraImage004.png"} alt='extraImage001' className='img__extra' width={262} height={120} />
        <div className='p__contain' >
          <Body>Product monitoring </Body>
          <Body>and inspection</Body> 

          <img src="/iconSecurity.svg" alt="iconSecurity" className='img__icon' />
        </div>
      </StyleContainCardServ>

    </StyleMainCardServv>


  )
}

export default CardsExtraSercices