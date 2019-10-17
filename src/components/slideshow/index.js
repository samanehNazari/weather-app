import React, { useEffect } from 'react';
import Card from '../card';
import { getForecast } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import isEmpty from 'lodash/isEmpty'

const SlideShow = () => {
  const dispatch = useDispatch();
  const forecast = useSelector(state => state.forecast);

  const editData = (forecast) => {
  
  }

  useEffect(() => {
    dispatch(getForecast('Ireland,Dublin'));
  }, []);

  !(isEmpty(forecast.data)) && editData(forecast.data);
  return <Card />
}

export default SlideShow;