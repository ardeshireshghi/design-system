import React from "react";

export type ButtonType = "primary" | "secondary";

export interface IButtonProps {
  type: ButtonType;
  disabled?: boolean;
  title?: string | React.ReactElement<{}>;
  onPress?(): void;
}
