export default function focusClasses (
  classes: string,
  isFocused: boolean
): string {
  const classNames: string[] = classes.split(' ')
  return classNames.map((className: string) => {
    return `focus:${className}${isFocused ? ` ${className}` : ''}`
  }).join(' ')
}
