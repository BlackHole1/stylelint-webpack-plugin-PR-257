### stylelint-webpack-plugin-PR-257

discuss link: https://github.com/webpack-contrib/stylelint-webpack-plugin/pull/257


### Steps

```bash
$ yarn install
$ npx webpack ./src/index.js --mode=development --watch
```

Change `test.css` file content

### Screenshot preview of the problem

<img width="1058" alt="image" src="https://user-images.githubusercontent.com/8198408/149808877-bff6d482-119c-47d0-95da-d9e77f28f593.png">

### Reason

Although `stylelint-webpack-plugin` has `exclude`, the user needs to maintain two places at the same time.

For the user, it will have to read the contents of `.stylelintignore` itself and assign it to `stylelint-webpack-plugin -> exclude`. Otherwise the above problem is bound to occur. And for the novice, it can be difficult to pinpoint what is causing it.
