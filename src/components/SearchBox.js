import React from 'react';

import StyledSearchBox from './styles/StyledSearchBox';

const SearchBox = () => (
  <StyledSearchBox>
    <input type="text" autoComplete="off" placeholder="Search for a city..." />
  </StyledSearchBox>
);

export default SearchBox;