'use client'

import Image from "next/image"
import { StyledWraper } from "./style"
import { Body } from "../typography"

const RegistrationMethodByGoogleOrFace = ({regby}) => {
  return (

    
    <StyledWraper $regby={regby}  >
      { regby === 'google' ? 
        <>
          <Image src={`/sochGogole.png`} alt="sochGogole" className="logo__image logo__gogo" width="22" height="22" />
          <Body className="body__btn__reg" >Continue with Google</Body>
        </>
        :
        <> 
          <Image src={`/sochFaceBook.png`} alt="sochFaceBook" className="logo__image" width="22" height="22" />
          <Body className="body__btn__reg">Continue with Facebook </Body>
        </>
      }
      
    </StyledWraper>
  )
}

export default RegistrationMethodByGoogleOrFace