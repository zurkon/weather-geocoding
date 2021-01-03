import styled from 'styled-components';

const StyledSearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 15px 15px;

  & input {
    width: 100%;
    max-width: 280px;
    padding: 10px 15px;
    border: none;
    outline: none;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 16px 0px 16px 0px;
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);

    color: #313131;
    font-size: 20px;
    transition: all 0.3s ease-out;
    &:focus {
      background-color: rgba(255, 255, 255, 0.6);
      border-color: rgba(0, 0, 0, 0.6);
    }
  }
`

export default StyledSearchBox;