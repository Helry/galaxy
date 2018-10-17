const Color = {
  // 文字色
  primary: '#05a5d1',
  text_base: '#000000',
  text_base_inverse: '#ffffff',
  text_secondary: '#a4a9b0',
  text_placeholder: '#bbbbbb',
  text_disabled: '#bbbbbb',
  text_caption: '#888888',
  text_paragraph: '#333333',
  link: '#05a5d1',
  // 背景色
  fill_base: '#ffffff',
  fill_body: '#f5f5f9',
  fill_tap: '#dddddd',
  fill_disabled: '#dddddd',
  fill_mask: 'rgba(0, 0, 0, .4)',
  icon_base: '#cccccc',
  fill_grey: '#f7f7f7',
  // 透明度
  opacity_disabled: '0.3',
  success: '#6abf47',
  warning: '#f4333c',
  error: '#f4333c',
  important: '#ff5b05',
  wait: '#108ee9',
  // 边框色
  border_color_base: '#dddddd',
}
const FontSize = {
  caption_xs: 10,
  caption_sm: 13,
  base: 14,
  subhead: 15,
  caption: 16,
  caption_md: 17,
  caption_lg: 18,
  caption_xl: 20,
  caption_xxl: 22,
  text_24: 24,
  text_26: 26,
  text_28: 28,
  text_30: 30,
  text_32: 30,
}
const Size = {
  // 圆角
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,
  // 边框尺寸
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,
  // 间距
  // 水平间距
  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,
  // 垂直间距
  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,
  // 高度
  line_height_base: 1,
  line_height_paragraph: 1.5,
  // 图标尺寸
  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22,
  icon_size_lg: 36,
}
const Style = {
  h1: {
    fontSize: 32,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 24,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 18,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
  h4: {
    fontSize: 16,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
  h5: {
    fontSize: 13,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
  h6: {
    fontSize: 10,
    lineHeight: 1.15,
    fontWeight: 'bold',
  },
}
export {
  Color,
  FontSize,
  Size,
  Style,
}
export default {
  Color,
  FontSize,
  Size,
  Style,
}
