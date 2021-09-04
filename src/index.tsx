import blocks from './blocks'
import collections from './collections'
import form from './form'
import nav from './nav'
import textStyles from './textStyles'
import {Button} from './Button'

export default {
  Button,
  ...blocks,
  ...collections,
  ...form,
  ...nav,
  ...textStyles
}

/**
 * # Tailwind-hacks
 *
 * The following class names may be created dynamically but may otherwise not appear in the code.
 * To make sure tailwind will include them in the bundle, we mention them here.
 * [more info](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html)
 *
 * col-span-1
 * col-span-2
 * col-span-3
 * col-span-4
 * col-span-5
 * col-span-6
 * col-span-7
 * col-span-8
 * col-span-9
 * col-span-10
 * col-span-11
 * col-span-12
 *
 * sm:col-span-1
 * sm:col-span-2
 * sm:col-span-3
 * sm:col-span-4
 * sm:col-span-5
 * sm:col-span-6
 * sm:col-span-7
 * sm:col-span-8
 * sm:col-span-9
 * sm:col-span-10
 * sm:col-span-11
 * sm:col-span-12
 *
 * justify-center justify-left
 *
 * align-center align-bottom
 *
 * text-left text-center text-right
 *
 * w-full w-screen w-min w-max w-auto
 *
 * h-full
 * h-1 h-2 h-3 h-4 h-5 h-6 h-7 h-8 h-9 h-10 h-11 h-12 h-14 h-16 h-20 h-24 h-28 h-32 h-36 h-40 h-44 h-48 h-52 h-56 h-60 h-64 h-72 h-80 h-96
 * h-1/2 h-1/4 h-2/3 h-1/4 h-2/4 h-3/4 h-1/5 h-2/5 h-3/5 h-4/5 h-1/6 h-2/6 h-3/6 h-4/6 h-5/6
 * h-screen h-auto
 *
 * grid-areas-form grid-cols-form grid-rows-form
 * sm:grid-areas-form sm:grid-cols-form sm:grid-rows-form
 *
 * sm:grid-in-label-1
 * sm:grid-in-label-2
 * sm:grid-in-label-3
 * sm:grid-in-label-4
 * sm:grid-in-label-5
 * sm:grid-in-label-6
 * sm:grid-in-label-7
 * sm:grid-in-label-8
 * sm:grid-in-label-9
 * sm:grid-in-label-10
 * sm:grid-in-label-11
 * sm:grid-in-label-12
 *
 * sm:grid-in-control-1
 * sm:grid-in-control-2
 * sm:grid-in-control-3
 * sm:grid-in-control-4
 * sm:grid-in-control-5
 * sm:grid-in-control-6
 * sm:grid-in-control-7
 * sm:grid-in-control-8
 * sm:grid-in-control-9
 * sm:grid-in-control-10
 * sm:grid-in-control-11
 * sm:grid-in-control-12
 *
 * sm:grid-in-info-1
 * sm:grid-in-info-2
 * sm:grid-in-info-3
 * sm:grid-in-info-4
 * sm:grid-in-info-5
 * sm:grid-in-info-6
 * sm:grid-in-info-7
 * sm:grid-in-info-8
 * sm:grid-in-info-9
 * sm:grid-in-info-10
 * sm:grid-in-info-11
 * sm:grid-in-info-12
 *
 * sm:grid-in-error-1
 * sm:grid-in-error-2
 * sm:grid-in-error-3
 * sm:grid-in-error-4
 * sm:grid-in-error-5
 * sm:grid-in-error-6
 * sm:grid-in-error-7
 * sm:grid-in-error-8
 * sm:grid-in-error-9
 * sm:grid-in-error-10
 * sm:grid-in-error-11
 * sm:grid-in-error-12
 */
