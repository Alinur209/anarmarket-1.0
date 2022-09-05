import React from 'react'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'

export const Vegetables = () => {
  const vegetables = useProductListHook("vegetables")
  
  return (
    <ContentTemple>
      <ProductFrame data={vegetables} title={"Овощи"} />
    </ContentTemple>
  )
}
