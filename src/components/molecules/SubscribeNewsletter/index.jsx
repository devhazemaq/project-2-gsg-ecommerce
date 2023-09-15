

import { Body2, TitleH4 } from '@/components/atoms/typography'
import React from 'react'
import { StyleMainSubsc } from './style'
import BtnSubmit from '@/components/atoms/BtnSubmit'
import { theme } from '@/styles/theme'
import CusttomButton from '@/components/atoms/CustomButton'

const SubscribeNewsletter = () => {
  return (
    <StyleMainSubsc>
      <div>
        <TitleH4>Subscribe on our newsletter</TitleH4>
        <Body2>Get daily news on upcoming offers from many suppliers all over the world</Body2>
      </div>
      <div className="for__field__cntain">
        <div className='emil__input_andcom'>
          <img src="/email.svg" alt="email" className='icon__email' />
          
          <input 
            type='email'
            placeholder='Email'
          />
        </div>

        <CusttomButton btnColor={"blueSizeBig"} btnText='Subscribe' />
      </div>
      
    </StyleMainSubsc>
  )
}

export default SubscribeNewsletter