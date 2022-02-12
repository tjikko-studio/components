# @tjikko/components

## Warning
The component library is distributed as a private npm package, so you'll need to log into npm `npm login` and ask us to be invited to the `@tjikko` organization. This should allow you to install the packages with `npm i @tjikko/components` (as is done in the code).

You'll need to login to npm on your browser too to visit the [npm page for the package](https://npmjs.org/package/@tjikko/components)

## Install
```
npm i @tjikko/components
```

## Usage
Import the components you want and use them as you wish by passing the documented props.
```js
import {FAQ} from '@tjikko/components'

export default function ReactComponent () {
  return (
    <FAQ {...faqProps} />
  )
}
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
[Publishing a release on GitHub](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository) will automatically publish the component library to npm as `@tjikko/components`.

See [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

The repo is cloned on our A2 instance with a `post-receive` hook that will execute the tasks defined in [.cpanel.yml](/.cpanel.yml), so that's why the jobs only need to `git push production main` to get things started on A2…

It's also worth noting that in addition to the `post-receive` hook, the repository is also configured with `git config receive.denyCurrentBranch updateInstead`

_Note_: For `npm publish` to succeed, you need a different version every time, so don't forget to use `npm version` ([docs](https://docs.npmjs.com/cli/v7/commands/npm-version)) before trying to publish a new release!
