import styled from 'styled-components';

const Colors={pink:'#F33A53',containersbg:'#D9D8EC',Green:'#223439',Label:'#636363'}

export const InfoContainer=styled.div`
display:flex;
flex-direction:column;
margin-left:2rem;
margin-right:5rem;
color:${Colors.Label};
font-size:16px;
margin-bottom:10px;

h2{
  margin-left:2rem;
  text-align:center;
  color:${Colors.pink};
  font-weight:normal;

}

`;

export const Info =styled.li`
list-style-type:none;
color:${Colors.Green};
font-size:21px;
align-self:stretch;
 width:16%;
text-align:center;
margin-left:6px;
font-weight:600;

 `;  

 

export const Container = styled.ul`
display:flex;
flex-direction:column;
padding:0px;
list-style-type:none;
  
`;