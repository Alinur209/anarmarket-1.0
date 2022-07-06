import React, { useMemo, useRef } from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import { UnFound } from '../../../UI/UnFound'
import { ProductList } from '../List/ProductList'
import { FrameHeader } from './FrameHeader'
import { FrameSiderBar } from './FrameSiderBar'


export const ProductFrame = ({data, title}) => {

  return (
    <SProductFrame>
        <FrameHeader title={title} dataLength={data.max_length} />
        <Grid>
            <FrameSiderBar dataLength={data.max_length} max_price={data.max_price} title={title} />
            {
              data.list && (
              <ProductList title={title} data={data.list} />
            )
            }
        </Grid> 
    </SProductFrame>
  )
}

const Grid = styled.div`    
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
`
const SProductFrame = styled(Flex)`
    width: 100%;
    flex-direction: column;
`