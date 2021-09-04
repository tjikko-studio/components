export const extractCombo = (thing: string) => {
    return thing ? thing.split('|') : [null, null];
};
