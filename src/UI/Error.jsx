import React from 'react'
import styled from 'styled-components'
import Flex from './Flex'


export const Error = ({err_code, message}) => {
  return (
    <SError>   
        {/* <FontAwesomeIcon icon="fa-solid fa-cloud-exclamation" /> */}
        <Text>Ошибка: {message}. Код ошибки: {err_code}</Text>
    </SError>
  )
}

const Text = styled.p`

`
const SError = styled(Flex)`
    width: 100%;
    height: 150px;
    justify-content:center;
    align-items:center;
`