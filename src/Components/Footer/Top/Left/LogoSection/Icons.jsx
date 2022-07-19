import React from 'react'
import styled from 'styled-components'
import Flex from '../../../../../UI/Flex'
import phone from '../../../../../Media/Footer/phone.svg'
import mail from '../../../../../Media/Footer/mail.svg'
import adress from '../../../../../Media/Footer/adress.svg'

export const Icons = () => {

    const icons = [
        {icon: phone, text: "0 (702) 095 400", isDynamic: true, tag: "tel:"},
        {icon: mail, text: "anar.trade@gmail.com", isDynamic: true, tag: "mailto:"},
    ]

  return (
    <SIcons>
        {
            icons.map(icon => 
                <Icon key={icon.tag}>
                    <Img src={icon.icon} alt=""/>
                    <Value>{icon.isDynamic ? <A href={icon.tag + icon.text}>{icon.text}</A>: icon.text}</Value>
                </Icon>    
            )
        }
        <Icon>
            <Img src={adress} alt=""/>
            <Value><A href="https://2gis.kg/bishkek/firm/70000001050873658/74.622243%2C42.861035?m=74.62249%2C42.861016%2F19.93">Кыргызстан, г.Бишкек, Кулатова 1б </A></Value>
        </Icon>
    </SIcons>
  )
}

const A = styled.a`
    color:#fff;
    opacity: 0.7;
    &:hover {
        color:#fff;
        opacity: 1;
    }
`
const Value = styled.span`
    font-size: 16px;
    padding-left: 10px;
`
const Img = styled.img`
    width: 25px;
`
const Icon = styled.li`
    list-style:none;
    
`
const SIcons = styled(Flex)`
    flex-direction:column; 
    gap: 10px;

    @media(max-width: 1156px){
        height: 100%;
        justify-content:center;
    }
`