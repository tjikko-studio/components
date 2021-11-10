export function gridAreas(start?: number, end?: number, area?: string): {[gridarea: string]: string} | null {
  return start !== null && end !== null ? {gridArea: `${area}-${start} / ${area}-${start} / ${area}-${start} / ${area}-${end}`} : null
}
