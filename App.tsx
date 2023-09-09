import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DarkModeButton, Login, Logout } from "./components/Buttons";
import { useState } from "react";

import { login, logout } from "./utils/puwifi";
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [output, setOutput] = useState([]);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const handleOutput = (text) => {
    setOutput((prevOutput) => [...prevOutput, text]);
  };
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}>
      <Text style={{ color: "#aada99", fontSize: 40 }}>PuReLogger</Text>
      <DarkModeButton toggleDarkMode={toggleDarkMode} />
      <TextInput
        placeholder="Username:"
        value={username}
        inputMode="text"
        style={styles.textInput}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholder="Password:"
        inputMode="text"
        value={password}
        style={styles.textInput}
        onChangeText={(e) => setPassword(e)}
      />
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {
          login(username, password);
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => logout(username)}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {
          login(username, password);
        }}>
        <Text style={styles.buttonText}>LoginLoop</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <ScrollView>
          {output.map((value, index) => {
            return (
              <Text style={styles.output} key={index}>
                {value}
              </Text>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  authButtons: {
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "#aada99",
    alignContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    height: 50,
    width: 120,
    borderRadius: 5,
  },
  container: {
    paddingTop: 100,
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
  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  output: {
    color: "#aada99",
    fontWeight: "bold",
  },
});
