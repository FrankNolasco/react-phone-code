import { FLAG_BASE_URI, FLAG_EXT } from '../data/Constants';

export const getFlagUrl = (
  iso2: string,
  base?: string,
  ext?: string
): string => {
  return `${base || FLAG_BASE_URI}${iso2.toLowerCase()}${ext || FLAG_EXT}`;
};
