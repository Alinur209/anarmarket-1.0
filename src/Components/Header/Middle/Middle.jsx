import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'

export const Middle = () => {
  return (
    <SMiddle>
        <Left>
            <AdressTitle>Адрес:</AdressTitle> 
            <AdressValue>Бишкек Ул. Кулатова 1б</AdressValue>
        </Left>
        <Right>
            <PhoneTitle><Phone href="tel:0702095400">0 (702) 095 400</Phone></PhoneTitle>
            <PhoneValue>Звонок по телефону</PhoneValue>
        </Right>
    </SMiddle>
  )
}

const Phone = styled.a`
    color: #000;
    &:hover {
        color: #000
    }
`
const PhoneValue = styled.pre`
    font-size: 14px;
    color: #AEAEAE;
    margin: 0;
`
const PhoneTitle = styled.pre`
    font-size: 18px;
    margin: 0;
`
const Right = styled(Flex)`
    width: 100%;
    flex-direction:column;
`
const AdressValue = styled.pre`
    font-size: 14px;
    color: #AEAEAE;
    margin: 0;

`
const AdressTitle = styled.pre`
    font-size: 18px;
    margin: 0;
`
const Left = styled(Flex)`
    width: 100%;
    flex-direction:column;
`
const SMiddle = styled(Flex)`
    gap: 50px;
    height: 100%;
    align-items: center;
`