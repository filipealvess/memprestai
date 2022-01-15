import styled from 'styled-components';
import DropdownWrapper from '../Dropdown/styles';

const DisplayControlWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: start;
  }
  `;

export const DisplayControlTitle = styled.h2`
  display: flex;
  align-items: center;
  
  @media (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
  }
  `;

export const DropdownsWrapper = styled.section`
  @media (max-width: 600px) {
    display: flex;
    width: 100%;
    margin-top: 20px;

    & ${DropdownWrapper} {
      flex-grow: 1;
    }
  }
  
  @media (max-width: 400px) {
    flex-direction: column;
    
    & ${DropdownWrapper} + ${DropdownWrapper} {
      margin: 10px 0 0;
    }
  }
`;

export default DisplayControlWrapper;
