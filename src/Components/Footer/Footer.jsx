import { notification } from 'antd'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import useMediaQuery from '../../hooks/useMediaQueryHook'
import ContentTemple from '../../UI/ContentTemple'
import Flex from '../../UI/Flex'
import { Logo } from '../Logo/Logo'
import { Bottom } from './Bottom/Bottom'
import { Top } from './Top/Top'

export const Footer = () => {
  const isMatch = useMediaQuery("(max-width: 1156px)")


  return (
    <SFooter>
        <Content pt>
          <Top />
          <Bottom />
        </Content>
    </SFooter>
  )
}


const Content = styled(ContentTemple)`
  display:flex;
  flex-direction: column;
`
const SFooter = styled.footer`
  width: 100%;

  background: #334854;
`