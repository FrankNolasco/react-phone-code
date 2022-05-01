import { MouseEventHandler } from 'react';
import { Country } from '../../data/Paises.js';
interface Props {
    onChange: (value: Country | undefined) => void;
    value: Country | undefined;
    onClickDown: MouseEventHandler;
}
declare const InputCode: ({ onClickDown, value, onChange }: Props) => JSX.Element;
export default InputCode;
