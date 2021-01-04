import React from 'react';

import StyledWeatherDisplay from './styles/StyledWeatherDisplay';

const WeatherDisplay = ({ weather: { currentTemp, weatherMain, tempMax, tempMin } }) => (
  <StyledWeatherDisplay>
    <h1>{Math.round(currentTemp)}<span>&#186;C</span> </h1>
    <h2>{weatherMain}</h2>
    <h3>{Math.round(tempMin)}&#186;C / {Math.round(tempMax)}&#186;C</h3>
    {/* <h1>15<span>&#186;C</span> </h1>
    <h2>Sunny</h2>
    <h3>13&#186;C / 16&#186;C</h3> */}
  </StyledWeatherDisplay>
);

export default WeatherDisplay;