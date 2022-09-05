import React from 'react'
import styled from 'styled-components'
import Flex from '../../../../UI/Flex'
import { InformationSection } from './InformationSection/Information'
import { LogoSection } from './LogoSection/LogoSection'

export const Left = () => {
  return (
    <SLeft>
        <LogoSection />
        <InformationSection />
    </SLeft>
  )
}

const SLeft = styled.div`
    display:grid;
    grid-template-columns: 1.5fr 1fr;

`