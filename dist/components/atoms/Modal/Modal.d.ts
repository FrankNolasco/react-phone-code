interface Props {
    children: JSX.Element | JSX.Element[];
    active: boolean;
    onHide: () => void;
    title?: string | JSX.Element;
}
declare const Modal: ({ children, title, active, onHide }: Props) => JSX.Element;
export default Modal;
