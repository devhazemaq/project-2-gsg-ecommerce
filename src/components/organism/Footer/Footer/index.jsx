import React from 'react'
import { StyleMainFooter } from './style'
import FlagsStatic from '@/components/atoms/FlagsStatic'

const Footer = () => {
  return (
    <StyleMainFooter>
      <div>© 2023 Ecommerce <strong>devhazemaq</strong>. </div>
        
      <FlagsStatic/>
    </StyleMainFooter>
  )
}

export default Footer