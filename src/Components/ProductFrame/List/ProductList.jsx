import React,  {useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import ContentTemple from '../../../UI/ContentTemple'
import Flex from '../../../UI/Flex'
import { UnFound } from '../../../UI/UnFound'
import {useSelector} from 'react-redux'
import {Skeleton} from '@mui/material'
import {useDispatch} from 'react-redux'
import { getProduct, paginateProduct, setProductLoadingTrue, setProductLoadingFalse } from '../../../Store/reducers/productReducer'
import { titleConverterToItsPath } from '../../../utiles'
import { useSelect } from '@mui/base'
import { useGetParams } from '../../../hooks/useGetParams'

export const ProductList = ({data, title}) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.products.isLoading)
  const page = useSelector(state => state.products.active.page)
  const hasNext = useSelector(state => state.products.active.has_next)
  const lastElement = useRef()
  const observer = useRef()
  const params = useGetParams(() => page + 1) || []
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    if(isLoading) return
    if(observer.current) observer.current.disconnect()
    var callback = function(entries, observer) {
      if(entries[0].isIntersecting && hasNext) {
        dispatch(getProduct(titleConverterToItsPath(title), params))
      }
    }
    observer.current = new IntersectionObserver(callback)
    observer.current.observe(lastElement.current)

  }, [isLoading, page, hasNext, title, params])


  return (
      <ContentTemple padding="10px 30px">
        <SProductList loading={isLoading} isEmptyData={!isLoading && !data.length}>
          {
              data.length ?
                data.map((item, index) =>
                    <ProductCard key={index}>
                      <CardTop>
                        <ProductPicture src={"http://localhost:8000" + item.product_image}/>
                      </CardTop>
                      <CardBottom>
                        <CardTitle>{item.title}</CardTitle>
                        <CardCost>{item.price} с/{item.measurment}</CardCost>
                      </CardBottom>
                    </ProductCard>  
                )
              :
                <UnFound />
          }
        </SProductList>
        <div style={{height: "20px", width: "100%"}} ref={lastElement}></div>
        <h1>{error}</h1>
      </ContentTemple>
  )
}

const CardCost = styled.span`
  font-size: 22px;
  font-weight: bold;
`
const CardTitle = styled.h3`
  font-size: 16px;
  max-width: 80%;
  text-align:center;
`
const CardBottom = styled(Flex)`
  width: 100%;
  height: 40%;
  flex-direction:column;
  justify-content:space-between;
  align-items: center;
  padding: 10px 0;
`
const ProductPicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const CardTop = styled.div`
  width: 100%;
  height: 60%;
`
const ProductCard = styled.div`
  max-height: 200px;
  min-height: 200px;
  background: #fff; 
  cursor:pointer;
  border: none;
  border: 1px solid #fff;
  box-shadow: 0 0 5px #e3e3e3;
  &:hover {
    box-shadow: 0 0 15px #e3e3e3;
  }
`
const SProductList = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: ${props => props.isEmptyData ? '1fr': '1fr 1fr 1fr'};
  grid-gap: 10px;
  ${props => props.loading && css`
    opacity: 0.3
  `}
`