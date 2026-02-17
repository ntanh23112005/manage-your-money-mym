import { StyleSheet, Text, View } from "react-native";

export default function SpendingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chi tiêu</Text>
      <Text style={styles.subtitle}>Quản lý chi tiêu của bạn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#202124",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#9AA0A6",
  },
});
