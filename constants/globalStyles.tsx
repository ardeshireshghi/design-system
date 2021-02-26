import { StyleSheet, ColorSchemeName } from "react-native";
import colors from "./Colors";

export const styles = (colorScheme: ColorSchemeName) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors[colorScheme].background,
      width: "100%",
    },
  });
