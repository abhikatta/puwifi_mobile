import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DarkModeButton } from "./components/Buttons";
import { useEffect, useState } from "react";

import { login, logout } from "./utils/puwifi";
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);
  const [output, setOutput] = useState([]);
  const [creds, setCreds] = useState([
    { username: "200303124278", password: "bf@44" },
    { username: "200303124264", password: "bf@66" },
    { username: "200303124199", password: "cf@52" },
  ]);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  const handleOutput = (text: string) => {
    setOutput((prevOutput) => [...prevOutput, text]);
  };

  function loginWithRandomCreds() {
    const credsOf = Math.floor(Math.random() * creds.length);
    const username = creds[credsOf].username;
    const password = creds[credsOf].password;
    login(username, password, handleOutput);
  }
  // useEffect(() => {
  //   username && password && login(username, password, handleOutput);
  // });
  useEffect(() => {
    let timerId;

    if (username && password) {
      // Clear any existing timer
      if (timerId) {
        clearTimeout(timerId);
      }

      // Set a new timer to execute the login after 4 seconds
      timerId = setTimeout(() => {
        login(username, password, handleOutput);
      }, 4000); // 4 seconds in milliseconds
    }

    // Cleanup the timer when the component unmounts or when dependencies change
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  });

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
          login(username, password, handleOutput);
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          logout(username, handleOutput);
        }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: 250 }]}
        onPress={loginWithRandomCreds}>
        <Text style={[styles.buttonText, { fontSize: 15 }]}>
          Login Using Random Credentials
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({ animated: true })
          }>
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
