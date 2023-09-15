import { Body2, Heading, SmallText } from '@/components/atoms/typography'
import Image from 'next/image'
import React from 'react'
import { FomatSuup, StyleMainByReg, StyleSuppliers } from './style'

const SuppliersByRegion = () => {
  return (
    <StyleMainByReg>
      <Heading>Suppliers by region</Heading>
      <FomatSuup>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/AE@2x.png"} alt='AE@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Arabic Emirates</Body2>
              <SmallText>shopname.ae</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/AU@2x.png"} alt='AU@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Australia</Body2>
              <SmallText>shopname.ae</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/US@2x.png"} alt='AE@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>United States</Body2>
              <SmallText>shopname.ae</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/RUSSIA@2x.png"} alt='RUSSIA@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Russia</Body2>
              <SmallText>shopname.ru</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/IT@2x.png"} alt='IT@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Italy</Body2>
              <SmallText>shopname.it</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/AE@2x.png"} alt='AE@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Arabic Emirates</Body2>
              <SmallText>shopname.ae</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/CN@2x.png"} alt='CN@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>China</Body2>
              <SmallText>shopname.ch</SmallText>
            </div>
          </div>
        </StyleSuppliers>
        <StyleSuppliers>
          <div className='suppliers__contain'>
            <Image src={"/GB@2x.png"} alt='GB@2x' width={28} height={20} />
            <div className="flag__info">
              <Body2>Great Britain</Body2>
              <SmallText>shopname.gb</SmallText>
            </div>
          </div>
        </StyleSuppliers>
      </FomatSuup>
    </StyleMainByReg>
  )
}

export default SuppliersByRegion