const nbGridColumns = 12

export default function getWidth(width: string, length = nbGridColumns): number {
  const [divisor, denominator] = width.split('/').map((nbStr) => {
    return parseInt(nbStr, 10)
  })
  return (length / denominator) * divisor
}
