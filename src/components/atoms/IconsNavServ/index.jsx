"use client"

import Image from 'next/image'
import React from 'react'
import { SmallText } from '../typography'
import { StyleFormatIcon } from './style'
import { StyledFlex } from '@/styles/common'

const IconsNavServ = () => {
  return (
    <StyledFlex>
      <StyleFormatIcon>
        <Image src={"/iconNavPerson.svg"} alt='iconNavPerson' width={24} height={24} />
        <SmallText>Profile</SmallText>
      </StyleFormatIcon>
      <StyleFormatIcon>
        <Image src={"/iconNavChat.svg"} alt='iconNavChat' width={24} height={24} />
        <SmallText>Message</SmallText>
      </StyleFormatIcon>
      <StyleFormatIcon>
        <Image src={"/iconNavfavorite.svg"} alt='iconNavfavorite' width={24} height={24} />
        <SmallText>Orders</SmallText>
      </StyleFormatIcon>
      <StyleFormatIcon>
        <Image src={"/iconNavShoppinCart.svg"} alt='iconNavShoppinCart' width={24} height={24} />
        <SmallText>Profile</SmallText>
      </StyleFormatIcon>
    </StyledFlex>
  )
}

export default IconsNavServ