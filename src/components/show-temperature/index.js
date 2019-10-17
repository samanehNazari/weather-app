import React from 'react';
import { useSelector } from "react-redux";
import { Temp } from './styles';

const ShowTemperature = ()=>{
  const currentWeather = useSelector(state => state.weather.current.temp);
  return <Temp>{currentWeather + '\u00b0'}</Temp>
};

export default ShowTemperature;