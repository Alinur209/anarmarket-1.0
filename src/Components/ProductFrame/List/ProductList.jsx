import React,  {useEffect, useRef, useState} from 'react'
import styled, { css } from 'styled-components'
import ContentTemple from '../../../UI/ContentTemple'
import Flex from '../../../UI/Flex'
import { UnFound } from '../../../UI/UnFound'
import {useSelector} from 'react-redux'
import {Skeleton} from '@mui/material'
import {useDispatch} from 'react-redux'
import { getProduct, setProductLoadingTrue, setProductLoadingFalse } from '../../../Store/reducers/productReducer'
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../../utiles'
import { Loader } from '../../../UI/Loader'

export const ProductList = ({data, title}) => {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.products.isLoading)
  const page = useSelector(state => state.products.active.page)
  const hasNext = useSelector(state => state.products.active.has_next)
  const lastElement = useRef()
  const observer = useRef()
  const error = useSelector(state => state.products.error)
  const params = useSelector(state => state.products.params)
  // const [isFetching, setIsFetching ] = useState(false)

  useEffect(() => {
    if(isLoading) return
    if(observer.current) observer.current.disconnect()
    var options = {
      rootMargin: '0px 0px 150px 0px',
    }
    var callback = function(entries, observer) {
      if(entries[0].isIntersecting && hasNext) {
        let new_params = makeGoodParams([...params, 
          new ParamCreator("page", page + 1)
        ])
        dispatch(getProduct(titleConverterToItsPath(title), new_params))
      }
    }
    observer.current = new IntersectionObserver(callback, options)
    observer.current.observe(lastElement.current)

  }, [isLoading])


  return (
      <ContentTemple padding="10px 30px">
        <SProductList isEmptyData={!isLoading && !data.length}>
          {
              data.length ?
                data.map((item, index) =>
                    <ProductCard key={index}>
                      <CardTop>
                        <ProductPicture loading='lazy' src={"http://localhost:8000" + item.product_image}/>
                      </CardTop>
                      <CardBottom>
                        <CardTitle>{item.title.split('').slice(0, 20).join('')}{item.title.length >= 20 && "..."}</CardTitle>
                        <CardCost>{item.price} с/{item.measurment}</CardCost>
                      </CardBottom>
                    </ProductCard>  
                )
              :
                <UnFound />
          }
        </SProductList>
        {
           (isLoading && data.length) &&
            <Loader />
        }
        <div style={{height: "20px", width: "100%"}} ref={lastElement}></div>
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
`