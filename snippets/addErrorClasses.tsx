export default function addErrorClasses (
  isError: boolean,
  classes: string[]
): void {
  if (isError) {
    classes.push(
      'drop-shadow-sm',
      'outline-none',
      'ring-2',
      'dark:ring-red-500',
      'ring-red-600',
      'border-transparent'
    )
  }
}
