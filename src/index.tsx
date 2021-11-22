import {ReactInVue} from 'vuera'

import {flattenImages, flattenNav, languageParser, nonThrowingJsonParse} from '../kirbyDatasCleaner'
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
  flattenImages,
  flattenNav,
  languageParser,
  nonThrowingJsonParse
}
