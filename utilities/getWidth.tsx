export default function getWidth (width: string, length = 12): number {
  const [divisor, denominator] = width.split('/').map(x => parseInt(x, 10))
  return length / denominator * divisor
}
