import { MouseEventHandler } from 'react';
import { Country } from '../../../data/Paises';
interface Props {
    onChange: (value: Country | undefined) => void;
    value: Country | undefined;
    onClickDown?: MouseEventHandler;
    baseFlagUri?: string;
    extFlagUri?: string;
}
declare const InputCode: ({ onClickDown, value, onChange, baseFlagUri, extFlagUri, }: Props) => JSX.Element;
export default InputCode;
