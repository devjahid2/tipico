import React from "react";
import { Text as RNText } from "react-native";
import { presets } from "./text-preset";

export default function Text(props) {
  const {
    type,
    children,
    style: styleOverride,
    textColor,
    white,
    centered,
    uppercase,
    ...rest
  } = props;

  const style = presets[type] || presets.default;
  const styles = [style,styleOverride]
  return (
    <RNText
      {...rest}
      style={[
        styles,
        centered && { textAlign: "center" },
        white && { color: "white" },
        uppercase && { textTransform: "uppercase" },
        textColor && { color: textColor },
      ]}
    >
      {children}
    </RNText>
  );
}
