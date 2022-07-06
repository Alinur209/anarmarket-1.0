import React from 'react'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'
import ContentTemple from '../../UI/ContentTemple'

export const Meat = () => {
  const meat = useProductListHook("meat")

  return (
    <ContentTemple>
      <ProductFrame data={meat} title={"Мясо"}/>
    </ContentTemple>
  )
}

