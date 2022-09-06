import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import useMediaQuery from '../../hooks/useMediaQueryHook'
import ContentTemple from '../../UI/ContentTemple'
import Flex from '../../UI/Flex'
import { Left } from './Left/Left'
import { Middle } from './Middle/Middle'

export const Header = () => {
    const isMatch = useMediaQuery("(max-width: 652px)")

  return (
    <Wrapper direction="column" width="100%">
        <SHeader>  
            <ContentTemple>
                <Content>
                    <Left />
                    {!isMatch && <Middle />}
                </Content>
            </ContentTemple>
        </SHeader>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
    height: 100px;
    @media (max-width: 1180px) {
        height: 70px;
    }
`
const Content = styled(Flex)`
    width: 100%;
    height: 100%;
    align-items:center;
    justify-content:space-between;
`
const SHeader = styled(Flex)`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
`