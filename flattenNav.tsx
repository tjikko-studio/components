import mixin from 'lodash.mixin'
import mapValues from 'lodash.mapvalues'
import isArray from 'lodash.isarray'
import isPlainObject from 'lodash.isplainobject'
import toArray from 'lodash.toarray'
// Eventually this file should be obsoleted
// It is simply working around a lack of proper interfacing between Kirby's data structures and our components

/*
 * Flatten requested object and it's props
 */
export const flattenContent = (val: any, prop: string, level = false) => {
  const content:any = {}
  let objParse = null

  switch (level) {
    case false:
      objParse = val[prop]
      break
    case true:
      objParse = val[prop][0]
      break
    default:
      objParse = val[prop]
      break
  }

  Object.entries(objParse).map(([key, value]) => {
    content[key] = value
  })

  delete val[prop]
  return Object.assign(val, content)
}

/*
 * To flatten links
 */
export const flattenLink = (val: any) => {
  val['link'] = ''
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
export const flattenNav = (obj: any, p?: {blocks?: boolean}) => {
  const blocks = p && p.blocks != undefined ? p.blocks : false

  const {deeply}:any = mixin({
    deeply: function (map) {
      return function (obj:any, fn:Function) {
        return map(mapValues(obj, function (v, k) {
          try {
            v = JSON.parse(v)
          } catch (ex) {
            // Not json, ignore
          }
          const vIsArray = isArray(v)
          if (isPlainObject(v) || vIsArray) {
            const mapped = deeply(map)(v, fn)
            v = vIsArray ? toArray(mapped) : mapped
          }
          return v
        }), fn)
      }
    },
  })

  return toArray(
    deeply(mapValues)(obj, function (val: any, key: string) {
      if (isPlainObject(val) && 'type' in val && 'id' in val && val.content.content) {
        val = flattenContent(val, 'content')
      }
      if (isPlainObject(val) && 'location' in val) {
        val = flattenLink(val)
      }
      if (isPlainObject(val) && val.type === 'NavigationLink') {
        val = flattenContent(val, 'content')
      }
      if (blocks === true && isPlainObject(val) && val.width && val.blocks.length >= 1) {
        val = flattenContent(val, 'blocks', true)
      }
      return val
    })
  )
}

/*
 * Language data normalization
 */
export const languageValUpdates = (language: any) => {
  Object.entries(language).map(([key, value]) => {
    if (key === 'name') {
      language['label'] = value
      delete language['name']
    }
    if (key === 'url') {
      language['link'] = value
      delete language['url']
    }
  })

  return [language, language.default === true]
}

export interface Language {
  default: boolean
  label: string
}

export const languageParser = (languages:Language[]) => {
  let defaultLanguage:any = null
  const content = languages.map((language) => {
    const [updatedLanguage, isDefault] = languageValUpdates(language)
    if (isDefault) {
      defaultLanguage = updatedLanguage.value || null
    }
    return updatedLanguage
  })
  return {defaultLanguage, content: [{label: '', content}]}
}

export default flattenNav
