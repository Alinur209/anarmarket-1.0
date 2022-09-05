import React from 'react'
import styled from 'styled-components'
import Flex from '../../../../UI/Flex'
import { Form } from './Form/Form'

export const Right = () => {
  return (
    <SRight>
        <Title>Что то еще?</Title>
        <Msg>Отправьте нам сообщение</Msg>
        <Form />
    </SRight>
  )
}

const Msg = styled.span`
    font-size: 16px;
    color: #fff;
    opacity:0.7;
`
const Title = styled.h3`
    margin: 0;
    font-size: 28px;
    color: #fff;
    line-height: 30px;
`
const SRight = styled(Flex)`
    flex-direction:column;
    padding-top: 20px;
    width: 100%;
`