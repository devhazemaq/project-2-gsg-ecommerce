"use cleint"

import FlagsStatic from '../FlagsStatic';
import { StyledWraper } from './style';

const SelectForNavTwo = () => {
  return (
    <StyledWraper>
      <select name="hellp">
          <option value="hellp1">English, Usd </option>
          <option value="hellp2">Hazem, haz</option>
      </select>
      
      <FlagsStatic flagDirection="left" />

    </StyledWraper>
  )
}

export default SelectForNavTwo;