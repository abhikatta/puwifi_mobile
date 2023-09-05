import { StyleSheet, View } from "react-native";
import { Login, Logout } from "./components/Butt-ons";

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
      <Logout />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
