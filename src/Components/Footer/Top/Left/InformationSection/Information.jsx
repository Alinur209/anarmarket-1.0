import React from 'react'
import styled from 'styled-components'
import Flex from '../../../../../UI/Flex'
import circle from '../../../../../Media/Footer/clause.svg'
import {Link} from 'react-router-dom'
import useMediaQuery from '../../../../../hooks/useMediaQueryHook'

export const InformationSection = () => {

  const list = [
    {path: '/about', text: "О нас"},
    {path: '/delivery', text: "Доставка"},
    // {path: '/blog', text: "Блог"},
    // {path: '/actions', text: "Акции"},
  ]

  return (
    <SContactSection>
      <Title>Информация</Title>
      <List>  
        {
          list.map(item => 
            <Item key={item.path}>
              <Img src={circle} alt=""/>
              <SLink to={item.path}>{item.text}</SLink>
            </Item>  
          )
        }
      </List>
    </SContactSection>
  )
}

const SLink = styled(Link)`
  color:#fff;
  opacity: 0.7;
  font-size: 18px;
  &:hover {
    color: #fff;
    opacity: 1;
  }
`
const Img = styled.img`
  width: 6px;
`
const Item = styled.li`
  margin: 0;
  list-style: none;
  display:flex;
  align-items: center;
  gap:15px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-top:20px;
  display:flex;
  flex-direction:column;
  gap: 10px;
`
const Title = styled.h3`
    margin: 0;
    font-size: 28px;
    color: #fff;
    line-height: 30px;
`
const SContactSection = styled(Flex)`
  flex-direction:column;
  padding-top: 20px
`