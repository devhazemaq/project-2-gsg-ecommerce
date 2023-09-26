import { BigHeading, Body, SmallText, TitleH4 } from '@/components/atoms/typography'
import { StyledHeading, StyledQuateMain } from './style'
import BtnSubmit from '@/components/atoms/BtnSubmit'
import { theme } from '@/styles/theme'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const QuoteForSuppliers = () => {

  const formSchema = yup.object().shape({
    whatNeed: yup.string().required("*This is Required!"),
    quantiy: yup.string().required("*Quantiy is Required!"),
  })

  
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <StyledQuateMain>

      <img src="/sec6Quote.png" alt="sec6Quote" />

      <StyledHeading>
        {/* for heading  StyledHeading => div  */}
        
        <BigHeading className='for__big__heading' >An easy way to send</BigHeading>
        <BigHeading className='for__big__heading' >requests to all suppliers</BigHeading>
        
        <SmallText className='for__span__heading'>Lorem ipsum dolor sit amet, consectetur adipisicing</SmallText>
        <SmallText>elit, sed do eiusmod tempor incididunt.</SmallText>
      
      </StyledHeading> 

      <form onSubmit={handleSubmit(onSubmit)} className='form__main' >
        <TitleH4>Send quote to suppliers</TitleH4>
        <input
          type='text'
          placeholder='What item you need?'
          {...register('whatNeed')}
        />
        <Body className="error__prah" >{errors.whatNeed?.message}</Body>

        <textarea name="message" rows="4" cols="50" placeholder="Type more details" /> 
        
        <div className='contain__filds__Quantiy__select'>
          <input
            type='divtext'
            placeholder='Quantiy'
            {...register('quantiy')}
          />
          <select name="" id="">
            <option value="value1">Pcs</option>
            <option value="value2">7az</option>
            <option value="value3">7az</option>
          </select>
        </div>
        <Body className="error__prah" >{errors.quantiy?.message}</Body>

        
        <BtnSubmit colorSubmitText={theme.colors.colorDarkBlue} btnSubmitText={"Send inquiry"}   />
        

      </form>


    </StyledQuateMain>
  )
}

export default QuoteForSuppliers

