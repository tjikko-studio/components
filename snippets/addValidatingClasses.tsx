export default function addValidatingClasses(isValidating: boolean, classes: string[]): void {
  if (isValidating) {
    classes.push('dark:ring-blue-500', 'ring-blue-600')
  }
}
