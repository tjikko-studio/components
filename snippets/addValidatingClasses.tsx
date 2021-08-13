export default function (isValidating: boolean, classes: string[]) {
  if (isValidating) {
    classes.push('dark:ring-blue-500', 'ring-blue-600')
  }
}
