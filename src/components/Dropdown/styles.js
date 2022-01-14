import styled from 'styled-components';

const DropdownWrapper = styled.select`
  padding: 5px 10px;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  
  & + & { margin-left: 10px; }
`;

export default DropdownWrapper;
