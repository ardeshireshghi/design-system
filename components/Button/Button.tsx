import React, { useContext } from "react";
import {
  Button as ReactNativeElementsButton,
  ThemeContext,
} from "react-native-elements";

import { darkBlue, lightBlue, white } from "../../constants/Colors";

import { IButtonProps } from "./types";

export const Button = ({ type, disabled, ...props }: IButtonProps) => {
  const { theme } = useContext(ThemeContext);

  if (type === "primary") {
    return <ReactNativeElementsButton disabled={disabled} {...props} />;
  }

  return (
    <ReactNativeElementsButton
      disabled={disabled}
      titleStyle={{ color: darkBlue }}
      buttonStyle={{
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: darkBlue,
      }}
      type="outline"
      {...props}
    />
  );
};
