import {LinkObject} from '../shared/types'

export type ParsedLink = {url: string; target: string}

export default function parseLink(link: LinkObject): ParsedLink {
  const parsed: ParsedLink = {url: null, target: null}
  if (typeof link === 'string') {
    parsed.url = link
  } else {
    if (link?.value) {
      parsed.url = typeof link.value === 'string' ? `/${link.value}` : link.value[0]?.url
    }
    if (link?.popup === true) {
      parsed.target = '_blank'
    }
  }
  return parsed
}
