import styled, { css } from 'styled-components';

export const DropdownWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
`;

const DropdownContent = styled.select`
  display: flex;
  padding: 5px 10px;
  border: 1px solid #E6E6E6;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  ${({big}) => big && css`
    padding: 10px 15px;
    width: 100%;
  `}
`;

export default DropdownContent;
