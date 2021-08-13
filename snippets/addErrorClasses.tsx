export default function (isError: boolean, classes: string[]) {
  if (isError) {
    classes.push('drop-shadow-sm', 'outline-none', 'ring-2', 'dark:ring-red-500', 'ring-red-600', 'border-transparent')
  }
}
