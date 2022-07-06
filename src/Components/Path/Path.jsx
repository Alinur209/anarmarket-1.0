import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '../../UI/Flex'
import {useLocation } from "react-router-dom";
import { convertPathname } from '../../utiles/index';
import ContentTemple from '../../UI/ContentTemple';

export const Path = () => {
    const location = useLocation()
    const [path, setPath] = useState('')

    useEffect(() => {
        let result = 'Главная'
        convertPathname(location.pathname).map(item => result += " / " + item)
        setPath(result)
    }, [location.pathname])

  return (
    <ContentTemple>
        <SPath>
            <Text>{path}</Text>
        </SPath>
    </ContentTemple>
  )
}

const Text = styled.p`
    font-size: 16px;
    opacity: 0.7;
    margin: 0;
`
const SPath = styled(Flex)`
    width: 100%;
    height: 100%;
    padding: 10px 0;
`