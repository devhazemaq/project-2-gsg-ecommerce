import React from 'react'
import { Body } from '../typography'
import { StyledFlags } from './style'

const FlagsStatic = ({flagDirection}) => {
  return (
    <StyledFlags>
      {flagDirection === "left" ?
      <>
        <Body>Ship to</Body>
        <img src="/iconNav2German.png" alt="Flag Voto"/>
        <img src="/iconNav2AroowBelow.svg" alt="iconNav2AroowBelow" />
      </>
      :
      <>
        <img src="/US@2x.png" alt="Flag Voto"/>
        <Body>Ship to</Body>
        <img src="/iconNav2AroowBelow.svg" alt="iconNav2AroowBelow" />
      </>
    }
      
    </StyledFlags>
  )
}

export default FlagsStatic;

{/* <StyledFlags>
      <Body>Ship to</Body>
      <img src="iconNav2German.png" alt="iconNav2German"/>
      <img src="iconNav2AroowBelow.svg" alt="iconNav2AroowBelow" />
    </StyledFlags> */}