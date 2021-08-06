import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../tailwind.config.js'

const tailwind = resolveConfig(tailwindConfig)

export default function useBreakpoint (name) {
  return useMediaPredicate(`(max-width: ${tailwind.theme.screens[name]})`)
}
