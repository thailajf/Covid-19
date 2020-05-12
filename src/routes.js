import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import DataCorona from './pages/Dados';


export default function Routes() {
  return(
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/data" exact component={DataCorona}/>

  </Switch>
  )
 
}