import React from 'react';
import StyledWeather from './styles/StyledWeather';

import StyledWeatherDisplay from './styles/StyledWeatherDisplay';

const WeatherDisplay = () => (
  <StyledWeatherDisplay>
    <h1>15<span>&#186;C</span> </h1>
    <h2>Sunny</h2>
    <h3>13&#186;C / 16&#186;C</h3>
  </StyledWeatherDisplay>
);

export default WeatherDisplay;