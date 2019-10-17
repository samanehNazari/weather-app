import React, { useEffect } from 'react';
import { withTheme } from "styled-components";
import { getWeather } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import SlideShow from '../../components/slideshow';



const Home = () => {

  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);


  useEffect(() => {
    // if (!weather.data) {
      dispatch(getWeather('Ireland,Dublin'));
    // }
  }, []);

  return  <React.Fragment>
      <div className="row no-gutters">
        <div className={'col-md-8 vh-100'}>
          <div className="fix-block" >
            <SlideShow/>
          </div>
        </div>
      </div>
    </React.Fragment>
};

export default withTheme(withTheme(Home));
