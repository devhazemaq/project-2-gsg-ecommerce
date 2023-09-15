import React from 'react'
import { WraperPaper } from './style'
import { Body2 } from '../typography'

const Paper = ({papercolor, paperText1, paperText2, paperText3}) => {
  return (
    <WraperPaper $papercolor={papercolor}>
      <Body2 className='paper__body'>{paperText1}</Body2>
      <Body2 className='paper__body'>{paperText2}</Body2>
      <Body2 className='paper__body'>{paperText3}</Body2>
    </WraperPaper>
  )
}

export default Paper

// papercolor:
//   orange => colorPaperOrangeBrightOrange
//   turquoise => colorPaperTurquoise
