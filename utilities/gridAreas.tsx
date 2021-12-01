export function gridAreas(area: string, start?: number, end?: number): {[gridArea: string]: string} | null {
  return isGridAreas(start, end) ? {gridArea: `${area}-${start} / ${area}-${start} / ${area}-${start} / ${area}-${end}`} : null
}

export function isGridAreas(start?: number, end?: number): boolean {
  return typeof start === 'number' && typeof end === 'number'
}
