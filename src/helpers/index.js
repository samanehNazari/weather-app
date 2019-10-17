import Color from "color";

export const colorPaletteGenerator = (name, color) => {
  const ratios = {lightest: -0.3, lighter: -0.2, light: -0.1, dark: 0.1, darker: 0.2, darkest: 0.3};
  const clr = Color(color);
  const colors = {[name]: color};
  for (const ratio in ratios) {
    colors[`${name}_${ratio}`] = clr.darken(ratios[ratio]).hex()
  }
  return colors
};