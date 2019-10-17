import { colorPaletteGenerator } from '../../helpers'

const theme = {
    ...colorPaletteGenerator('primary', '#28384e'),
    ...colorPaletteGenerator('secondary', '#8abf06'),
    ...colorPaletteGenerator('gray', '#5c5c5c'),
    ...colorPaletteGenerator('red', '#c2502f'),
    ...colorPaletteGenerator('orange', '#E77B06'),
    ...colorPaletteGenerator('blue', '#106ebe'),
    ...colorPaletteGenerator('gray_blue', '#ECEFF1'),
    ...colorPaletteGenerator('gray_blue', '#ECEFF1'),
    white: '#fff',
    black: '#000',
    text: {
      default: '#111111',
      secondary: '#212325',
      tertiary: '#5C6166',
      placeholder: '#91989F',
    },
    border_radius: "8px",
  }
;

export default theme;
