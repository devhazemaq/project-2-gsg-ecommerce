import { Heading } from '@/components/atoms/typography'
import { StyledCardServType } from './style'
import CusttomButton from '@/components/atoms/CustomButton'

const CardServType = ( {cardSrc, cardText1, cardText2, cardText3}) => {
  return (
    <StyledCardServType >

        <img src={cardSrc} alt="sec4Outddoor"  />

        <div className='contain__body'>
          <Heading>{cardText1}</Heading>
          <Heading>{cardText2}</Heading>
          {cardText3 ? <Heading>{cardText3}</Heading> : <></> }
          <div className='btn__contain'>
            <CusttomButton btnColor={"whiteSizeBig"} btnText='Source' className='btn__card__serv' />
          </div>
        </div>
      
    </StyledCardServType>
  )
}

export default CardServType

// homeoutdoor
// consumer