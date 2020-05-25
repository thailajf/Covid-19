import React from 'react';
import {Container , Info ,InfoContainer } from './styles';

export default function BrazilData({country_name,cases,total_recovered,serious_critical,deaths}) {
  return (
    <div>
      <Container>
        <InfoContainer> <h2>{country_name}</h2></InfoContainer>
        <InfoContainer>Casos Confirmados<Info>{cases}</Info> </InfoContainer>
        <InfoContainer>Casos Recuperados <Info>{total_recovered}</Info> </InfoContainer>
        <InfoContainer>Casos Críticos <Info>{serious_critical}</Info> </InfoContainer>
        <InfoContainer>Mortes <Info>{deaths}</Info> </InfoContainer>
      </Container>
    </div>
  )
}
