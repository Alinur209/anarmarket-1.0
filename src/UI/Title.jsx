import React from 'react'
import styled, { css } from 'styled-components'


const Title = ({children}, props) => {
  return (
    <STitle {...props}>{children}</STitle>
  )
}

const STitle = styled.h2`
    font-size: ${props => props.size || "36px"};
    margin: 0;
    ${props => props.bold && css`
      font-weight: bold;
    `}
`   

export default Title