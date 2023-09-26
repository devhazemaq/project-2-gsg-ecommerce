"use client"

import React from 'react'
import TitleOfSection from '@/components/atoms/TitleOfSection';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import BtnSubmit from '@/components/atoms/BtnSubmit';

import { StyledFormLogin, StyledWrapper, StyledWrapperLogin } from './style'
import { Body } from '@/components/atoms/typography';
import OrSapatate from '@/components/atoms/OrSeparate';
import RegistrationMethodByGoogleOrFace from '@/components/atoms/RegistrationMethodByGoogleOrFace';
import { theme } from '@/styles/theme';
import InformationForLoginAndRegister from '@/components/atoms/InformationForLoginAndRegister';
import FooterForLogin from '@/components/molecules/FooterForLogin';

const LoginPage = () => {

  const formSchema = yup.object().shape({
    userName: yup.string().required("This is Required!"),
    password: yup.string().min(4).max(16).required("Password is Required!"),
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }
  
  // const handelChechedInput = (e) => {
  //   console.log(e);
  //   const checked  = e.target.checked;
  // }

  return (
    <StyledWrapper>


      <StyledWrapperLogin>
        <TitleOfSection textTitle={"Sign in"} />
        <StyledFormLogin onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="loginNameUser">UserName</label>
          <input type="text" placeholder='Email or phone' name='loginNameUser'  {...register('userName')} />
          <Body className="error__prah" >{errors.userName?.message}</Body>

          <label htmlFor="loginPassword">Password</label>
          <input type="password" placeholder='Type here'  name='loginPassword' {...register('password')} />
          <Body className="error__prah" >{errors.password?.message}</Body>

          <div className='for__chech__login'>
            <input 
              className='check__Login' 
              type="checkbox"  
              name='loginCheckbox'
              // onChange={handelChechedInput}
              
            />
            <label htmlFor="loginCheckbox" className='check__login__lable' >RemberMe</label>
            {/* <span>Rember me</span> */}
          </div>

          {/* <input type="submit" /> */}
          <BtnSubmit colorSubmitText={theme.colors.colorDarkBlue} btnSubmitText={"Login In"}   />
        </StyledFormLogin>

        <OrSapatate OrSapatate={"yes"}/>

        <RegistrationMethodByGoogleOrFace  regby="google"  />
        <RegistrationMethodByGoogleOrFace  regby="facebook"  />
        
        <InformationForLoginAndRegister  textOne={"Don't hace an account?"} textTwoBlue={"Register now"}/>

      </StyledWrapperLogin>

      <FooterForLogin />
    </StyledWrapper>
  )
}

export default LoginPage;