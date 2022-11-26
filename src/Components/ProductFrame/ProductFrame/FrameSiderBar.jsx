import React from 'react'
import styled, { css } from 'styled-components'
import Flex from '../../../UI/Flex'
import { useSelector } from 'react-redux'
import { PriceFilter } from './Filters/PriceFilter'

export const FrameSiderBar = (props) => {
const loading = useSelector(state => state.products.isLoading)
   
  return (
    <SFrameSiderBar loading={loading}>
        <PriceFilter {...props} />
    </SFrameSiderBar>
  )
}

const SFrameSiderBar = styled(Flex)`
    position: relative;
    width: 100%;
    flex-direction: column;
    max-width: 100%;
    border-right: 1px solid #EFECEA;
    min-height: 400px;

    ${props => props.loading && css`
        opacity: 0.7
    `}
`