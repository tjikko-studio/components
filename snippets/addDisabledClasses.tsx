export default function addDisabledClasses(isDisabled: boolean, classes: string[]): void {
  if (isDisabled) {
    classes.push('dark:border-gray-500')
  } else {
    classes.push('hover:border-gray-300', 'dark:border-gray-400')
  }
}
