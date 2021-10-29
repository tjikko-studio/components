import {ReactInVue} from 'vuera'

import flattenNav, {flattenLinks, languageParser} from '../flattenNav'
import blocks from './blocks'
import {Button} from './Button'
import collections from './collections'
import form from './form'
import layouts from './layouts'
import nav from './nav'
import textStyles from './textStyles'

export default {
  ReactInVue,
  Button,
  ...blocks,
  ...collections,
  ...form,
  ...layouts,
  ...nav,
  ...textStyles,
  flattenNav,
  flattenLinks,
  languageParser
}
