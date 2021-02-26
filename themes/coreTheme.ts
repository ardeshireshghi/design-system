import { ColorSchemeName } from "react-native";
import colors, {
  darkBlue,
  darkBlue80,
  darkBlue60,
  darkBlue40,
  darkBlue20,
  lightBlue,
  lightRed,
  green,
  white,
  black,
  lightGrey,
} from "../constants/Colors";

export function getTheme(colorScheme: ColorSchemeName) {
  return {
    colors: {
      ...colors[colorScheme],
      darkBlue,
      darkBlue80,
      darkBlue60,
      darkBlue40,
      darkBlue20,
      lightBlue,
      lightRed,
      green,
      white,
      black,
      lightGrey,
    },
    Avatar: {
      rounded: true,
    },
    Badge: {
      textStyle: { fontSize: 30 },
    },
    Button: {
      titleStyle: {
        color: colors[colorScheme].buttonTitleColor,
        fontSize: "14px",
      },
      buttonStyle: {
        backgroundColor: colors[colorScheme].buttonBackgroundColor,
        textTransform: "uppercase",
        maxWidth: "153px",
        paddingTop: "15px",
        paddingBottom: "15px",
      },
    },
  };
}
