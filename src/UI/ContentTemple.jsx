import React from 'react'
import styled, { css } from 'styled-components'

const ContentTemple = (props) => {
  return (
    <SContentTemple {...props}>{props.children}</SContentTemple>
  )
}

const SContentTemple = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: ${({padding}) => padding || "0 50px 0 50px;"};
  margin: 0 auto;
  ${props => props.pt && css`
    padding-top: 30px;
  `}
  ${props => props.pb && css`
    padding-bottom: 30px;
  `}
`

export default ContentTemple