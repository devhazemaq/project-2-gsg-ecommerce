"use client"

import { Body2 } from '@/components/atoms/typography'
import { StyleMainCartCoupon } from './style'
import CusttomButton from '@/components/atoms/CustomButton'

const CartCoupon = () => {
  return (
    <StyleMainCartCoupon>
      <Body2>Have a coupon?</Body2>
      <div className="input__aplly__contain">
        <input type='text' placeholder='Add Coupon'/>
        <CusttomButton btnColor={"wihte85"} btnText='Apply'  />
      </div>
    </StyleMainCartCoupon>
  )
}

export default CartCoupon