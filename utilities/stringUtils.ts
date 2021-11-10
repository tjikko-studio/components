export default function extractCombo(thing: string, separ: string = '|'): (string | null)[] {
  return thing ? thing.split(separ) : [null, null]
}
