import { View, Text, StyleSheet, TextInput } from "react-native";
import { DarkMode, Login, Logout } from "./components/Butt-ons";
import { useState } from "react";
import ConsoleLogs from "./components/ConsoleLogs";
import { logout } from "./utils/puwifi";
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [warnText, setWarnText] = useState("");
  const [startSpam, SetStartSpam] = useState(false);

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };
  function loginHandler() {
    if (!username || !password) {
      setWarnText("Enter username");
      const intervalId = setInterval(console.log("Warning"), 4000);
      clearInterval(intervalId);
      setWarnText("");
    }
  }
  function logoutHandler() {
    logout(username, password);
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "black" : "white" },
      ]}>
      <Text style={{ color: "#aada99", fontSize: 40 }}>PuReLogger</Text>
      <DarkMode toggleDarkMode={toggleDarkMode} />
      <TextInput
        placeholder="Username:"
        value={username}
        style={styles.textInput}
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        placeholder="Password:"
        value={password}
        style={styles.textInput}
        onChangeText={(e) => setPassword(e)}
      />
      <View style={styles.authButtons}>
        <Login
          onPressLogin={() => {
            loginHandler();
            SetStartSpam(true);
          }}
        />
        <Logout
          onPressLogout={() => {
            logoutHandler();
            SetStartSpam(false);
          }}
        />
      </View>
      <Text>{warnText}</Text>
      <View
        style={{
          flex: 1,
          bottom: 10,
          marginVertical: 20,
          alignItems: "center",
        }}>
        <ConsoleLogs
          username={username}
          password={password}
          startSpam={startSpam}
          darkMode={darkMode}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  authButtons: {
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#000",
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
  output: {
    color: "#aada99",
  },
});
