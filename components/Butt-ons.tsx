import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const Login = ({ setText, username, password }) => {
  const [pressedIn, setPressedIn] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setText(`Login Pressed${username + password}`)}
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
const Logout = ({ setText, username, password }) => {
  const [pressedIn, setPressedIn] = useState(false);

  return (
    <View>
      <Pressable
        onPress={() => setText(`Logged out user:${username + password}`)}
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
export { Login, Logout };
const buttonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    backgroundColor: "#aada99",
    alignContent: "center",
    marginVertical: 50,
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
