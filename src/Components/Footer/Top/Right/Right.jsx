import React from 'react'
import styled from 'styled-components'
import useMediaQuery from '../../../../hooks/useMediaQueryHook'
import Flex from '../../../../UI/Flex'
import { InformationSection } from '../Left/InformationSection/Information'
import { Form } from './Form/Form'

export const Right = () => {
  const isMatch = useMediaQuery("(max-width: 1156px)")

  return (
    <Wrapper>
      {
        isMatch && <InformationSection />
      }
      <SRight>
        <Title>Что то еще?</Title>
        <Msg>Отправьте нам сообщение</Msg>
        <Form />
      </SRight>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  @media(max-width: 1156px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 972px) {
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`
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