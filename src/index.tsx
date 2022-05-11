import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { SizeType } from './components/atoms/Modal/styled';
import InputCode from './components/organisms/InputCode/inputCode';
import ModalPhoneCode from './components/organisms/ModalPhoneCode/ModalPhoneCode';
import { Country } from './data/Paises';
import { Theme, ThemeProps } from './data/Theme';

export type TypeValueExpected = Country | undefined;

interface Props {
  value?: TypeValueExpected;
  onChange: (value: TypeValueExpected) => void;
  disableModal?: boolean;
  size?: SizeType;
  theme?: ThemeProps;
}

export const PhoneCode = ({
  value,
  onChange,
  disableModal,
  size,
  theme,
}: Props): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <ThemeProvider theme={{ ...Theme, ...theme, size }}>
      <InputCode
        value={value}
        onChange={onChange}
        onClickDown={
          disableModal ? undefined : (): void => setModalActive(true)
        }
      />
      {disableModal || (
        <ModalPhoneCode
          active={modalActive}
          setActive={setModalActive}
          onChange={onChange}
        />
      )}
    </ThemeProvider>
  );
};
