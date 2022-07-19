import React from 'react'
import styled from 'styled-components'
import Flex from '../../../../../UI/Flex'
import { Logo } from '../../../../Logo/Logo'
import { Icons } from './Icons'

export const LogoSection = () => {
  return (
    <SLogoSection>
        <div>
          <Logo footer width="300px" />
          <Description>
              При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным.
          </Description> 
        </div> 
        <Icons />
    </SLogoSection>
  )
}

const Description = styled.p`
  max-width: 450px;
    margin: 0;
    font-size: 16px;
    color: #fff;
    opacity: 0.7
`
const SLogoSection = styled(Flex)`
    flex-direction:column;
    gap: 20px;
    @media (max-width: 1156px) {
      width: 100%;
      display:grid;
      grid-template-columns: 1fr 1fr;
      gap: 0;
    };
    @media (max-width: 972px) {
      display:flex;
      flex-direction: column;
      gap: 20px;
      flex-wrap: wrap;
    }
`