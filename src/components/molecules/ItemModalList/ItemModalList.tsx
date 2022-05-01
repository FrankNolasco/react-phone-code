import React from 'react';
import { Country } from '../../../data/Paises';
import { ItemModalListStyled } from './styled';

interface Props {
  item: Country;
  onChange: () => void;
}

const ItemModalList = ({ item, onChange }: Props): JSX.Element => {
  return (
    <ItemModalListStyled onClick={(): void => onChange()}>
      <img
        src={`https://flagcdn.com/32x24/${item.iso2.toLowerCase()}.png`}
        srcSet={`https://flagcdn.com/32x24/${item.iso2.toLowerCase()}.png 2x,
                                        https://flagcdn.com/48x36/${item.iso2.toLowerCase()}.png 3x`}
        width='16'
        height='12'
        alt='flag'
      />
      <span>(+{item.phone_code})</span>
      <span>{item.name}</span>
    </ItemModalListStyled>
  );
};

export default ItemModalList;
