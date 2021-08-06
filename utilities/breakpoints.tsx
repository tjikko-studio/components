import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const tailwind = resolveConfig(tailwindConfig);


export function xxs () {
  const xxs = useMediaPredicate(`(max-width: ${tailwind.theme.screens.xxs})`)
}

export function xs () {
  const xs = useMediaPredicate(`(max-width: ${tailwind.theme.screens.xs})`)
}

export function sm () {
  const sm = useMediaPredicate(`(max-width: ${tailwind.theme.screens.sm})`)
}

export function md () {
  const md = useMediaPredicate(`(max-width: ${tailwind.theme.screens.md})`)
}

export function lg () {
  const lg = useMediaPredicate(`(max-width: ${tailwind.theme.screens.lg})`)
}

export function xl () {
  const xl = useMediaPredicate(`(max-width: ${tailwind.theme.screens.xl})`)
}

/* export function 2xl () {
  const 2xl = useMediaPredicate(`(max-width: ${tailwind.theme.screens.2xl})`)
} */