import React from 'react'
import styled from 'styled-components'
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const Loader = ({size = "meduim", type}) => {
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    if(type === "full") {
        return (
            <FullLoader>
                <Overlay></Overlay>
                <SpinnterWrapper>
                    <Spinner indicator={antIcon} />
                </SpinnterWrapper>
            </FullLoader>
        )
    }
  return (
    <SLoader size={size} >Loader</SLoader>
  )
}

const SpinnterWrapper = styled.div`
    border-radius: 5px;
    width: 200px;
    height: 200px;
    background: #fff
`
const Spinner = styled(Spin)`
    color: #000;
    span {
        font-size: 48px !important;
    }
`
const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    filter: blur(4px);
`
const FullLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    justify-content:center;
    align-items:center;
    z-index: 999;
`
const SLoader = styled.div`

`