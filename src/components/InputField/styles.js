import styled from 'styled-components';

const InputFieldWrapper = styled.article`
  display: flex;
  flex-direction: column;
`;

export const InputFieldLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500;
`;

export const InputFieldContent = styled.input`
  padding: 10px 15px;
  border: 1px solid #E6E6E6;
  border-radius: 5px;
`;

export default InputFieldWrapper;
