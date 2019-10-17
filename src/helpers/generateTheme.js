import { colorPaletteGenerator } from './index'

const themeGenerator = config => {
  const theme = {};
  if (typeof config !== 'object') {
    return {}
  }
  Object.keys(config).map(key => Object.assign(theme, colorPaletteGenerator(key, config[key])));
  return theme;
};

export default themeGenerator;
