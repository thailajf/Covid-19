import axios from 'axios';

export const CoronaMonitor = axios.create({
  baseURL:"https://coronavirus-monitor.p.rapidapi.com/"
})

export const CoronaBrazil = axios.create({
  baseURL:"https://covid-19-brasil.p.rapidapi.com/"
})