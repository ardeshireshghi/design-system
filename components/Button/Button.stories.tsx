import React from "react";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react-native";
import Button from ".";
import { ThemeProvider } from "react-native-elements";
import { getTheme } from "../../themes/coreTheme";
import { CenterView } from "../CenterView";

export default {
  title: "Button",
};

export const PrimaryButton = () => (
  <ThemeProvider theme={getTheme("light")}>
    <Button type="primary" title="Primary" onPress={action("clicked")} />
  </ThemeProvider>
);

export const SecondaryButton = () => (
  <ThemeProvider theme={getTheme("light")}>
    <Button type="secondary" title="Secondary" onPress={action("clicked")} />
  </ThemeProvider>
);

// On-Device Register
storiesOf("Button", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Primary", PrimaryButton)
  .add("Secondary", SecondaryButton);
