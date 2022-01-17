import styled, { css } from 'styled-components';

const ListItemWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 15px 20px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};

  ${({visible}) => visible === false && css`display: none;`}

  & + & { margin-top: 15px; }
  
  @media (max-width: 600px) {
    & + & { margin-top: 20px; }
  }
  
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 5px;
`;

export const InfoItem = styled.p`
  font-size: 1.2rem;
`;

export const AlertInfo = styled.p`
  flex-grow: 1;
  margin: 0 20px;
  font-size: 1.2rem;
  text-align: right;

  @media (max-width: 650px) {
    position: absolute;
    top: -1rem;
    right: 0;
    padding: 3px 7px;
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.blue};
  }
`;

export const OptionsWrapper = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
    padding-top: 15px;
    border-top: 1px solid #E6E6E6;

    &::after {
      content: '';
      display: block;
      align-content: stretch;
      order: 1;
      width: 1px;
      margin: 0 10px;
      background-color: #E6E6E6;
    }
  }
`;

export const Option = styled.button`
  padding: 7px 10px;

  & + & { margin-left: 10px; }
  
  @media (max-width: 500px) {
    flex-grow: 1;

    & + & { margin-left: 0; order: 2; }
  }
`;

export default ListItemWrapper;
