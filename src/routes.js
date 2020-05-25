import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import DataCorona from './pages/Data';
import About from './pages/About';

export default function Routes() {
  return(
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/data" exact component={DataCorona}/>
    <Route path="/about" exact component={About}/>
  </Switch>
  )

}
