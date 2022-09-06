import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../../utiles';
import { getFeaturedProduct } from '../../../Store/reducers/productReducer';
import useMediaQuery from '../../../hooks/useMediaQueryHook';
import filter_logo from '../../../Media/ProductFrame/filter.png'

export const FrameHeader = ({title, dataLength}) => {
    const [quanity, setQuanity] = useState("   ")
    const [selectValue, setSelectValue] = useState("default")
    const loading = useSelector(state => state.products.isLoading)
    const dispatch = useDispatch()
    const params = useSelector(state => state.products.params)
    const isMatch = useMediaQuery("(max-width: 1180px)")
    const [open, setOpen] = useState(false)
    const isTablet = useMediaQuery("(max-width: 769px)")
    const minFormWidth = isTablet ? 200:220

    useEffect(() => {
        setQuanity(dataLength)
    }, [dataLength])

    const handleSelectChange = e => {
        const selected = e.target.value
        setSelectValue(selected)

        let new_params = makeGoodParams([...params, 
            new ParamCreator("sort", e.target.value)].filter(item => item.type !== "page"))

        dispatch(getFeaturedProduct(titleConverterToItsPath(title), new_params))
    } 

  return (
    <SFrameHeader>
            <HeaderLeft>
                <Title>{title} {!(loading || !dataLength) && <Quanity>({quanity})</Quanity>}</Title>
            </HeaderLeft>
            <HeaderRight>
                <Sorting>
                {!isMatch && <SortTitle>Сортировать:</SortTitle>}
                    <FormControl disabled={loading || !dataLength} sx={{ m: 1, minWidth: minFormWidth, maxWidth: 500 }}>
                        <Select
                            value={selectValue}
                            onChange={handleSelectChange}
                            displayEmpty
                            size='small'
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={'default'}>По умолчанию</MenuItem>
                            <MenuItem value={'price-high'}>По цене (Возрастание)</MenuItem>
                            <MenuItem value={'price-low'}>По цене (Убывание)</MenuItem>
                        </Select>
                    </FormControl>
                </Sorting>
            </HeaderRight>
            {
                isMatch && 
                    <>
                        Цена: 
                    </>
            }
    </SFrameHeader>
  )
}

const SortTitle = styled.span`
    font-size: 16px;
    font-weight: bold;

    @media(max-width: 769px) {
        font-size: 14px;
    }
`
const Sorting = styled(Flex)`
    gap: 5px;
    align-items:center;
`
const HeaderLeft = styled(Flex)`
    height: 100%;
    align-items:center;
`
const HeaderRight = styled(Flex)`
    align-items: center;
    height: 100%;
`
const Quanity = styled.span`
    opacity: 0.7
`
const Title = styled.h3`
    margin: 0;
    font-size: 24px;
    display:flex;
    gap: 10px;
    @media(max-width: 1180px) {
        font-size: 20px;

    }
`

const SFrameHeader = styled.div`
    width: 100%;
    overflow-x:scroll;
    height: 70px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #EFECEA;

`