import React from 'react'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'

export const Greens = () => {
  const greens = useProductListHook("greens")

  return (
    <ContentTemple>
      <ProductFrame
        data={greens} 
        title={"Зелень"} 
      />
    </ContentTemple>
  )
}
