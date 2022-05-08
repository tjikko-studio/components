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
[Publishing a release on GitHub](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository) will automatically trigger a deployment on A2.

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

The repo is cloned on our A2 instance with a `post-receive` hook that will execute the tasks defined in [.cpanel.yml](/.cpanel.yml).

It's also worth noting that in addition to the `post-receive` hook, the repository is also configured with `git config receive.denyCurrentBranch updateInstead`

_Note_: For consumers to be able to get a specific version of the library, don't forget to use `npm version` ([docs](https://docs.npmjs.com/cli/v7/commands/npm-version)) before trying to publish a new release!
