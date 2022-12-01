import React from 'react'
import styled from 'styled-components'

export const List = ({data}) => {
  return (
    <SList>
        {
            data?.map(item => 
                <Item key={item.name}>
                    <img 
                        src={item.image}
                        alt=""
                    />
                </Item>    
            )
        }
    </SList>
  )
}

const Item = styled.li`
    list-style: none;
    width: 7rem;
    border-radius: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit:contain;
        background-position:center;
    }
`
const SList = styled.ul`
    margin: none;
    width: 100%;
    display:grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, 100px);
    align-items:center;
    @media(max-width: 375px) {
        width: 100%;
    }
`