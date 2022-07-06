import React from 'react'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'

export const Drinks = () => {
  const drinks = useProductListHook("drinks")

  return (
    <ContentTemple>
      <ProductFrame
        data={drinks} 
        title={"Напитки"} 
      />
    </ContentTemple>
  )
}
