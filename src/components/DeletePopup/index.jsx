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

export default function DeletePopup({ message, visible, deleteFunction, cancelFunction }) {
  return (
    <DeletePopupWrapper visible={visible}>
      <DeletePopupContent>
        <Header>
          <Title>Excluir item</Title>
          <Close onClick={cancelFunction}><XCircle /></Close>
        </Header>

        <Message>{message}</Message>

        <Options>
          <Cancel onClick={cancelFunction}>Cancelar</Cancel>
          <Delete onClick={deleteFunction}>Excluir</Delete>
        </Options>
      </DeletePopupContent>
    </DeletePopupWrapper>
  );
}
