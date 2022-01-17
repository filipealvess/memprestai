import React, { useRef } from 'react';
import { XCircle } from 'react-feather';
import FormDrawerWrapper, {
  Close,
  Fields,
  FormDrawerContent,
  Header,
  Title
} from './styles';

export default function FormDrawer({ title, children, visible, close }) {
  const formDrawerRef = useRef();

  function handleUserClick({ target }) {
    if (target === formDrawerRef.current) {
      close();
    }
  }

  return (
    <FormDrawerWrapper
      visible={visible}
      onClick={handleUserClick}
      ref={formDrawerRef}
    >
      <FormDrawerContent onClick={handleUserClick}>
        <Header>
          <Title>{title}</Title>
          <Close onClick={close}><XCircle /></Close>
        </Header>

        <Fields onSubmit={event => event.preventDefault()}>
          {children}
        </Fields>
      </FormDrawerContent>
    </FormDrawerWrapper>
  );
}
