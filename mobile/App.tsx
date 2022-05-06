import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { Widget } from "./src/components/Widget";
import { theme } from "./src/theme";

export default function App() {
  return (
    <View style={styles.container}>
      <Widget />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});
