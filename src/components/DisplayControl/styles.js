import styled from 'styled-components';

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
  display: flex;
  gap: 10px;
  
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 20px;

    & > * { width: 100%; }
  }
  
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export default DisplayControlWrapper;
