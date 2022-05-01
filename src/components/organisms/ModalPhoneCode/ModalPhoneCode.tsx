/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import { countries, Country } from '../../../data/Paises';
import Modal from '../../atoms/Modal/Modal';
import ItemModalList from '../../molecules/ItemModalList/ItemModalList';
import { InputContainer } from '../InputCode/styled';
import { ReactComponent as SearchSvg } from '../../../assets/search.svg';
import { ButtonSearch, ListCountries } from './styled';
import { cloneJAR } from '../../../utils/array';
interface Props {
  active: boolean;
  setActive: (value: boolean) => void;
  onChange: (value: Country | undefined) => void;
}

const ModalPhoneCode = ({
  active,
  setActive,
  onChange,
}: Props): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const [options, setOptions] = useState<Country[]>([]);

  const onSearch = (): void => {
    if (search.length > 2) {
      const _options = cloneJAR(countries);
      return setOptions(
        cloneJAR(
          _options.filter((x: Country) =>
            x.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      );
    }
    return setOptions(cloneJAR(countries));
  };

  useEffect(() => {
    onSearch();
  }, [search]);

  return (
    <Modal
      title='Select country'
      active={active}
      onHide={(): void => setActive(false)}>
      <InputContainer style={{ width: '100%' }}>
        <input
          placeholder='Serch country...'
          value={search}
          onChange={(e): void => setSearch(e.target.value)}
        />
        <ButtonSearch>
          <SearchSvg width={12} height={12} fill='#c3c3c3' />
        </ButtonSearch>
      </InputContainer>
      <ListCountries>
        {options.map((item, key) => (
          <ItemModalList
            key={key}
            item={item}
            onChange={(): void => {
              onChange(item);
              setActive(false);
            }}
          />
        ))}
      </ListCountries>
    </Modal>
  );
};

export default ModalPhoneCode;
