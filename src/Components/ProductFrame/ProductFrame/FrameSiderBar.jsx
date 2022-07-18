import React, { useMemo, useState, useEffect } from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import Slider from '@mui/material/Slider';
import { useSelector } from 'react-redux'
import {useDispatch} from 'react-redux'
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../../utiles';
import { getFeaturedProduct, getProduct } from '../../../Store/reducers/productReducer';
import { useSearchParams } from 'react-router-dom';

export const FrameSiderBar = ({max_price, min_price, dataLength, title}) => {
    const loading = useSelector(state => state.products.isLoading)
    const dispatch = useDispatch()
    const [fromState, setFromState] = useState(0)
    const [toState, setToState] = useState(0)
    const middlePrice = useMemo(() => max_price ? Math.round(max_price / 2):'', [max_price])
    const params = useSelector(state => state.products.params)
    const [searchParams] = useSearchParams()
    const searchQuery = searchParams.get("q")
    
    const onSliderChange = e => {   
        setToState(e.target.value[1])
        setFromState(e.target.value[0])
        
    }

    const handleAfterChange = () => {
        let new_params = makeGoodParams([...params, 
            new ParamCreator("min_price", fromState),  
            new ParamCreator("max_price", toState 
        )].filter(item => item.type !== "page")) 

        dispatch(getFeaturedProduct(titleConverterToItsPath(title), new_params))
    }
    
    const handleReset = () => {
        let new_params = makeGoodParams([...params].filter(item => item.type !== "max_price" && item.type !== "min_price"))
        dispatch(getFeaturedProduct(titleConverterToItsPath(title), new_params))
        setToState(max_price)
        setFromState(min_price)
    }

    useEffect(() => {
        setToState(max_price)
        setFromState(min_price)
    }, [max_price, min_price])

  return (
    <SFrameSiderBar>
        <Wrapper>
            <Flex width="100%" justify="space-between">
                <SliderTitle>Цена</SliderTitle>
                {
                    (title && (fromState !== min_price || toState !== max_price)) && <ResetBtn onClick={handleReset}><span>&times;</span>cбросить</ResetBtn>
                }
            </Flex>
            <SliderAreaLabels>  
                <Label>{fromState} - {toState}+</Label>
            </SliderAreaLabels>
            <SliderBars>
                <ConfigurePrice>{min_price}</ConfigurePrice>
                <ConfigurePrice>{middlePrice}</ConfigurePrice>
                <ConfigurePrice>{max_price}</ConfigurePrice>
            </SliderBars>
            <Slider 
                    key={`slider-${title}`}
                    min={min_price}
                    max={max_price}    
                    value={[fromState, toState]}
                    onChange={onSliderChange}
                    onChangeCommitted={handleAfterChange}
                    disabled={loading || !dataLength}
            />
        </Wrapper>
    </SFrameSiderBar>
  )
}

const ResetBtn = styled.button`
    font-size: 16px;
    color: #000;
    background: none;
    border: none;
    opacity: 0.7;
    cursor:pointer;
    display:flex;
    cursor:pointer;
    align-items:center;
    gap: 5px;
    span {
        font-size: 24px;
    }
`
const Label = styled.h3`
    margin: 0;
    font-size: 22px;
    font-weight: bold;
`
const SliderAreaLabels = styled(Flex)`
    width: 100%;
    padding: 10px 0;
    justify-content:center;
    align-items: center;
`
const ConfigurePrice = styled.span`
    font-size: 16px;
`
const SliderBars = styled(Flex)`
    width: 100%;
    justify-content:space-between
`
const SliderTitle = styled.span`
    font-size: 20px;
    padding-bottom: 15px;
    font-weight: bold;
`
const Wrapper = styled(Flex)`
    position: sticky;
    top: 60px;
    width: 100%;
    padding-right: 30px;
    padding-top: 10px;
    flex-direction: column;
`
const SFrameSiderBar = styled(Flex)`
    position: relative;
    width: 100%;
    flex-direction: column;
    max-width: 100%;
    border-right: 1px solid #EFECEA;
    min-height: 400px;
`