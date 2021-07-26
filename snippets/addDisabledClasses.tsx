export default function addDisabledClasses (isDisabled, classes) {
  if (isDisabled) {
    classes.push('dark:border-gray-500')
  } else {
    classes.push('hover:border-gray-300', 'dark:border-gray-400')
  }
}
