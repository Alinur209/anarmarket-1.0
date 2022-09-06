import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import { ProductFrame } from '../../Components/ProductFrame/ProductFrame/ProductFrame'
import { getFeaturedProduct, getProduct, resetActiveProduct, setSearchedProduct } from '../../Store/reducers/productReducer'
import ContentTemple from '../../UI/ContentTemple'
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../utiles'

export const Search = () => {
    const searchedData = useSelector(state => state.products.active)
    const [searchQuery, setSearchQuery] = useSearchParams()
    const query = searchQuery.get("q") || ''
    const params = useSelector(state => state.products.params)
    const dispatch = useDispatch()

    useEffect(() => {
      let new_params = makeGoodParams([...params, new ParamCreator("search", query)].filter(item => item.type !== "max_price" && item.type !== "min_price" && item.type !== "page"))

      dispatch(getFeaturedProduct(titleConverterToItsPath('search'), new_params))

      return () => dispatch(resetActiveProduct())
    }, [query])

  return (
    <ContentTemple>
        <ProductFrame data={searchedData} title={"Поиск"} />
    </ContentTemple>
  )
}
