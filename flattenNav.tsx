import isArray from 'lodash.isarray'
import isPlainObject from 'lodash.isplainobject'
import mapValues from 'lodash.mapvalues'
import mixin from 'lodash.mixin'
import toArray from 'lodash.toarray'
/*
 * Eventually this file should be obsoleted
 * It just works around the lack of proper interfacing
 * between Kirby's data structures and our components
 */

/*
 * Flatten requested object and it's props
 */
export const flattenContent = (val: Record<string, unknown>, prop: string, level = false): Record<string, unknown> => {
  const content: Record<string, unknown> = {}
  let objParse = null

  switch (level) {
    case false:
      objParse = val[prop]
      break
    case true:
      ;[objParse] = val[prop] as unknown[]
      break
    default:
      objParse = val[prop]
      break
  }

  Object.entries(objParse).forEach(([key, value]) => {
    content[key] = value
  })

  delete val[prop]
  return Object.assign(val, content)
}

/*
 * To flatten links
 */
export const flattenLink = (val: {
  link: string
  location: string
  link_external?: string
  link_internal?: {url: string}[]
}): {link: string} => {
  val.link = ''
  if (val.location === 'external') {
    val.link = val.link_external
  } else if (val.location === 'internal' && val.link_internal[0]) {
    val.link = val.link_internal[0].url
  }
  delete val.link_external
  delete val.link_internal

  return val
}

/*
 * Navigation flatten function
 */
export const flattenNav: any = (obj: any, page?: {blocks?: boolean}) => {
  const blocks = page?.blocks

  const {deeply}: any = mixin({
    deeply(map) {
      return (currentObj: any, fn: (val: any) => any) => {
        return map(
          mapValues(currentObj, (value) => {
            let final = value
            try {
              final = JSON.parse(final)
            } catch (ex) {
              // Not json, ignore
            }
            const vIsArray = isArray(final)
            if (isPlainObject(final) || vIsArray) {
              const mapped = deeply(map)(final, fn)
              final = vIsArray ? toArray(mapped) : mapped
            }
            return final
          }),
          fn
        )
      }
    }
  })

  return toArray(
    deeply(mapValues)(obj, (val: any) => {
      let final = val

      if (isPlainObject(final) && 'type' in final && 'id' in final && final?.content?.content) {
        final = flattenContent(final, 'content')
      }
      if (isPlainObject(final) && 'location' in final) {
        final = flattenLink(final)
      }
      if (isPlainObject(final) && final.type === 'NavigationLink') {
        final = flattenContent(final, 'content')
      }
      if (blocks === true && isPlainObject(final) && final.width && final.blocks.length) {
        final = flattenContent(final, 'blocks', true)
      }
      if (isPlainObject(final) && final.type === 'NavigationLogo' && final.content.image) {
        final.content.image = final.content.image[0]
      }
      return final
    })
  )
}

/*
 * Language data normalization
 */
export const languageValUpdates: any = (language: any, domain?: string, slug?: []) => {
  Object.entries(language).forEach(([key, value]) => {
    if (key === 'name') {
      language.label = value
      delete language.name
    }
    if (key === 'url') {
      const url = domain && slug ? `${domain}/${language.code}/${slug.join('/')}` : value
      language.link = url
      delete language.url
    }
  })

  return [language, language.default === true]
}

export interface Language {
  default: boolean
  label: string
  code: string
}

export const languageParser: any = (languages: Language[], domain?: string, slug?: [], locale: string) => {
  let defaultLanguage: any = null
  let current: string = null
  const content = languages.map((language) => {
    const [updatedLanguage, isDefault] = languageValUpdates(language, domain, slug)
    if (isDefault) {
      defaultLanguage = updatedLanguage.value || null
    }
    if (language.code === locale) {
      current = language.label
    }
    return updatedLanguage
  })
  return {
    defaultLanguage,
    current,
    content: [
      {
        label: '',
        content
      }
    ]
  }
}

export default flattenNav
