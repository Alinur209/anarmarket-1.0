import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import ContentTemple from '../../UI/ContentTemple'
import Flex from '../../UI/Flex'
import { Left } from './Left/Left'
import { Middle } from './Middle/Middle'

export const Header = () => {

  return (
    <Flex direction="column" width="100%" height="100px">
        <SHeader>  
            <ContentTemple>
                <Content>
                    <Left />
                    <Middle />
                </Content>
            </ContentTemple>
        </SHeader>
    </Flex>
  )
}

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