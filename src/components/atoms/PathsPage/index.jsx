"use client"

import { Body2 } from '../typography'
import Image from 'next/image'
import { StyleMainPathsPage } from './style'

const PathsPage = () => {
  return (
    <StyleMainPathsPage>

      <Body2>Home</Body2>
      <Image src={"/arowRight.svg"} alt='arowRight' width={20} height={20} />
      
      <Body2>Clothings</Body2>
      <Image src={"/arowRight.svg"} alt='arowRight' width={20} height={20} />
      
      <Body2>Men’s wear</Body2>
      <Image src={"/arowRight.svg"} alt='arowRight' width={20} height={20} />
      
      <Body2>Summer clothing</Body2>

    </StyleMainPathsPage>
  )
}

export default PathsPage