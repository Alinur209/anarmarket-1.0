import React from 'react'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'

export const Fruits = () => {
  const Fruits = useProductListHook("fruits")

  return (
    <ContentTemple>
      <ProductFrame
        data={Fruits} 
        title={"Фрукты"} 
      />
    </ContentTemple>
    )
}
