import React, {useState} from 'react'
import styled, {css} from 'styled-components'
import {NavLink} from 'react-router-dom'
import Flex from '../../../UI/Flex'
import { Turn as Hamburger } from 'hamburger-react'
import useMediaQuery from '../../../hooks/useMediaQueryHook'
import Drawer from '@mui/material/Drawer';
import arrow from '../../../Media/Header/arrow.png'

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
  const [isOpen, setOpen] = useState(false)

  const toggleDrawer = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpen(false)
  }


  return (
      isMatch ? 
        <>
          <Hamburger 
              toggled={isOpen}
              toggle={setOpen} 
              rounded
              color="#334854"
          />
          <Drawer
                anchor={"right"}
                open={isOpen}
                onClose={toggleDrawer}
              >
                <BurgerBody>
                  <BurgerHeader>
                    <img src={arrow} alt="" width={"35px"} onClick={() => setOpen(false)}/>
                  </BurgerHeader>
                    <SNavList>
                    {navlist.map(link => 
                      <Li key={link.path}>
                        <Link onClick={() => setOpen(false)} key={link.title} to={"/" + link.path}>{link.title}</Link>
                      </Li>
                    )}
                    </SNavList>
                </BurgerBody>
          </Drawer>
        </>
      :
        <SNavList>
          {navlist.map(link => 
                <Li key={link.path}>
                  <Link key={link.title} to={"/" + link.path}>{link.title}</Link>
                </Li>
          )}
        </SNavList>
  )
}


const BurgerHeader = styled(Flex)`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #e3e3e3;
  padding: 10px 20px;
  position: relative;
`
const BurgerBody = styled(Flex)`
  width: 250px;
  flex-direction:column;
`

const SNavList = styled(Flex)`
  gap: 20px;
  height: 100%;
  align-items: center;
  @media(max-width: 1180px) {
    width: 100%;
    flex-direction:column;
    gap: 0;
  }
`

const Li = styled.li`
  list-style: none;
  position: relative;
  height: 100%;
  display:flex;
  align-items:center;
  @media(max-width: 1180px) {
    width: 100%;
  }
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
    @media(max-width: 1180px) {
      width: 100%;
    }
  }

  @media(max-width: 1180px) {
    padding: 10px;
  }

`