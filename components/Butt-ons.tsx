import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const Login = ({ onPressLogin }) => {
  const [pressedIn, setPressedIn] = useState(false);

  return (
    <View>
      <Pressable
        onPress={onPressLogin}
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
const DarkMode = ({ toggleDarkMode }) => {
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
const Logout = ({ onPressLogout }) => {
  const [pressedIn, setPressedIn] = useState(false);

  return (
    <View>
      <Pressable
        onPress={onPressLogout}
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
export { Login, Logout, DarkMode };
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
