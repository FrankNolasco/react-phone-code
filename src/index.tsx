import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import InputCode from './components/organisms/InputCode/inputCode';
import ModalPhoneCode from './components/organisms/ModalPhoneCode/ModalPhoneCode';
import { Country } from './data/Paises';
import { darkTheme } from './data/Theme';

export type TypeValueExpected = Country | undefined;

interface Props {
  value: TypeValueExpected;
  onChange: (value: TypeValueExpected) => void;
  disableModal?: boolean;
}

export const PhoneCode = ({
  value,
  onChange,
  disableModal,
}: Props): JSX.Element => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <ThemeProvider theme={darkTheme}>
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
