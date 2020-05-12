import React from 'react';

import {Container,PageName,Name,AboutContainer,ColumContainer,Image,AboutText} from './styles'

import {Boy,Causes,Symptoms,Preventions} from '../../assets/svg/boy.js';


export default function About(){
return(
  <>
  <Container>
  <PageName>
          <Name>Covid-19</Name>
          <Name><span>CoronaVirus</span></Name>

        </PageName>
        <AboutContainer>
          <ColumContainer>
          <Boy/>
            <AboutText>
            <h3>O que é ?</h3>
            <p>   
              A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que apresenta um quadro clínico que varia de infecções assintomáticas a quadros respiratórios graves
            </p>
            </AboutText>
          </ColumContainer>

          <ColumContainer>
           
            <Symptoms/>
            <Causes/>
            <Preventions/>
          </ColumContainer>
        </AboutContainer>
  
  </Container>
  </>
)
}