import { Country } from './data/Paises';
export declare type TypeValueExpected = Country | undefined;
interface Props {
    value: TypeValueExpected;
    onChange: (value: TypeValueExpected) => void;
    disableModal?: boolean;
}
export declare const PhoneCode: ({ value, onChange, disableModal, }: Props) => JSX.Element;
export {};
