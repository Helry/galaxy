import { NativeModules } from 'react-native'
// 下一句中的ToastExample即对应上文
// public String getName()中返回的字符串

const { ToastExample } = NativeModules

export {
  ToastExample,
}

export default {
  ToastExample,
}
