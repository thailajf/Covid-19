import React, { Component } from 'react';

import Girl from '../../assets/svg/girl.js';

import { Container, TitleContainer, Title } from './styles';

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Girl />
        <TitleContainer>
          <Title>
            Todos Contra o
            <span> CoronaVírus</span>
          </Title>
        </TitleContainer>
      </Container>
    );
  }
}
