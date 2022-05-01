import { Country } from '../../data/Paises';
interface Props {
    active: boolean;
    setActive: (value: boolean) => void;
    onChange: (value: Country | undefined) => void;
}
declare const ModalPhoneCode: ({ active, setActive, onChange, }: Props) => JSX.Element;
export default ModalPhoneCode;
