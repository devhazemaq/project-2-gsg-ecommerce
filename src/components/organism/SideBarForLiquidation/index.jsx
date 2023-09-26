import ProductsBrands from '@/components/molecules/ProductsBrands'
import React from 'react'
import ProductsCondition from '@/components/molecules/ProductsCondition'
import ProductsFratures from '@/components/molecules/ProductsFratures'
import ProductsGategor from '@/components/molecules/ProductsGategor'
import ProductsRatings from '@/components/molecules/ProductsRatings'
import ProductsPriceRange from '@/components/molecules/ProductsPriceRange'

const SideBarForLiquidation = () => {
  return (
    <div>
      <ProductsGategor />
      <ProductsBrands />
      <ProductsFratures />
      <ProductsPriceRange/>
      <ProductsCondition /> 
      <ProductsRatings /> 
      

    </div>
  )
}

export default SideBarForLiquidation