import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import { Logo } from '../../Logo/Logo'
import { Left } from './Left/Left'
import { Right } from './Right/Right'

export const Top = () => {
  return (
    <STop>
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
`