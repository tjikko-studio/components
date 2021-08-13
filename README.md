# tjikko/components

## Install
This is a private package so for now you'll need to ask for access to the npm org…
```
npm i @tjikko/components
```

## Usage
```js
import {CTA} from '@tjikko/components'

export default function ReactComponent () {
  return (
    <CTA {...ctaProps} />
  )
}
```

## Docs coming soon
For now, the best way to get documentation is to clone the (also private) [repo](https://github.com/tjikko-studio/components) and launch Storybook

## Storybook
You can play around with the components in Storybook and that's also where you'll find documentation for the components, until we host them somewhere more accessible. Not that there are a lot of docs yet…

To launch Storybook:
```
git clone git@github.com:tjikko-studio/components.git
cd components
npm i
npm run dev
```

## Publishing
Publishing a release on GitHub will automatically publish the component library to npm as @tjikko/components (see .github/workflows/publish.yml)

For `npm publish` to succeed, you need a different version every time, so don't forget to use `npm version patch`, `npm version minor` or `npm version major`.
