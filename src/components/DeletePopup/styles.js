import styled from 'styled-components';

const DeletePopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  `;

export const DeletePopupContent = styled.section`
  width: 90%;
  max-width: 700px;
  padding: 20px 30px;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.white};
  
  @media (max-width: 400px) {
    padding: 15px 20px 20px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: 500;
`;

export const Close = styled.button`
  padding: 7px;
`;

export const Message = styled.p`
  margin-bottom: 30px;
`;

export const Options = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const OptionButton = styled.button`
  flex-grow: 1;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
`;

export const Cancel = styled(OptionButton)`
  background-color: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.white};
  `;

export const Delete = styled(OptionButton)`
  border: 1px solid ${({theme}) => theme.colors.red};
  color: ${({theme}) => theme.colors.red};
`;

export default DeletePopupWrapper;
