/* eslint-disable max-len */
import {ReactInVue} from 'vuera'
import blocks from './blocks'
import collections from './collections'
import form from './form'
import layouts from './layouts'
import nav from './nav'
import textStyles from './textStyles'
import {Button} from './Button'
import flattenNav, {languageParser} from '../flattenNav'

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
  languageParser
}
