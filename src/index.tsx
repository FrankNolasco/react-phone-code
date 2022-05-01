import React, { Fragment, useState } from 'react';
import InputCode from './components/organisms/InputCode/inputCode';
import ModalPhoneCode from './components/organisms/ModalPhoneCode/ModalPhoneCode';
import { Country } from './data/Paises';

export const PhoneCode = (): JSX.Element => {
  const [value, setValue] = useState<Country | undefined>();
  const [modalActive, setModalActive] = useState(false);
  return (
    <Fragment>
      <InputCode
        value={value}
        onChange={setValue}
        onClickDown={(): void => setModalActive(true)}
      />
      <ModalPhoneCode
        active={modalActive}
        setActive={setModalActive}
        onChange={setValue}
      />
    </Fragment>
  );
};
