import React, { useState, useEffect } from 'react';

import Wrapper from './Wrapper';

import { getWeather } from '../utils/fetchHelpers';

import StyledWeather from './styles/StyledWeather';

const Weather = () => {
  const [inputLocation, setInputLocation] = useState('Embu');
  const [currentDate, setCurrentDate] = useState('');
  const [location, setLocation] = useState({
    city: '',
    state: '',
    country: ''
  });
  const [weather, setWeather] = useState({
    currentTemp: 0,
    weatherMain: '',
    tempMax: 0,
    tempMin: 0
  });

  useEffect(() => {
    fetchData('São Paulo').then(([newWeather, placeName]) => {
      setWeather(newWeather);
      setLocation(placeName);
    });
  }, []);

  async function fetchData(newLocation) {
    const now = new Date();
    setCurrentDate(dateBuilder(now));
    const response = await getWeather(newLocation);
    return response;
  }

  const setBackground = () => {
    const now = new Date();
    const hour = now.getHours();
    if (hour <= 7 || hour > 18) {
      return 'blue';
    }
    if (hour > 7 && hour <= 15) {
      return 'green';
    }
    return 'orange';
  }

  const dateBuilder = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }

  const handleInputLocation = (e) => {
    e.preventDefault();
    setInputLocation(e.target.value);
  }

  const getForecast = (e) => {
    e.preventDefault();
    fetchData(inputLocation).then(([newWeather, placeName]) => {
      setWeather(newWeather);
      setLocation(placeName);
    });
  }

  return (
    <StyledWeather bgImage={setBackground()}>
      <Wrapper states={{ location, currentDate, weather }} handleInput={handleInputLocation} handleSubmit={getForecast} />
    </StyledWeather>
  );
}

export default Weather;