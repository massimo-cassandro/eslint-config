# Eslint config

My [eslint](https://eslint.org/) config,

Previous versions at <https://github.com/massimo-cassandro/linters-config>.


## Use

Install `eslint` and this package:

```bash
npm install -D @massimo-cassandro/eslint-config eslint
```

Create a `.eslintrc.cjs` file (or use any other name and syntax you like, following the instructions at <https://eslint.org/docs/latest/use/configure/configuration-files>) and add:

```javascript
/* eslint-env node */

module.exports = {
  extends: '@massimo-cassandro/eslint-config'
};
```

## Use with React

Add the [eslint-config-react-app](https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app/README.md) package:

```bash
npm install -D eslint-config-react-app
```

Add it to the `.eslintrc.cjs` file:

```javascript
/* eslint-env node */

module.exports = {
  extends: ['react-app', '@massimo-cassandro/eslint-config']
};
```
