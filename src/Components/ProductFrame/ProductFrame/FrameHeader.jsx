import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { makeGoodParams, titleConverterToItsPath } from '../../../utiles';
import { getProduct } from '../../../Store/reducers/productReducer';
import { ParamCreator, useAddParams, useGetParams } from '../../../hooks/useGetParams';

export const FrameHeader = ({title, dataLength}) => {
    const [selectValue, setSelectValue] = useState('default')
    const loading = useSelector(state => state.products.isLoading)
    const dispatch = useDispatch()
    const params = useGetParams()
    const addParams = useAddParams()


    const handleSelectChange = e => {
        const selected = e.target.value
        setSelectValue(selected)
        addParams([new ParamCreator("sort", selected)])
        dispatch(getProduct(title !== "Поиск" ? titleConverterToItsPath(title) : "products", params))
    } 

  return (
    <SFrameHeader>
            <HeaderLeft>
                <Title>{title} {!(loading || !dataLength) && <Quanity>({dataLength})</Quanity>}</Title>
            </HeaderLeft>
            <HeaderRight>
                <Sorting>
                <SortTitle>Сортировать:</SortTitle>
                    <FormControl disabled={loading} sx={{ m: 1, minWidth: 220 }}>
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
    </SFrameHeader>
  )
}

const SortTitle = styled.span`
    font-size: 16px;
    font-weight: bold;
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
    width: 100%;
    height: 100%;
    justify-content:flex-end
`
const Quanity = styled.span`
    opacity: 0.7
`
const Title = styled.h3`
    margin: 0;
    font-size: 24px;
`

const SFrameHeader = styled.div`
    width: 100%;
    height: 70px;
    display:grid;
    align-items: center;
    grid-template-columns: 1fr 3fr;
    border-bottom: 1px solid #EFECEA;
`