import styled from 'styled-components';

export const Container = styled.div`


svg{
  width: 900px;
  height: auto;
  margin: 0;

}

#virus{
  animation: virus 2s ease-in-out infinite alternate;
  transform-origin: bottom;
}

#sombravirus{
  animation: sombravirus 4s ease-in-out infinite alternate;
  transform-origin: bottom;
}

@keyframes virus{
  from{
    transform:rotateX(0deg);

  }
  to{
    transform: rotateX(20deg);
  }
}
@keyframes sombravirus{
  from{
    transform:rotateX(0deg);

  }
  to{
    transform: rotateX(31deg);
  }
}

`;

export const BoyContainer = styled.div`
svg{
  
width:90%;
height:85%;
}

`



export const CausesContainer = styled.div`
display:flex;
flex-direction:row;
margin-bottom:15px;
margin-left:40px;




`;
export const SymptomsContainer = styled.div`
  display:flex;
flex-direction:row;
margin-bottom:15px;

`;
export const PreventionsContainer = styled.div`

display:flex;
flex-direction:row;
margin-bottom:15px;
margin-left:20px;

svg{
  

}


`;