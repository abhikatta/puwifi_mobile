import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { login, logout } from "../utils/puwifi";

const Login = ({ toggleSpam, username, password }) => {
  const [pressedIn, setPressedIn] = useState(false);
  const handleLogin = async () => {
    try {
      // Call the login function with the provided username and password
      const response = await login(username, password);

      // Handle the response as needed
      console.log("Login response:", response);

      // You can also perform navigation or other actions here on successful login
    } catch (error) {
      // Handle any errors that occur during login
      console.warn("LOGIN Error:", error);
    } finally {
      toggleSpam(true);
    }
  };

  return (
    <View>
      <Pressable
        onPress={handleLogin}
        onPressIn={() => setPressedIn(true)}
        onPressOut={() => setPressedIn(false)}
        style={[
          buttonStyles.button,
          pressedIn ? { opacity: 0.4 } : { opacity: 1 },
        ]}>
        <Text style={buttonStyles.text}>Login</Text>
      </Pressable>
    </View>
  );
};
const Logout = ({ toggleSpam, username }) => {
  const [pressedIn, setPressedIn] = useState(false);
  const handleLogout = async () => {
    const response = await logout(username);
    console.log("Login response:", response);
    toggleSpam(true);
  };
  return (
    <View>
      <Pressable
        onPress={handleLogout}
        onPressIn={() => setPressedIn(true)}
        onPressOut={() => setPressedIn(false)}
        style={[
          buttonStyles.button,
          pressedIn ? { opacity: 0.4 } : { opacity: 1 },
        ]}>
        <Text style={buttonStyles.text}>Logout</Text>
      </Pressable>
    </View>
  );
};
const DarkModeButton = ({ toggleDarkMode }) => {
  const [pressedIn, setPressedIn] = useState(false);

  return (
    <View>
      <Pressable
        onPress={toggleDarkMode}
        onPressIn={() => setPressedIn(true)}
        onPressOut={() => setPressedIn(false)}
        style={[
          buttonStyles.button,
          pressedIn ? { opacity: 0.4 } : { opacity: 1 },
        ]}>
        <Text style={buttonStyles.text}>DarkMode</Text>
      </Pressable>
    </View>
  );
};
export { Login, Logout, DarkModeButton };
const buttonStyles = StyleSheet.create({
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
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});
