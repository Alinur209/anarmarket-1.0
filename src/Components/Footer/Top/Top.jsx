import React from 'react'
import styled, { css } from 'styled-components'
import useMediaQuery from '../../../hooks/useMediaQueryHook'
import Flex from '../../../UI/Flex'
import { Logo } from '../../Logo/Logo'
import { Left } from './Left/Left'
import { Right } from './Right/Right'

export const Top = () => {
  const isMatch = useMediaQuery("(max-width: 1156px)")

  return (
    <STop isMatch={isMatch}>
        <Left />
        <Right />
    </STop>
  )
}

const STop = styled.div`
    width: 100%;
    display:grid;
    grid-template-columns:2fr 1fr;
    grid-gap: 15px;
    padding-bottom: 20px;

      @media(max-width: 1156px) {
        grid-template-columns: 1fr 1fr;
      }
      @media(max-width: 860px) {
        display:flex;
        flex-wrap: wrap;
      }
` 