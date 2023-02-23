const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const colors = {
  white: '#FFFFFF',
  midnight: '#00081D',
  blue: '#005AE1',
  lightcyan: '#D4FCFF',
  darkcyan: '#34A6AE',
};

export default {
  light: {
    text: colors.midnight,
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: colors.lightcyan,
    background: colors.midnight,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
