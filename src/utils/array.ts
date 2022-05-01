// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cloneJAR = (arr: any[]): any[] => {
  return JSON.parse(JSON.stringify(arr));
};
