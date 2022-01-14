import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AddButtonWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-left: 20px;
`;

export const AddButtonText = styled.span`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 1.2rem;
`;

export default AddButtonWrapper;
