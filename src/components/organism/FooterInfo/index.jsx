import LogoBrand from '@/components/atoms/LogoBrand'
import { Body, Body2 } from '@/components/atoms/typography'
import Image from 'next/image'
import React from 'react'
import { StyleBrandInfo, StyleDataInfoServ, StyleMainFooterInfo, StyleoStoreImge } from './style'

const FooterInfo = () => {
  return (
    <StyleMainFooterInfo>

        <StyleBrandInfo>
          <LogoBrand/>
          <div>
            <Body2>Best information about the company</Body2>
            <Body2>gies here but now lorem ipsum is</Body2> 
          </div>
          <div className='footer__icon__soch'>
            <Image src={"/facebook3.svg"} alt='facebook3' width={32} height={32}/>
            <Image src={"/twitter3.svg"} alt='twitter3' width={32} height={32}/>
            <Image src={"/linkedin3.svg"} alt='linkedin3' width={32} height={32}/>
            <Image src={"/instagram3.svg"} alt='instagram3' width={32} height={32}/>
            <Image src={"/youtube3.svg"} alt='youtube3' width={32} height={32}/>
          </div>
        </StyleBrandInfo>
        
        
        {/* <--------part2 About--------> */}
        <StyleDataInfoServ >
            <Body  className='p__info1' >About</Body>
            <Body2 className='p__info2' >About Us</Body2>
            <Body2 className='p__info2' >Find store</Body2>
            <Body2 className='p__info2' >Catrgories</Body2>
            <Body2 className='p__info2' >Blogs</Body2>
        </StyleDataInfoServ>

        <StyleDataInfoServ >
            <Body  className='p__info1' >Partnership</Body>
            <Body2 className='p__info2' >About Us</Body2>
            <Body2 className='p__info2' >Find store</Body2>
            <Body2 className='p__info2' >Catrgories</Body2>
            <Body2 className='p__info2' >Blogs</Body2>
        </StyleDataInfoServ>

        <StyleDataInfoServ >
            <Body  className='p__info1' >Information</Body>
            <Body2 className='p__info2' >Help Center</Body2>
            <Body2 className='p__info2' >Money Refund</Body2>
            <Body2 className='p__info2' >Shipping</Body2>
            <Body2 className='p__info2' >Contact us</Body2>
        </StyleDataInfoServ>

        <StyleDataInfoServ >
            <Body  className='p__info1' >For users</Body>
            <Body2 className='p__info2' >Login</Body2>
            <Body2 className='p__info2' >Register</Body2>
            <Body2 className='p__info2' >Settings</Body2>
            <Body2 className='p__info2' >My Orders</Body2>
        </StyleDataInfoServ>
          
        <StyleoStoreImge >
            <Body  className='p__info1' >For users</Body>
            <Image src={"/fotCooglePlay.svg"} alt='fotCooglePlay' width={123} height={42} /> 
            <Image src={"/fotAppStore.svg"} alt='fotAppStore' width={123} height={42} /> 
        </StyleoStoreImge> 

    </StyleMainFooterInfo>
  )
}

export default FooterInfo