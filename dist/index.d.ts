import { SizeType } from './components/atoms/Modal/styled';
import { Country } from './data/Paises';
import { ThemeProps } from './data/Theme';
export declare type TypeValueExpected = Country | undefined;
interface Props {
    value: TypeValueExpected;
    onChange: (value: TypeValueExpected) => void;
    disableModal?: boolean;
    size?: SizeType;
    theme?: ThemeProps;
    darkMode?: boolean;
}
export declare const PhoneCode: ({ value, onChange, disableModal, size, theme, }: Props) => JSX.Element;
export {};
