import React from 'react'
import styled from 'styled-components'
import Flex from '../../../UI/Flex'
import truck from '../../../Media/Home/shipped.png'
import piggy from '../../../Media/Home/saving.png'
import receipt from '../../../Media/Home/receipt.png'

const advantages = [
    {
        title: "Доставка по городу",
        desc: "c 8:00 - 20:00",
        img: truck
    },
    {
        title: "Цена - качество",
        desc: "Выгодные цены и отличное качество",
        img: piggy
    },
    {
        title: "Возврат и обмен товара",
        desc: "В течение 7 дней после получения",
        img: receipt
    },
]
export const OurAdvantages = () => {
  return (
    <SOurAdvantages>
        <Title>Почему мы</Title>
        <List>
            {
                advantages.map(advantage => 
                    <Item key={advantage.title}>
                        <div>   
                            <img src={advantage.img} alt=""/>
                        </div>
                        <Body>
                            <h3>{advantage.title}</h3>
                            <p>{advantage.desc}</p>
                        </Body>
                    </Item>
                )
            }
        </List>
    </SOurAdvantages>
  )
}

const Body = styled.div`
    padding: 10px 0 0 10px;
    h3 {
        font-size: 18px;
        margin: 0;
    };
    p {
        margin: 0;
        opacity: 0.7
    }
`
const List = styled.ul`
    margin: 0;
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    justify-content:space-between;
`

const Item = styled.li`
    list-style:none;
    display:flex;
    div img {
        width: 100px;
    }   
`
const Title = styled.h2`
    margin: 50px 0;
    width: 100%;
    font-size: 2rem;
    text-align:center;

    @media(max-width: 481px) {
        margin: 20px 0;
    }
`
const SOurAdvantages= styled(Flex)`
    width: 100%;
    flex-direction:column
`
