import { SizeType } from '../components/atoms/Modal/styled';
declare type DefSize = {
    sm: string;
    md: string;
    lg: string;
};
export interface ThemeProps {
    size?: SizeType;
    colors?: {
        [key: string]: string;
    };
    fonts?: {
        [key: string]: string;
    };
    borderRadius?: {
        [key: string]: string;
    };
    spacing?: DefSize;
    fontSizes?: DefSize;
    [key: string]: unknown;
}
export declare const Theme: ThemeProps;
export declare const darkTheme: {
    colors: {
        text: string;
        background: string;
        borders: string;
    };
    size?: "sm" | "md" | "lg" | undefined;
    fonts?: {
        [key: string]: string;
    } | undefined;
    borderRadius?: {
        [key: string]: string;
    } | undefined;
    spacing?: DefSize | undefined;
    fontSizes?: DefSize | undefined;
};
export {};
