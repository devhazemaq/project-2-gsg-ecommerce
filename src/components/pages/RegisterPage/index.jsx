"use client"

import React from 'react'
import { StyledWrapper, StyledWrapperLogin } from '../LoginPage/style'
import TitleOfSection from '@/components/atoms/TitleOfSection'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Body } from '@/components/atoms/typography'
import BtnSubmit from '@/components/atoms/BtnSubmit'
import { theme } from '@/styles/theme'
import { StyledFormRegster, StyledField, FormatStyledField, FormatStyledCheck } from './style'
import InformationForLoginAndRegister from '@/components/atoms/InformationForLoginAndRegister'
import OrSapatate from '@/components/atoms/OrSeparate'
import FooterForLogin from '@/components/molecules/FooterForLogin'

const RegisterPage = () => {

  const formSchema = yup.object().shape({
    regsName: yup.string().required('Filed is required!'),
    regsSuName: yup.string().required('Filed is required!'),
    regsEmail: yup.string().email().required('Write your email'),
    regsPhone: yup.string().required('Write your phone'),
    password: yup.string().min(6).max(16).required("Password is Required!"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null] ,"Password Don't Match").required(),
    regsCheckbox: yup.boolean().oneOf([true],"You must accept the terms and conditions")
  });


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }



  return (
    <StyledWrapper>
      
      <StyledWrapperLogin>
        <TitleOfSection textTitle={"Register"} />
        
        <StyledFormRegster onSubmit={handleSubmit(onSubmit)} >

          <FormatStyledField>
            <StyledField>
              <label htmlFor="regsName">Name</label>
              <input 
                type="text" 
                placeholder='Type here' 
                name='regsName'
                {...register('regsName')}
                className='regsName'
              />
              <Body className="error__prah" >{errors.regsName?.message}</Body>
            </StyledField>
                
            <StyledField>
              <label htmlFor="regsSuName">SuName</label>
              <input 
                type="text" 
                placeholder='Type here' 
                name='regsSuName'
                {...register('regsSuName')}
                className='regsSuName'
              />
              <Body className="error__prah" >{errors.regsSuName?.message}</Body>
            </StyledField>    
          </FormatStyledField>

          <label htmlFor="regsEmail">Your e-mail </label>
          <input 
            type="email" 
            placeholder='example@mail.com' 
            name='regsEmail'
            {...register('regsEmail')}
            className='regsEmail'
          />
          <Body className="error__prah" >{errors.regsEmail?.message}</Body>

          <label htmlFor="regsEmail">Phone</label>
          <input 
            type="text" 
            placeholder='059-000-0000' 
            name='regsPhone'
            {...register('regsPhone')}
            className='regsPhone'
          />
          <Body className="error__prah" >{errors.regsPhone?.message}</Body>


          <input type="password" placeholder='At least 6 characters.' {...register('password')} />
          <Body className="error__prah" >{errors.password?.message}</Body>
          <input type="password" placeholder='Type here' {...register('confirmPassword')} />
          <Body  className="error__prah">{errors.confirmPassword?.message}</Body>

          <BtnSubmit colorSubmitText={theme.colors.colorDarkBlue} btnSubmitText={"Register now"}   />
          
          <FormatStyledCheck>
            <input 
              type="checkbox" 
              {...register('regsCheckbox')} 
              className='regs__checkbox'
            />
            <InformationForLoginAndRegister textOne={"I agree with"} textTwoBlue={"Termes and Conditions"} />
            
          </FormatStyledCheck>
          <Body  className="error__prah">{errors.regsCheckbox?.message}</Body>
          
        </StyledFormRegster>

        <OrSapatate />

        <InformationForLoginAndRegister  textOne={"Already have an accaunt? Logn in"} textTwoBlue={"Logn in"}/>

      </StyledWrapperLogin>
      
      <FooterForLogin />
    </StyledWrapper>
  )
}

export default RegisterPage