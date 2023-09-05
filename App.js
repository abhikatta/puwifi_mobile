import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Login, Logout } from "./components/Butt-ons";
import { useState } from "react";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const spam = () => {
    let arra = [];
    while (true) {
      arra.push(text);
    }
    return arra.map((text, index) => <Text>{text}</Text>);
  };
  return (
    <View style={styles.container}>
      <Text style={{ color: "#aada99", fontSize: 40, bottom: 100 }}>
        PuReLogger
      </Text>
      <TextInput
        placeholder="Username:"
        value={username}
        style={styles.textInput}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholder="Username:"
        value={password}
        style={styles.textInput}
        onChangeText={(e) => setPassword(e)}
      />
      <View style={styles.authButtons}>
        <Login username={username} setText={setText} password={password} />
        <Logout username={username} setText={setText} password={password} />
      </View>
      {/* <ScrollView style={styles.output}>
      </ScrollView> */}
      <Text style={styles.output}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  authButtons: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#000",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "black",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#aada99",
    height: 50,
    textAlign: "left",
    paddingHorizontal: 20,
    width: 200,
  },
  output: {
    color: "#aada99",
  },
});
