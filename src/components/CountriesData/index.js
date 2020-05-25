import React from 'react'
import {Info,ListContainer} from './styles';

export default function ContriesData({country_name,cases,total_recovered,serious_critical,deaths}) {
  return (
    <div>
       <ListContainer>
          <Info>{country_name}</Info>
          <Info>{cases}</Info>
          <Info>{total_recovered}</Info>
          <Info>{serious_critical}</Info>
          <Info>{deaths}</Info>
        </ListContainer>
    </div>
  )
}
