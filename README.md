# Eslint config

My [eslint](https://eslint.org/) config,

Previous versions at <https://github.com/massimo-cassandro/linters-config>.


## Use

Install `eslint` and all the needed packages:

```bash
npm i -D eslint @eslint/js globals @massimo-cassandro/eslint-config
```

Create a `eslint.config.js` file (or use any other name and syntax you like, following the instructions at <https://eslint.org/docs/latest/use/configure/configuration-files>) and add:

```javascript
import eslint_config from '@massimo-cassandro/eslint-config';

export default [
  ...eslint_config,
  {
    files: ['src/**/*.js'],
    ignores: [
      'dist/',
      '**/vendor/'
    ],
  }
];
```

