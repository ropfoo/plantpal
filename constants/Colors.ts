const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export const colors = {
  white: '#FFFFFF',
  midnight: '#00081D',
  blue: '#005AE1',
  lightblue: '#3A85F6',
  bluegray: '#D7E2F3',
  darkbluegray: '#3A4A63',
  red: '#EC007F',
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
    disabled: colors.bluegray,
  },
  dark: {
    text: colors.lightcyan,
    background: colors.midnight,
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
    disabled: colors.darkbluegray,
  },
};
