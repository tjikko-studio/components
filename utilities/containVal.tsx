export default function containVal (
  obj ?: any[],
  key?: string,
  values ?: any[]
): boolean {
  const keys = obj.map((value) => {
    return value[key]
  })
  return keys.some((item) => {
    return values.includes(item)
  })
}
