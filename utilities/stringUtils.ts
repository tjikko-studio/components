export default function extractCombo(thing: string): (string | null)[] {
  return thing ? thing.split('|') : [null, null]
}
