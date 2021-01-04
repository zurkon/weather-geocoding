import styled from 'styled-components';
import blue from '../../assets/blue.jpg';
import green from '../../assets/green.jpg';
import orange from '../../assets/orange.jpg';

const StyledWeather = styled.div`
  background-image: url(
    ${props => {
    if (props.bgImage === 'blue') {
      return blue;
    }
    if (props.bgImage === 'green') {
      return green;
    }
    if (props.bgImage === 'orange') {
      return orange;
    }
  }}
  );
  background-size: cover;
  background-position: top center;
`

export default StyledWeather;