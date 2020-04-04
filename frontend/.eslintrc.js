module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: [ 'react-hooks' ],
  globals: {
    $: true,
    WISH_IDS: true,
    location: true,
    Turbolinks: true,
    jQuery: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': 0,
    'import/no-unresolved': 0,
    camelcase: 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    // deprecated: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
    'jsx-a11y/label-has-for': 0,
  },
  plugins: ['react-hooks'],
};
