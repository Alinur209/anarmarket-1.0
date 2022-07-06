import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'

export const UnFound = ({text}) => {
  return (
    <SUnFound>
        <Text>
            {text ? text : "Не найдено.."}
        </Text>
    </SUnFound>
  )
}

const Text = styled.p`
    color: #000;
    opacity: 0.7;
    font-size:22px;
`
const SUnFound = styled(Flex)`
    width: 100%;
    height: 250px;
    justify-content:center;
    align-items: center;
`