import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Flex from './Flex';

export const Loader = ({size = "large", type, SkeletonComponent}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 48 }} spin />
    
  return (
      <Wrapper>
        <SLoader indicator={antIcon} size={size}/>
      </Wrapper>
  )
}

const Wrapper = styled(Flex)`
    width: 100%;
    height: 100px;
    justify-content:center;
    align-items:center;
`
const SLoader = styled(Spin)`
    color: #334854;
`

