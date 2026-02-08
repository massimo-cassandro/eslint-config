# Eslint config

My [eslint](https://eslint.org/) config,


## Use

Install `eslint` and all the needed packages:

```bash
npm i -D @massimo-cassandro/eslint-config
```

Create a `eslint.config.js` file (or use any other name and syntax you like, following the instructions at <https://eslint.org/docs/latest/use/configure/configuration-files>) and add:

```javascript
import eslint_config from '@massimo-cassandro/eslint-config';

// OPTIONAL
// https://github.com/cybozu/eslint-config
// import cybozuEslintConfigBaseline from '@cybozu/eslint-config/flat/presets/css-baseline.js'; 


export default [

  // ...cybozuEslintConfigBaseline.map((config) => ({
  //   ...config,
  //   files: ['**/*.css']
  // })),

  ...eslint_config,
  // {
  //   files: ['src/**/*.js'],
  //   ignores: [
  //     'dist/',
  //     'build/',
  //     '**/vendor/'
  //   ],
  // }
  // {
  //   languageOptions: {
  //     globals: {
  //       jQuery: 'readonly',
  //       $: 'readonly',
  //     },
  //   },
  // },
];
```
