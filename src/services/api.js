import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL:"https://coronavirus-monitor.p.rapidapi.com/"
})