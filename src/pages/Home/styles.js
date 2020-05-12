import styled from 'styled-components';


export const Container = styled.div`
position: relative;
margin: 0;
box-sizing: border-box;

`
export const TitleContainer = styled.section`

position:absolute;
top:25%;
display: flex;
left:50%

`

export const Title = styled.h1`
font-size: 60px;
font-weight: 500;
text-align: center;
color: #223439;
cursor:default;

span{
  font-size: 90px;
  font-weight: 600;
  color:#F33A53;

  :hover{
    font-size: 95px;
    font-weight: 700;
    color:#F33A53;
  }
}

`
