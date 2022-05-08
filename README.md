# @tjikko/components

## Install
```
npm i git+ssh://git@github.com:tjikko-studio/components.git
```

## Usage
Import the components you want and use them as you wish by passing in props.
```js
import {FAQ} from '@tjikko/components'

export default function ReactComponent () {
  return (
    <FAQ {...faqProps} />
  )
}
```

## npm link
If development needs to happen in parallel here and in a consumer, it can be helpful to `npm link` the repos together ([docs](https://docs.npmjs.com/cli/v8/commands/npm-link)).

In the consumer repo, after installing the dependencies:
```
npm link ../path/to/components/repo
```

## Publishing
[Publishing a release on GitHub](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository) is enough for consumers to be able to get a specific version of the library, just don't forget to use `npm version` ([docs](https://docs.npmjs.com/cli/v8/commands/npm-version)) before trying to publish a new release!
