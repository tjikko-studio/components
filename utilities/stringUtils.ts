export default function extractCombo(thing: string) {
    return thing ? thing.split('|') : [null, null];
};
