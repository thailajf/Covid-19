import styled from 'styled-components';
const Colors={pink:'#F33A53',containersbg:'#D9D8EC',Green:'#223439',Label:'#636363'}


export const Container = styled.div`

 margin: 0 10px;
box-sizing: border-box;
background-color:#fff;
margin:0;
height:100%;

`

export const PageName = styled.div`
position: relative;
display: flex;
flex-direction:column;
width:300px;
box-sizing: border-box;
top:50px;
margin-bottom:80px;

 

`

export const Name = styled.h1`

color:${Colors.pink};
margin:0;
padding:0;
line-height:29px;
text-align:center;
font-size:27px;
font-weight:700;


span{
  color:#000;
  font-size:26px;
  font-weight:600;

  
}


`

export const AboutContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;


`;

export const ColumContainer = styled.div`


`;

export const Image = styled.img`


`;

export const AboutText = styled.div`
  max-width:580px;

  p{
    color:${Colors.Label};
  }
   h3{
  font-size:18px;
  color:${Colors.pink};
  margin-bottom:20px;
  }

`;
