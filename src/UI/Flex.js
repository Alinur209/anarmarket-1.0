import React from 'react'
import styled, {css} from 'styled-components'

const SFlex = styled.div`
    width: ${({width}) => width || "auto"};
    height: ${({height}) => height || "auto"};
    display:flex;
    flex-direction: ${({direction}) => direction || "row"};
    justify-content: ${({justify}) => justify || "flex-start"};
    align-items: ${({align}) => align || "flex-start"};
    gap: ${({gap}) => gap || "0px"};
    background: ${({bg}) => bg || ""};
    box-shadow: ${({shadow}) => shadow || ""};
    border-radius: ${({radius}) => radius || ""};
    border: ${({border}) => border || ""};
    padding: ${({padding}) => padding || "0"};
    ${props => props.wrap && css`
        flex-wrap: wrap;
    `};
    ${props => props.topLine && css`
        border-top:1px solid #e3e3e3;
    `};
    ${props => props.leftLine && css`
        border-left:1px solid #e3e3e3;
    `};
    ${props => props.rightLine && css`
        border-right:1px solid #e3e3e3;
    `};
    ${props => props.bottomLine && css`
        border-bottom:1px solid #e3e3e3;
    `};
`
export default function Flex (props) {
    return <SFlex {...props}/>
}