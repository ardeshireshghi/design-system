const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const darkBlue = "rgb(27, 40, 69)";
export const darkBlue80 = "rgba(27, 40, 69, 0.8)";
export const darkBlue60 = "rgba(27, 40, 69, 0.6)";
export const darkBlue40 = "rgba(27, 40, 69, 0.4)";
export const darkBlue20 = "rgba(27, 40, 69, 0.2)";
export const lightBlue = "#79CDF3";
export const lightRed = "#F27B79";
export const green = "#2FC77F";
export const white = "#FFF";
export const black = "#000";
export const lightGrey = "#F9F9F9";

export default {
  light: {
    text: "#000",
    background: white,
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
    buttonTitleColor: white,
    buttonBackgroundColor: darkBlue,
  },
  dark: {
    text: white,
    background: black,
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
    buttonTitleColor: darkBlue,
    buttonBackgroundColor: lightBlue,
  },
};
