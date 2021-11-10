export function gridAreas(area: string, start: number, end: number): any {
  return start != null && end != null ? {gridArea: `${area}-${start} / ${area}-${start} / ${area}-${start} / ${area}-${end}`} : null
}

export function isGridAreas(start: number, end: number): any {
  return start != null && end != null
}
