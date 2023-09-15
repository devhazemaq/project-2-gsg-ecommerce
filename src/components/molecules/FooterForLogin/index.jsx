import AccessMethods from '@/components/atoms/AccessMethods'
import PaymentMethods from '@/components/atoms/PaymentMethods'
import React from 'react'
import { StyledFooter } from './style'


const FooterForLogin = () => {
  return (
    <StyledFooter>
      <PaymentMethods/>
      <AccessMethods />
    </StyledFooter>
  )
}

export default FooterForLogin

