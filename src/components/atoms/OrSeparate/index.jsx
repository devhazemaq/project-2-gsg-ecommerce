import React from 'react'
import { SmallText } from '../typography'
import { StyledWraper } from './style'

const OrSapatate = ({OrSapatate}) => {
  return (
    <StyledWraper>
      {OrSapatate === 'yes' ?
        <>
          <span className='span__1' ></span>
          <SmallText>OR</SmallText>
          <span className='span__2' ></span>
        </>
        :
          <>
            <span className='street__line'></span>
          </>
      }
      
    </StyledWraper>
  )
}

export default OrSapatate