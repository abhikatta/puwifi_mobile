import { useState } from "react";
import { StyleSheet, Text, Pressable, View } from "react-native";

const Login = () => {
  const [pressedIn, setPressedIn] = useState(false);
  return (
    <View>
      <Pressable
        onPress={() => console.log("pressed Logout")}
        onPressIn={() => setPressedIn((prevPress) => !prevPress)}
        onPressOut={() => setPressedIn((prevPress) => !prevPress)}
        style={[
          buttonStyles.button,
          pressedIn ? { opacity: 0.4 } : { opacity: 1 },
        ]}>
        <Text style={buttonStyles.text}>Login</Text>
      </Pressable>
    </View>
  );
};
const Logout = () => {
  const [pressedIn, setPressedIn] = useState(false);
  return (
    <Pressable
      style={[
        buttonStyles.button,
        pressedIn ? { opacity: 0.7 } : { opacity: 1 },
      ]}
      onPress={() => console.log("pressed Logout")}
      onPressIn={() => setPressedIn((prevPress) => !prevPress)}
      onPressOut={() => setPressedIn((prevPress) => !prevPress)}>
      <Text style={buttonStyles.text}>Logout</Text>
    </Pressable>
  );
};
export { Login, Logout };
const buttonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    backgroundColor: "#aada99",
    alignContent: "center",
    marginVertical: 50,
    height: 50,
    width: 200,
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
