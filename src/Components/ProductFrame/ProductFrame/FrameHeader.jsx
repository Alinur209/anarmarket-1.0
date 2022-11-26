import React, {useEffect, useState} from 'react'
import styled, {css} from 'styled-components'
import Flex from '../../../UI/Flex';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { makeGoodParams, ParamCreator, titleConverterToItsPath } from '../../../utiles';
import { getFeaturedProduct } from '../../../Store/reducers/productReducer';
import useMediaQuery from '../../../hooks/useMediaQueryHook';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { PriceFilter } from './Filters/PriceFilter';


export const FrameHeader = ({title, data}) => {
    const [quanity, setQuanity] = useState("   ")
    const [selectValue, setSelectValue] = useState("default")
    const loading = useSelector(state => state.products.isLoading)
    const dispatch = useDispatch()
    const params = useSelector(state => state.products.params)
    const isMatch = useMediaQuery("(max-width: 1180px)")
    const isTablet = useMediaQuery("(max-width: 769px)")
    const minFormWidth = isTablet ? 200:220
    const max_price = data.max_price
    const min_price = data.min_price

    useEffect(() => {
        
    }, [params])

    useEffect(() => {
        setQuanity(data.max_length)
    }, [data.max_length])

    const handleSelectChange = e => {
        const selected = e.target.value
        setSelectValue(selected)

        let new_params = makeGoodParams([...params, 
            new ParamCreator("sort", e.target.value)].filter(item => item.type !== "page"))

        dispatch(getFeaturedProduct(titleConverterToItsPath(title), new_params))
    } 

  return (
    <SFrameHeader isMatch={isMatch}>
            <HeaderLeft>
                <Title>{title} {!(loading || !data.max_length) && <Quanity>({quanity})</Quanity>}</Title>
            </HeaderLeft>
            <HeaderRight isMatch={isMatch}>
                {
                    isMatch && 
                    <FormControl disabled={loading || !data.max_length} sx={{ m: 1, minWidth: 'auto', maxWidth: minFormWidth }}>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                        {(popupState) => (
                            <div>
                                <PopUpBtn {...bindTrigger(popupState)}>
                                    <span>Цена</span>
                                    <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-hfutr2-MuiSvgIcon-root-MuiSelect-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ArrowDropDownIcon"><path d="M7 10l5 5 5-5z"></path></svg>
                                </PopUpBtn>
                            <Popover
                                {...bindPopover(popupState)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Flex width="220px" padding="15px">
                                    <PriceFilter max_price={max_price} min_price={min_price} data={data} title={title}  />
                                </Flex>
                            </Popover>                                            
                            </div>
                        )}
                        </PopupState>
                    </FormControl>
                }
                <Sorting>
                {!isTablet && <SortTitle>Сортировать:</SortTitle>}
                    <FormControl disabled={loading || !data.max_length} sx={{ m: 1, minWidth: minFormWidth, maxWidth: 500 }}>
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

const PopUpBtn = styled.button`
    width: 100px;
    background-color: #fff;
    border-radius:5px;
    border: 1px solid #000;
    color: #000;
    box-shadow: none; 
    font-size: 16px;
    font-family: Ununtu, sans-serif;
    text-transform: none;
    padding: 7.5px 14px;
    text-align:left;
    padding-left:14px;
`
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
    height: 100%;
    align-items: center;

    ${props => props.isMatch && css`
        width: 100%;
        justify-content: space-between;
    `}
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

    ${props => props.isMatch && css`
        display:grid;
        grid-template-columns: 1fr 3fr;
    `}
`