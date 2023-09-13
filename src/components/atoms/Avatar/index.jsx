import Image from 'next/image'
import React from 'react'
import { StyledImage } from './style'

const Avatar = () => {
  return (
    <StyledImage>
      <Image src={"/HeroAvatar.jpg"} alt='HeroAvatar' className='hero__avatar' width={"44"} height={"44"} />
    </StyledImage>
  )
}

export default Avatar