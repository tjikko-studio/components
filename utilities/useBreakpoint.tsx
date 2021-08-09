import {useMediaPredicate} from 'react-media-hook'
import resolveConfig from 'tailwindcss/resolveConfig'
import {TailwindConfig} from 'tailwindcss/tailwind-config'
import tailwindConfig from '../tailwind.config.js'

const config: TailwindConfig = {
  ...tailwindConfig
}
const tailwind = resolveConfig(config)

export default function useBreakpoint (name: string): boolean {
  return useMediaPredicate(`(max-width: ${tailwind.theme.screens[name]})`)
}
