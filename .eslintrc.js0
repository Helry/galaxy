module.exports = {
  extends: ['airbnb'],
  // Specifying Parser Options: http://t.cn/RsN6Lqi
  parserOptions: {
    ecmaVersion: 6, //指定要使用的ECMAScript版本，默认值5
    ecmaFeatures: { // 这个对象，表示你想使用的额外的语言特性
      "sourceType": "script", // 设置为script(默认)或module（如果你的代码是ECMAScript模块)
      jsx: true, // 启用 JSX，注意：对 JSX 语法的支持不用于对 React 的支持。React 使用了一些特定的 ESLint 无法识别的 JSX 语法。如果你正在使用 React 并且想要 React 语义支持，我们推荐你使用 eslint-plugin-react。
      impliedStrict: true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
    }
  },
  // Specifying Parser: http://t.cn/RsNXEKj
  parser: 'babel-eslint',
  // Specifying Environments: http://t.cn/RsNXhJR
  env: {
    browser: true, // 浏览器环境中的全局变量
    node: true, // Node.js 全局变量和 Node.js 作用域
    'shared-node-browser': true, // Node.js 和 Browser 通用全局变量
    es6: true, // 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）
    jest: true, //  Jest 全局变量
    "react-native/react-native": true // react-native 类浏览器环境全局变量
  },
  // Specifying Globals: http://t.cn/RsN0tGI
  globals: {
    Color: false,
    Style: false,
    FontSize: false,
    Size: false,
    iOS: false,
    Android: false,
    px2dp: false,
    'SCREEN_WIDTH': false,
    'SCREEN_HEIGHT': false,
    PixelRatio: false,
    pixel: false,
  },
  // Configuring Plugins: http://t.cn/RsN0YOL
  plugins: [
    'react',
    'react-native',
  ],
  // Configuring Rules: http://t.cn/RsNOvYE
  rules: {
    "semi": [2, 'never'], // 不允许使用分号: http://t.cn/RsNWpgh
    "eqeqeq": 0,
    'no-console': 0, // 不允许使用console: http://t.cn/RsNYNiO
    'no-unused-vars': 1, // 不允许未使用的变量: http://t.cn/RsNQyFh
    'no-param-reassign': 0, // http://t.cn/RspvIYn
    "no-use-before-define": [2, { // Disallow Early Use: http://t.cn/RsNR2or
      "functions": true, "classes": true, "variables": false
    }],
    "no-eval": 0, // http://t.cn/Rspwp34
    "max-len": [0, // 强制行的最大长度
      { "code": 200 }
    ],
    "class-methods-use-this": 0, // http://t.cn/RspzXL2
    "prefer-destructuring": [ 2, // Prefer destructuring from arrays and objects: http://t.cn/RsptuV3
      {
        "array": false,
        "object": true
      }
    ],
    "import/first": 0, // http://t.cn/Rsp7CtK
    "import/no-named-as-default-member":0, // http://t.cn/Rsp7swJ
    "jsx-a11y/accessible-emoji":0, // http://t.cn/Rsp7QIQ
    'react/jsx-filename-extension': [2, { // react允许使用js扩展名: http://t.cn/Rs9hj5W
      "extensions": [".jsx"]
    }],
    'react/prop-types': 0, // http://t.cn/RspPwAh
    'react/display-name': 0, // http://t.cn/RsNsrY1
    "react-native/no-unused-styles": 1, // 检测在 React 组件中 未使用的 StyleSheet 规则: http://t.cn/RsNEniy
    "react-native/split-platform-components": 2, // 如果有必要，强制使用平台指定的文件名: http://t.cn/RsNmNCK
    "react-native/no-inline-styles": 1, // 检测组件中的行内样式: http://t.cn/RsN1ML9
    "react-native/no-color-literals": 0, // 关闭使用变量代替 color字符
    "react/no-unused-state": 1, // http://t.cn/RspGJh8
    "react/no-access-state-in-setstate": 0, // http://t.cn/RspGprL
    "react/no-multi-comp":1, // 避免在一个文件定义多个组件 http://t.cn/RspINCd
    'react/jsx-one-expression-per-line': 0,
    "react/prefer-stateless-function": [0,{ "ignorePureComponents":true }],// 强制将无状态 React 组件写成纯函数组件: http://t.cn/Rsp67zf
    "react/destructuring-assignment": [2, "always", // 强制对 props、state、context 使用解构 http://t.cn/Rspi6HM
    ],
    "react/prop-types": 0, // http://t.cn/RspPwAh
    "react/forbid-prop-types":0,
    "react/require-default-props": 0,
  }
}
