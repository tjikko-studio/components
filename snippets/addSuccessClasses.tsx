export default function (isSuccess: boolean, classes: string[]) {
  if (isSuccess) {
    classes.push('dark:ring-green-500', 'ring-green-600')
  }
}
