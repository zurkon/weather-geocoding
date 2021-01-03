import React from 'react';

import SearchBox from './SearchBox';
import Geolocation from './Geolocation';
import WeatherDisplay from './WeatherDisplay';

import StyledWeather from './styles/StyledWeather';

const Weather = () => (
  <StyledWeather>
    <SearchBox />
    <Geolocation />
    <WeatherDisplay />
  </StyledWeather>
);

export default Weather;