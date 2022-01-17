### stylelint-webpack-plugin-PR-257

discuss link: https://github.com/webpack-contrib/stylelint-webpack-plugin/pull/257


### Scripts

```bash
$ yarn install
$ npx webpack ./src/index.js --mode=development
```

### Screenshot preview of the problem

<img width="848" alt="image" src="https://user-images.githubusercontent.com/8198408/149802069-c7c2393a-2f2c-4972-b2f1-9f77a2eb808d.png">

### Reason

Although `stylelint-webpack-plugin` has `exclude`, the user needs to maintain two places at the same time.

For the user, it will have to read the contents of `.stylelintignore` itself and assign it to `stylelint-webpack-plugin -> exclude`. Otherwise the above problem is bound to occur. And for the novice, it can be difficult to pinpoint what is causing it.
