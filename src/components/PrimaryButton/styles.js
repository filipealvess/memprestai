import styled from 'styled-components';

const PrimaryButtonWrapper = styled.button`
  width: 100%;
  padding: 10px 15px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.white};
  font-weight: 500;
  text-transform: uppercase;
`;

export default PrimaryButtonWrapper;
