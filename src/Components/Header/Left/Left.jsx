import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import { Logo } from '../../Logo/Logo'

export const Left = () => {
  return (
    <SLeft>
        <Logo text/>
    </SLeft>
  )
}

const SLeft = styled(Flex)`

`
