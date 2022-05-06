//rnso

import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 100,
    padding: 8,
    backgroundColor: theme.colors.brand,
    borderRadius: 6,
  },
  text: {
    color: theme.colors.text_primary,
  },
});
