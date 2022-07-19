import React from 'react'
import styled from 'styled-components'
import useMediaQuery from '../../../../hooks/useMediaQueryHook'
import Flex from '../../../../UI/Flex'
import { InformationSection } from './InformationSection/Information'
import { LogoSection } from './LogoSection/LogoSection'

export const Left = () => {
  const isMatch = useMediaQuery("(max-width: 1156px)")

  return (
    <SLeft>
        <LogoSection />
        {
          !isMatch && <InformationSection />
        }
    </SLeft>
  )
}

const SLeft = styled.div`
    display:grid;
    grid-template-columns: 1.5fr 1fr;

  @media(max-width: 1156px) {
    display: block;
  }
`