import React from 'react';

import StyledSearchBox from './styles/StyledSearchBox';

const SearchBox = ({ handleInput, handleSubmit }) => (
  <StyledSearchBox>
    <form onSubmit={(e) => { handleSubmit(e); }}>
      <input type="text" onChange={(e) => { handleInput(e); }} autoComplete="off" placeholder="Search for a city..." />
    </form>
  </StyledSearchBox>
);

export default SearchBox;