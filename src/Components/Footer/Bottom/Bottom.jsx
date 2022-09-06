import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import inst from '../../../Media/Footer/instagram (2) 1.svg'

export const Bottom = () => {
  return (
    <SBottom>
        <Text>Anarmarket.kg © 2022</Text>
        <Inst>
            <InstText>
                Мы в instagram: 
            </InstText>
            <a href="https://www.instagram.com/anarmarket_kg">
                <Icon>
                    <img src={inst} alt="" />
                </Icon>
            </a>
        </Inst>
    </SBottom>
  )
}

const InstText = styled.span`
    font-size: 16px;
    color: #fff;
    @media(max-width: 860px) {
        font-size: 12px;
    }
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background: #BF1C3E;
    border-radius: 100px;
    display: flex;
    justify-content:center;
    align-items:center;

    img {
        width: 20px;
    }

`
const Inst = styled.div`
    display: flex;
    gap: 10px;
    align-items:center;
`
const Text = styled.p`
    margin: 0;
    font-size: 16px;
    color: #fff;
    opacity: 0.7;
    &:hover {
        color: #fff;
    }

    @media(max-width: 860px) {
        font-size: 12px;
    }
`
const SBottom = styled(Flex)`
    width: 100%;
    justify-content:space-between;
    border-top: 1px solid #fff;
    opacity: 0.7;
    padding: 15px 0px;
    align-items:center;
    &:hover {
        color: #fff;
    }
`
