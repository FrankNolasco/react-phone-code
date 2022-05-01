import React, { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { countries, Country } from '../../../data/Paises';
import { ButtonDown, FlagImg, InputContainer } from './styled';
import { ReactComponent as AngleDown } from '../../../assets/angulo-hacia-abajo.svg';
import { ReactComponent as MarkDefault } from '../../../assets/marcador.svg';

interface Props {
  onChange: (value: Country | undefined) => void;
  value: Country | undefined;
  onClickDown: MouseEventHandler;
}

const InputCode = ({ onClickDown, value, onChange }: Props): JSX.Element => {
  const [inputValue, setValue] = useState('');
  const options: Country[] = useMemo(
    () => countries.filter(x => x.phone_code !== '' && x.iso2.length === 2),
    []
  );
  const [flag, setFlag] = useState<string | undefined>();

  const search = (): Country | undefined => {
    const finder = options.filter(el => el.phone_code === inputValue);
    if (finder.length !== 1) {
      return undefined;
    }
    return finder[0];
  };

  useEffect(() => onChange(search()), [inputValue]);

  useEffect(() => {
    if (value) {
      setFlag(value.iso2.toLowerCase());
      value.phone_code !== inputValue && setValue(value.phone_code);
    } else {
      setFlag('');
    }
  }, [value]);

  return (
    <InputContainer>
      <FlagImg onClick={onClickDown}>
        {flag && (
          <img
            src={`https://flagcdn.com/48x36/${flag}.png`}
            width='16'
            height='12'
            alt='flag'
          />
        )}
        {!flag && (
          <MarkDefault className='mark' width={16} height={12} fill='#424242' />
        )}
        <ButtonDown>
          <AngleDown
            width={12}
            height={12}
            fill='#7e7e7e'
            alignmentBaseline='auto'
          />
        </ButtonDown>
      </FlagImg>
      <span>+</span>
      <input
        type='number'
        placeholder='123'
        value={inputValue}
        onChange={(e): void => {
          setValue(e.target.value);
        }}
      />
    </InputContainer>
  );
};

export default InputCode;
