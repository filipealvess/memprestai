import styled, { css } from 'styled-components';

const LeaseGridItemWrapper = styled.article`
  padding: 15px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ visible }) => visible === false && css`display: none;`}
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  
  & > span {
    color: ${({ theme }) => theme.colors.blue};
  }

  & ~ p {
    margin-bottom: 5px;
  }
`;

export const Options = styled.div`
  display: flex;
  margin-top: 30px;
  padding-top: 15px;
  border-top: 1px solid #E6E6E6;
`;

export const Option = styled.button`
  flex-grow: 1;
`;

export const OptionsDivider = styled.div`
  align-content: stretch;
  width: 1px;
  margin: 0 10px;
  background-color: #E6E6E6;
`;

export default LeaseGridItemWrapper;
