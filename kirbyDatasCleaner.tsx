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
 * Like `JSON.parse`, but returns `null` instead of throwing on invalid input
 */
export const nonThrowingJsonParse = (str: string): any => {
  try {
    return JSON.parse(str)
  } catch (error) {
    return null
  }
}

/*
 * Get the srcset string from Kirby and return src size prop
 */
export const getSrcSizes = (srcSet: string): any => {
  if (srcSet) {
    const matches = srcSet.match(/[0-9]{2,4}(?=w\b)/gi)
    if (matches) {
      return matches
        .map((width) => {
          return `(min-width: ${width}w) ${width}px`
        })
        .join(', ')
    }
  }
  return ''
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
      if (isPlainObject(final) && final.type === 'NavigationLink') {
        final = flattenContent(final, 'content')
      }
      if (blocks === true && isPlainObject(final) && final.width && final.blocks && final.blocks.length) {
        final = flattenContent(final, 'blocks', true)
      }
      if (isPlainObject(final) && final.type === 'NavigationLogo' && final.content.image) {
        final.content.image = isArray(final.content.image) ? final.content.image[0] : final.content.image
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

export const languageParser: any = (languages: Language[], domain?: string, slug?: [], locale?: string) => {
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

export const fixAlt = (image: any) => {
  return image
    ? {
        ...image,
        content: {
          ...image.content,
          alt: image?.info
        }
      }
    : null
}

export const flattenImages = (obj: any) => {
  const {deeply}: any = mixin({
    deeply: function (map: Function) {
      return function (obj: any, fn: Function) {
        return map(
          mapValues(obj, function (val: any) {
            if (isPlainObject(val) || isArray(val)) {
              return isArray(val) ? toArray(deeply(map)(val, fn)) : deeply(map)(val, fn)
            } else {
              return val
            }
          }),
          fn
        )
      }
    }
  })
  return toArray(
    deeply(mapValues)(obj, function (val: any, key: string) {
      if (key === 'image' || key === 'media') {
        if (isArray(val) && typeof val[0] !== undefined) {
          return fixAlt(val[0])
        }
      }
      return val
    })
  )
}
