import {LinkObject} from '../shared/types'

export type ParsedLink = {url: string; target: string}

export default function parseLink(link: LinkObject): ParsedLink {
  const parsed: ParsedLink = {url: null, target: null}
  if (typeof link === 'string') {
    parsed.url = link
  } else {
    if (link?.value) {
      if (link?.type === 'page') {
        parsed.url = typeof link.value === 'string' ? `/${link.value}` : link.value[0]?.url
      } else {
        parsed.url = typeof link.value === 'string' ? link.value : link.value[0]?.url
      }
      parsed.url = sanitizeUrl(parsed.url)
    }
    if (link?.popup === true) {
      parsed.target = '_blank'
    }
  }
  return parsed
}

const defaultLocale = 'en'
const secondaryDomains = ['https://smpx-admin.tjikko-studio.a2hosted.com', 'http://127.0.0.1:8000']
const primaryDomain = 'https://smartpixel.com'

function sanitizeUrl(url: string) {
  if (!url || typeof url !== 'string') {
    return url
  }
  // Use primary domain
  secondaryDomains.forEach((domain) => {
    if (url.substring(0, domain.length) === domain) {
      url = url.replace(domain, primaryDomain)
    }
  })
  if (url.substring(0, primaryDomain.length) === primaryDomain) {
    url = url.replace(`/${defaultLocale}/`, '/') // Remove default language prefix
    url = url.replace(primaryDomain, '') // prefer relative paths
  }
  return url
}
