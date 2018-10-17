import { Dimensions, PixelRatio, Platform } from 'react-native'
import theme from './theme'

const { height, width } = Dimensions.get('window')

global.FontSize = theme.FontSize
global.Color = theme.Color
global.Style = theme.Style
global.Size = theme.Size

global.iOS = (Platform.OS === 'ios')
global.Android = (Platform.OS === 'android')
global.SCREEN_WIDTH = width
global.SCREEN_HEIGHT = height
global.PixelRatio = PixelRatio.get()
global.pixel = 1 / PixelRatio.get()
