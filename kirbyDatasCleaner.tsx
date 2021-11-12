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
      if (blocks === true && isPlainObject(final) && final.width && final.blocks.length) {
        final = flattenContent(final, 'blocks', true)
      }
      if (isPlainObject(final) && final.type === 'NavigationLogo' && final.content.image) {
        final.content.image = final.content.image?.[0]
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
      if (key === 'image' && isArray(val) && typeof val[0] !== undefined) {
        return val[0]
      } else {
        return val
      }
    })
  )
}