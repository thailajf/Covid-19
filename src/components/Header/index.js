import React from 'react';
import {Container,HeaderContainer,Menu,MenuList,Option,} from './style';
import {Link} from 'react-router-dom';

export default function Header (){
  return(
    <Container>
          <HeaderContainer>
        <Menu>
          <MenuList>
            <Option>
            <Link to="/"> Home </Link>
            <Link to="/data"> Dados </Link>
            <Link to="/about"> Sobre </Link>

            </Option>
          </MenuList>
        </Menu>
      </HeaderContainer>
    
    </Container>
  )
}