import React from 'react'
import * as Styled from './styles'

export type MainProps = {
  title?: string
  description?: string
}

const Main: React.FC<MainProps> = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <Styled.Wrapper>
    <Styled.Logo src="/img/logo.svg" alt="React Avançado Logo" />
    <Styled.Title>{title}</Styled.Title>
    <Styled.Description>{description}</Styled.Description>
    <Styled.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </Styled.Wrapper>
)

export default Main
