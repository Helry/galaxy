module.exports = {
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      "sourceType": "script",
      jsx: true,
      impliedStrict: true,
    }
  },
  parser: 'babel-eslint',
  env: {
    node: true,
    es6: true,
    jest: true,
    "react-native/react-native": true
  },
  plugins: [
    'react',
    'react-native',
  ],
  globals: {},
  rules: {
    "eqeqeq": 0,
    "no-console": 1,
    "no-alert": 1,
    "no-unused-vars": 1,
    "no-eval": 1,
    "no-use-before-define": [2, {"functions": false, "classes": true, "variables": false}],
    "semi": [2, 'never'],
    "max-len": [2, { "code": 150 }],
    "import/first": 0,
    "import/no-named-as-default-member":0,
    "jsx-a11y/accessible-emoji":0,
    'react/jsx-one-expression-per-line': 0,
    "react/prefer-stateless-function": [0,{ "ignorePureComponents": true }],
    "react-native/no-color-literals": 0,
    "react-native/no-unused-styles": 1,
    "react-native/no-inline-styles": 1,
    "react-native/split-platform-components": 2,
  }
}
