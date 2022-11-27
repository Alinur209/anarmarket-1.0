import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../../../UI/Flex'
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../../../utiles';
import { getFeaturedProduct } from '../../../../Store/reducers/productReducer';
import useMediaQuery from '../../../../hooks/useMediaQueryHook';

export const PriceFilter = ({max_price = 0, min_price = 0, data, title}) => {
    const loading = useSelector(state => state.products.isLoading)
    const dispatch = useDispatch()
    const [fromState, setFromState] = useState(0)
    const [toState, setToState] = useState(0)
    const middlePrice = useMemo(() => max_price ? Math.round(max_price / 2):0, [max_price])
    const params = useSelector(state => state.products.params)
    const isMatch = useMediaQuery("(max-width: 1180px)")

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
        if(params.some(item => item.type === "max_price")) {
            setToState(params.find(item => item.type === "max_price")["input"])
            setFromState(params.find(item => item.type === "min_price")["input"])
        }else {
            setToState(max_price)
            setFromState(min_price)
        }

    }, [max_price, min_price])
  
    return (
    <SPriceFilter>
            {!isMatch && <Flex width="100%" justify="space-between">
                <SliderTitle>Цена</SliderTitle>
                {
                    (title && (fromState !== min_price || toState !== max_price)) && <ResetBtn onClick={handleReset}><span>&times;</span>cбросить</ResetBtn>
                }
            </Flex>}
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
                    disabled={loading || !data.max_length}
            />
            {isMatch && title && (fromState !== min_price || toState !== max_price) &&
              <Flex width="100%" topLine align="center" justify="center">
                {
                    <ResetBtn onClick={handleReset}><span>&times;</span>cбросить</ResetBtn>
                }
              </Flex>   
            }
    </SPriceFilter>
  )
}


const SPriceFilter = styled(Flex)`
    position: sticky;
    top: 60px;
    width: 100%;
    padding-right: 30px;
    padding-top: 10px;
    flex-direction: column;
    @media (max-width: 1180px) {
        padding: 0;
    }
`
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