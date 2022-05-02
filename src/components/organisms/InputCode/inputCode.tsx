import React, { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import { countries, Country } from '../../../data/Paises';
import { ButtonDown, FlagImg, InputContainer } from './styled';
import { ReactComponent as AngleDown } from '../../../assets/angulo-hacia-abajo.svg';
import { ReactComponent as MarkDefault } from '../../../assets/marcador.svg';
import { getFlagUrl } from '../../../utils/utils';

interface Props {
  onChange: (value: Country | undefined) => void;
  value: Country | undefined;
  onClickDown?: MouseEventHandler;
  baseFlagUri?: string;
  extFlagUri?: string;
}

const InputCode = ({
  onClickDown,
  value,
  onChange,
  baseFlagUri,
  extFlagUri,
}: Props): JSX.Element => {
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
      <FlagImg touchDisable={onClickDown === undefined} onClick={onClickDown}>
        {flag && (
          <img
            src={getFlagUrl(flag, baseFlagUri, extFlagUri)}
            width='16'
            height='12'
            alt='flag'
          />
        )}
        {!flag && <MarkDefault className='mark' width={16} height={12} />}
        {onClickDown !== undefined && (
          <ButtonDown>
            <AngleDown
              width={12}
              height={12}
              fill='#7e7e7e'
              alignmentBaseline='auto'
            />
          </ButtonDown>
        )}
      </FlagImg>
      <span>+</span>
      <input
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
