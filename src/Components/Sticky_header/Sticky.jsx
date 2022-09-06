import React, { useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import useMediaQuery from '../../hooks/useMediaQueryHook'
import ContentTemple from '../../UI/ContentTemple'
import Flex from '../../UI/Flex'
import { NavList } from './NavList/NavList'
import Search from './Search/Search'
import logo from '../../Media/logo.png'
import { Logo } from '../Logo/Logo'

export const Sticky = () => {
  const [active, setActive] = useState(false)
  const isMatch = useMediaQuery("(max-width: 652px)")

  window.addEventListener("scroll", () => {
    const scrollPost = window.scrollY
    if(isMatch) {
      setActive(Boolean(scrollPost >= 60)) 
    }else {
      setActive(Boolean(scrollPost >= 100)) 
    }
  })

  return (
    <SSticky active={active} >
        <ContentTemple>
          <Content>
            <Search />
            {isMatch && <Logo text width={"165px"}/>}
            <NavList /> 
          </Content>
        </ContentTemple>
    </SSticky>  
  )
}

const Content = styled(Flex)`
  width: 100%;  
  height: 100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const SSticky = styled.div`
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 10;
  width: 100%;
  height: 60px;
  justify-content:space-between;
  align-items: center;
  @media(max-width: 652px) {
    border-bottom: 1px solid #e3e3e3;
    ${props => props.active && css`
      box-shadow: 0 0 10px #e3e3e3;
      border:none;
    `};
  }
  ${props => props.active && css`
      box-shadow: 0 0 10px #e3e3e3;
      border:none;
  `};
`