import styled from 'styled-components';

const StyledWeatherDisplay = styled.div`
  color: #fff;

  h1 {
    font-size: 6.5rem;
    font-weight: 900;
    margin: 30px 0px;
    text-shadow: 4px 10px rgba( 0, 0, 0, 0.6);
    & span {
      font-size: 5rem;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 15px;
    text-shadow: 0px 4px rgba( 0, 0, 0, 0.6);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    text-shadow: 0px 4px rgba( 0, 0, 0, 0.6);
  }
`

export default StyledWeatherDisplay;