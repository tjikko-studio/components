export default function addSuccessClasses(isSuccess: boolean, classes: string[]): void {
  if (isSuccess) {
    classes.push('dark:ring-green-500', 'ring-green-600')
  }
}
