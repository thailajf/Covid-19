import React from 'react'

import {PaginationContainer,PageNumbersList,Container} from './style';
import styled from 'styled-components';

 const Pagination = ({numberChangedPage,currentPage,paginate,numberClicked}) => {

   const pageNumbers=[];

  for(let i=numberChangedPage-5;i<=numberChangedPage+5;i++){
    pageNumbers.push(i);

  }
  return (
    <Container>
      <PaginationContainer>
        {pageNumbers.map(number=>(
          <PageNumbersList key={number}>
            <button  href="!#" onClick={()=>paginate(number)}>{number}</button>
          </PageNumbersList>
        ))}
      </PaginationContainer>
    </Container>
  )
}

export default Pagination;
