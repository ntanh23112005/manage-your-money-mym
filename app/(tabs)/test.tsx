import { StyleSheet, Text, View } from "react-native";

export default function TabTestScreen() {
  return (
    <View style={styles.mainView}>
      <Text style={styles.helloWorldText}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  helloWorldText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
