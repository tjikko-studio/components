export function gridAreas(area?: string, start?: number, end?: number): {[gridarea: string]: string} | null {
  return isGridAreas(start, end) ? {gridArea: `${area}-${start} / ${area}-${start} / ${area}-${start} / ${area}-${end}`} : null
}

export function isGridAreas(start: number, end: number): boolean {
  return start && end ? true : false
}
