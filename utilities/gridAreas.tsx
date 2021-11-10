export function gridAreas(
  start: number = undefined,
  end: number = undefined,
  area: string = undefined
): {[gridarea: string]: string} | null {
  return start && end ? {gridArea: `${area}-${start} / ${area}-${start} / ${area}-${start} / ${area}-${end}`} : null
}
