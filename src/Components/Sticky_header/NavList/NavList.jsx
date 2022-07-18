import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
import Flex from '../../../UI/Flex'
import { Turn as Hamburger } from 'hamburger-react'
import useMediaQuery from '../../../hooks/useMediaQueryHook'

export const navlist = [
  {title: "Главная", path: ""},
  {title: "Овощи", path: "vegetables"},
  {title: "Фрукты", path: "fruits"},
  {title: "Бакалея", path: "grocery"},
  {title: "Зелень", path: "greens"},
  {title: "Мясо", path: "meat"},
  {title: "Рыба", path: "fish"},
  {title: "Напитки", path: "drinks"},
  {title: "О нас", path: "about"},

    // {title: "Акции", path: "actions"},
  // {title: "Блог", path: "blog"},
]

export const NavList = () => {
  const isMatch = useMediaQuery("(max-width: 1180px)")
  
  const [isToggle, setIsToggle] = useState(false)

  return (
    <>
      <BurgerBody isOpen={isToggle}>
        body
      </BurgerBody>
    
      <SNavList>
          {
            isMatch ?
              <SHamburger color="#334854" rounded toggle={setIsToggle} toggled={isToggle} />
            :
              navlist.map(link => 
                <Li key={link.path}>
                  <Link key={link.title} to={"/" + link.path}>{link.title}</Link>
                </Li>
              )
          }
      </SNavList>
    </>
  )
}

const SHamburger = styled(Hamburger)`
  z-index: 1000
`
const BurgerBody = styled(Flex)`

  position: absolute;
  z-index: 999;
  right: ${({isOpen}) => isOpen ? "0":"-100%"};
  top: 0px;
  width: 300px;
  height: 100vh;
  background: #334854;
  box-shadow: 0 0 30px #334854;

`

const SNavList = styled(Flex)`
  gap: 20px;
  height: 100%;
  align-items: center;
`

const Li = styled.li`
  list-style: none;
  position: relative;
  height: 100%;
  display:flex;
  align-items:center;
`
const Link = styled(NavLink)`
  font-size: 18px;
  color: #000;
  &::after {
    opacity: 0;
    content: '';  
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #BF1C3E;
    transition: opacity 0.2s;
  }
  &:hover {
    color: #BF1C3E;
    &::after {
      opacity: 1;
    }
  }
  &.active {
    color: #BF1C3E;
    &::after {
      opacity: 1; 
    }
  }
`