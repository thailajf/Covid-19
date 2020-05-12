import styled from 'styled-components';
const colors={pink:'#F33A53'}

export const Container = styled.div`
  display:flex;
  justify-content:center!important;
  margin-top:5px;
  margin-bottom:5px;
  padding:0;
`; 


export const PaginationContainer = styled.ul`
display:flex;
flex-direction:row;
text-decoration:none;
list-style-type:none;
flex-wrap:wrap;
margin-left:0;  
 

`;

export const PageNumbersList = styled.li`
  
background-color:none;
  button{
    border:none;
    background-color:transparent;
    cursor: pointer;
    line-height:21px;
    margin-left:8px;
    color:${colors.pink};
    font-weight:600;
    font-size:15px;     

   
  }

`;
