import { Dimensions, PixelRatio, Platform } from 'react-native'

const { height, width } = Dimensions.get('window')

global.iOS = (Platform.OS === 'ios') // 系统是iOS
global.Android = (Platform.OS === 'android') // 系统是安卓

global.SCREEN_WIDTH = width // 获取屏幕宽度
global.SCREEN_HEIGHT = height // 获取屏幕高度

global.PixelRatio = PixelRatio.get() // 获取屏幕像素密度
global.pixel = 1 / PixelRatio.get() // 最小线宽
