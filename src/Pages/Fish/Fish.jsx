import React from 'react'
import ContentTemple from '../../UI/ContentTemple'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import useProductListHook from '../../hooks/useProductListHook'


export const Fish = () => {
  const fish = useProductListHook("fish")

  return (
    <ContentTemple>
       <ProductFrame
          data={fish} 
          title={"Рыба"} 
      />
    </ContentTemple>
  )
}
