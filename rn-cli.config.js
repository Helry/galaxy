// @name Make ReactNative Great Again
// @description Allows you to enable support for JSX files, and `.mjs` files which is the new node standard
// @source http://www.fallingcanbedeadly.com/posts/enabling-react-native-jsx-extension
// @issues https://github.com/airbnb/javascript/issues/982
// @issues https://github.com/facebook/metro/issues/248
// @note One caveat, The `index.js` file in the root of your project has to be `.js`.
module.exports = {
  getSourceExts: () => ['jsx', 'mjs', 'js'],
}
