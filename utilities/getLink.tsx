import {LinkObject} from '../shared/types'

export default function getLink(link: LinkObject): string {
  if (typeof link === 'string') {
    return link
  } else if (link?.value) {
    return typeof link.value === 'string' ? link.value : link.value[0]?.url
  } else {
    return null
  }
}
export function getTarget(link: LinkObject): string {
  if (typeof link === 'string') {
    return null
  } else if (link?.popup) {
    return link?.popup === true ? '_blank' : null
  } else {
    return null
  }
}
