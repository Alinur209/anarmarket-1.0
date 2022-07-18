import { notification } from 'antd'
import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import ContentTemple from '../../UI/ContentTemple'
import Flex from '../../UI/Flex'
import { Logo } from '../Logo/Logo'
import { Bottom } from './Bottom/Bottom'
import { Top } from './Top/Top'

export const Footer = () => {


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
  max-height: 500px;
  background: #334854;
`