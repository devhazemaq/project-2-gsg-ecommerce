import Image from 'next/image'
import React from 'react'
import { StyledWreper } from './style'

const PaymentMethods = () => {
  return (
    <StyledWreper>
      <Image src={`/paymentAmericanExpress.svg`} alt='USAExpress' width= '34' height ='22' />
      <Image src={`/paymentMaster1.svg`} alt='Master' width= '34' height ='22' />
      <Image src={`/paymentPayPal1.svg`} alt='PayPal' width= '34' height ='22' />
      <Image src={`/paymentVisa1.svg`} alt='Visa' width= '34' height ='22' />
    </StyledWreper>
  )
}

export default PaymentMethods