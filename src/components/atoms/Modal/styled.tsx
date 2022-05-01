/* eslint-disable @typescript-eslint/explicit-function-return-type */
import styled from 'styled-components';

interface Props {
  active: boolean;
}

export const ModalBlock = styled.div<Props>`
  align-items: center;
  bottom: 0;
  justify-content: center;
  left: 0;
  overflow: hidden;
  padding: 0.4rem;
  position: fixed;
  right: 0;
  top: 0;
  opacity: 1;
  z-index: 400;
  transition: display 1s;
  display: flex;
  ${({ active }) =>
    !active &&
    `&.inactive {
    display: none;
  }`}
`;

export const ModalOverlay = styled.a`
  background: rgba(247, 248, 249, 0.75);
  bottom: 0;
  cursor: default;
  display: block;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

export const ModalContainer = styled.div<Props>`
  background: #ffffff;
  border-radius: 0.1rem;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  max-width: 850px;
  padding: 0 0.8rem;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0.2rem 0.5rem rgba(48, 55, 66, 0.3);
  ${props =>
    props.active
      ? 'animation: slide-down 0.3s ease 1;'
      : 'animation: vanished 0.3s ease 1;'}
  @keyframes slide-down {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0%);
    }
  }
  @keyframes vanished {
    0% {
      display: flex;
      transform: scale(1);
    }
    100% {
      display: none;
      transform: scale(0);
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #303742;
  padding: 20px 5px 10px 5px;
`;

export const ModalTitle = styled.span`
  font-size: 22px;
  font-weight: 500;
`;

export const ModalClose = styled.a`
  float: right !important;
  text-decoration: none !important;
  cursor: pointer;
  font-size: 0.75rem;
`;

export const ModalBody = styled.div`
  overflow-y: auto;
  padding: 15px 10px 20px 10px;
  position: relative;
`;
