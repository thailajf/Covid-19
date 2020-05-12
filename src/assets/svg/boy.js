import React from 'react';
import { ReactComponent as BoySvg} from './boy/boy.svg';
import { ReactComponent as Sintomas} from './boy/Sintomas.svg';
import { ReactComponent as Prevencoes} from './boy/Prevencoes.svg';
import { ReactComponent as Contagio} from './boy/Contagio.svg';



import {BoyContainer,CausesContainer,SymptomsContainer,PreventionsContainer} from './styles';


export  function Boy() {
  return (
      <BoyContainer>
       <BoySvg/>
       </BoyContainer>
    
  );
}


export  function Causes() {
  return (
      <CausesContainer>
       <Contagio/>
       </CausesContainer>
       
    
  );
}


export  function Symptoms() {
  return (
      <SymptomsContainer>

       <Sintomas/>
       
      
       

       </SymptomsContainer>
    
  );
}


export  function Preventions() {
  return (
      <PreventionsContainer>

          
          <Prevencoes/>
         
      

       </PreventionsContainer>
    
  );
}