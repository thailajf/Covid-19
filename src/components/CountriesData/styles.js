import styled from 'styled-components';
const Colors={pink:'#F33A53',containersbg:'#D9D8EC',Green:'#223439',Label:'#636363'}

export const Info =styled.li`
list-style-type:none;
color:${Colors.Label};
font-size:16px;
align-self:stretch;
 width:16%;
text-align:center;

 `;  

 

export const ListContainer = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
padding:0px;
list-style-type:none;
  
`;