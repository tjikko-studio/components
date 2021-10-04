export default function containVal<T extends string, U extends unknown>(obj?: Record<T, U>[], key?: T, values?: U[]): boolean {
  const keys = obj.map((value) => {
    return value[key]
  })
  return keys.some((item) => {
    return values.includes(item)
  })
}
