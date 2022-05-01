import { Country } from '../../../data/Paises';
interface Props {
    item: Country;
    onChange: () => void;
}
declare const ItemModalList: ({ item, onChange }: Props) => JSX.Element;
export default ItemModalList;
