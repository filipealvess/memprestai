import styled, { css } from 'styled-components';

const FormDrawerWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);

  ${({visible}) => !visible && css`display: none;`}
`;

export const FormDrawerContent = styled.section`
  width: 85%;
  max-width: 500px;
  height: 100%;
  padding: 20px 30px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #E6E6E6;
`;

export const Title = styled.p`
  color: ${({theme}) => theme.colors.blue};
  font-size: 2rem;
  font-weight: 500;
`;

export const Close = styled.button`
  padding: 5px;
`;

export const Fields = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default FormDrawerWrapper;
