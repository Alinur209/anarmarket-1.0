import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import { getProduct, resetActiveProduct, setSearchedProduct } from '../../Store/reducers/productReducer'
import ContentTemple from '../../UI/ContentTemple'
import { titleConverterToItsPath } from '../../utiles'
import {useGetParams} from '../../hooks/useGetParams'

export const Search = () => {
    const searchedData = useSelector(state => state.products.active)
    const query = useGetParams().find(item => item.type === "search")?.input || ''
    // const params = useGetParams()
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(setSearchedProduct('products'))
      return () => dispatch(resetActiveProduct(titleConverterToItsPath("search", "ru")))
    }, [query])

  return (
    <ContentTemple>
        <ProductFrame data={searchedData} title={"Поиск"} />
    </ContentTemple>
  )
}
