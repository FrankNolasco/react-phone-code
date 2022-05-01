import React from 'react';
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './styled';

interface Props {
  children: JSX.Element | JSX.Element[];
  active: boolean;
  onHide: () => void;
  title?: string | JSX.Element;
}

const Modal = ({ children, title, active, onHide }: Props): JSX.Element => {
  return (
    <ModalBlock className='inactive' active={active}>
      <ModalOverlay onClick={onHide} />
      <ModalContainer active={active}>
        {title && (
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <ModalClose onClick={onHide}>X</ModalClose>
          </ModalHeader>
        )}
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
    </ModalBlock>
  );
};

export default Modal;
