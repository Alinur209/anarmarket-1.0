import React from 'react'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'

export const Grocery = () => {
  const grocery = useProductListHook("grocery")

  return (
    <ContentTemple>
      <ProductFrame 
        data={grocery} 
        title={"Бакалея"} 
      />
    </ContentTemple>
  )
}
