import React from 'react'
import styled from 'styled-components'

export const List = ({data}) => {
  return (
    <SList>
        {
            data?.map(item => 
                <Item key={item.name}>
                    <PartnerPircture>
                        <img 
                            src={"http://localhost:8000" + item.partner_image}
                            alt=""
                        />
                    </PartnerPircture>
                    <PartnerName>
                        {item.name}
                    </PartnerName>
                </Item>    
            )
        }
    </SList>
  )
}

const PartnerName = styled.h3`
    margin: 0;
    font-size: 24px;
`
const PartnerPircture = styled.div`
    border-radius: 100px;
    width: 150px;
    height: 150px;

    img {
        width: 100%;
        height: 100%;
        object-fit:cover;
        background-position:center;
    }
`
const Item = styled.li`
    list-style: none;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`
const SList = styled.ul`
    margin: none;
    display:flex;
    flex-wrap:wrap;
    gap: 15px;
`