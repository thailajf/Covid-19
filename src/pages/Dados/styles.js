import styled from 'styled-components';
const Colors={pink:'#F33A53',containersbg:'#D9D8EC',Green:'#223439',Label:'#636363'}

export const Container = styled.div`

 margin: 0 10px;
box-sizing: border-box;

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

export const WorldInfoContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
 

`

export const WorldContainter = styled.li`
background-color:${Colors.containersbg};
width:14.5%;
border-radius:10px;
text-align:center;


`

export const WorldTitle = styled.h2`
  font-size:20px;
  font-weight:500;
  color:${Colors.pink};
  margin-bottom:7px;


`

export const WorldNumber= styled.h3`
  font-size:35px;
  font-weight:700;
  color:${Colors.Green};
  margin-top:0;
  margin-bottom:25px;
`


export const ListInfoContainer = styled.div`
display:flex;
justify-content:space-around;
box-sizing:border-box;
width:97%;
margin-left:25px;
margin-top:60px;



`

export const ListInfo = styled.div`
background-color:${Colors.containersbg};
border-radius:10px;
width:65%;
margin-left:10px;
display:flex;
flex-direction:column;
  


`


export const LabelListContainer = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
justify-content:space-around;
padding:0;
 
`

export const LabelList = styled.li`
list-style-type:none;
color:${Colors.Label};
font-size:18px;
 width:16%;
text-align:center;


`


export const ListContainer = styled.ul`
display:flex;
flex-direction:row;
justify-content:space-around;
padding:0px;
list-style-type:none;
  
`

export const Info =styled.li`
list-style-type:none;
color:${Colors.Label};
font-size:16px;
align-self:stretch;
 width:16%;
text-align:center;

 `;   


export const StateContainer =styled.div`
width:30%;
background-color:${Colors.containersbg};
border-radius:10px;
`;   
