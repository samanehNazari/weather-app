import { colorPaletteGenerator } from '../../helpers'

const theme = {
  ...colorPaletteGenerator('primary', '#00A4EF'),
  ...colorPaletteGenerator('secondary', '#7FBA00'),
  ...colorPaletteGenerator('red', '#F25022'),
  ...colorPaletteGenerator('orange', '#FFB900'),
  ...colorPaletteGenerator('blue', '#00A4EF'),
  border_radius: 0
};

export default theme;
