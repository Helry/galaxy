import { NativeModules } from 'react-native'
// 下一句中的ToastExample即对应上文
// public String getName()中返回的字符串

const { ToastExample, IsDebug } = NativeModules

export {
  ToastExample,
  IsDebug,
}

export default {
  ToastExample,
  IsDebug,
}
