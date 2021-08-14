# tjikko/components

## Install
This is a private package so for now you'll need to ask for access to the `@tjikko` npm org…
```
npm i @tjikko/components
```

## Usage
```js
import {FAQ} from '@tjikko/components'

export default function ReactComponent () {
  return (
    <FAQ {...faqProps} />
  )
}
```

## Docs coming soon
For now, the best way to get documentation is to look at our [Storybook deployment](https://smpx-storybook.tjikko-studio.a2hosted.com) (coming soon)
or clone the (also private) [repo](https://github.com/tjikko-studio/components) and launch Storybook manually (see below).

## Storybook
You can play around with the components in Storybook and that's also where you'll find documentation for the components, until we host them somewhere more accessible. Not that there are a lot of docs yet…

To launch Storybook:
```
git clone git@github.com:tjikko-studio/components.git
cd components
npm i
npm run build:all
node launchStorybook.js
```

## Dev
To develop the component library, it helps to build it and storybook in dev mode with live-reload and everything. For that you'll probably want two terminals open, one for each:

_terminal for component library_:
```
npm run dev
```

_terminal from Storybook_:
```
npm run dev:storybook
```

## npm link
As long as they have the right permissions, consumers of this library should be able to simply `npm i @tjikko/components` and use the components as documented. However, if development needs to happen in parallel here and in a consumer, it can be helpful to `npm link` the repos together ([docs](https://docs.npmjs.com/cli/v7/commands/npm-link)).

In this repo:
```
npm link
```

In the consumer repo, after `npm i @tjikko/components`:
```
npm link @tjikko/components
```

## Publishing
Publishing a release on GitHub will automatically publish the component library to npm as `@tjikko/components` and relaunch the Storybook instance running on our A2 servers with the updated components (this parts doesn't quite work just yet).

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

_Note_: For `npm publish` to succeed, you need a different version every time, so don't forget to use `npm version` ([docs](https://docs.npmjs.com/cli/v7/commands/npm-version)).
