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
            </Option>
          </MenuList>
        </Menu>
      </HeaderContainer>
    
    </Container>
  )
}