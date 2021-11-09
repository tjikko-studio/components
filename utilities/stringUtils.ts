export default function extractCombo(thing: string, separ: string = '|'): (string | null)[] {
  return thing
    ? thing.split(separ).map(function (item: any) {
        return Number(item) ? parseInt(item) : item
      })
    : [null, null]
}
