import React from 'react';

import StyledGeolocation from './styles/StyledGeolocation';

const Geolocation = ({ location, currentDate }) => (
  <StyledGeolocation>
    {/* <h1> Hamamatsu, JP </h1> */}
    <h1> {location.city} </h1>
    <h1> {location.state}, {location.country} </h1>
    <h3> {currentDate} </h3>
    {/* <h3> Thusday 10 January 2020 </h3> */}
  </StyledGeolocation>
);

export default Geolocation;