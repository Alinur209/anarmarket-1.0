import React, {useEffect, useMemo, useState} from 'react'
import styled, { css } from 'styled-components'
import Flex from '../../UI/Flex'
import headerlogo from '../../Media/header-logo.svg'
import logo from '../../Media/logo.png'
import footerLogo from '../../Media/footer-logo.svg'
import { useNavigate } from 'react-router-dom'


export const Logo = ({text, width, footer}) => {
  const navigate = useNavigate()

  return (
    <SLogoContainer width={width} onClick={() => navigate("/")}> 
        {
          footer ?
           <SLogo src={footerLogo} />
          :
           <SLogo src={text ? headerlogo : logo} />
        }
    </SLogoContainer>
  )
}

const SLogo = styled.img`
    width: 100%;
    height: 100%;
`
const SLogoContainer = styled(Flex)`
    width: ${({width}) => width || "15rem"};
    gap: 10px;
    align-items:center;
    cursor:pointer;
`
