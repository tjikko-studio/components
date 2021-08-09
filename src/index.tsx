import blocks from './blocks'

import form from './form'

import nav from './nav'

import textStyles from './textStyles'

import {Button} from './Button'
import {List} from './List'

export default {
  Button,
  List,
  ...blocks,
  ...form,
  ...nav,
  ...textStyles
}
