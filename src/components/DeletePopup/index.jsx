import React from 'react';
import { XCircle } from 'react-feather';
import DeletePopupWrapper, {
  Cancel,
  Close,
  Delete,
  DeletePopupContent,
  Header,
  Message,
  Options,
  Title
} from './styles';

export default function DeletePopup({ message }) {
  return (
    <DeletePopupWrapper>
      <DeletePopupContent>
        <Header>
          <Title>Excluir item</Title>
          <Close><XCircle /></Close>
        </Header>

        <Message>{message}</Message>

        <Options>
          <Cancel>Cancelar</Cancel>
          <Delete>Excluir</Delete>
        </Options>
      </DeletePopupContent>
    </DeletePopupWrapper>
  );
}
