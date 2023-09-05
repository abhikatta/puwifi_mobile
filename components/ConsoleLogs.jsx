import { Pressable, ScrollView, Text, View } from "react-native";
import { useState, useEffect } from "react";
import { login } from "../utils/puwifi";

const ConsoleLogs = ({ username, password, startSpam }) => {
  const [consoleLogs, setConsoleLogs] = useState([]);

  function logToConsole(textBool) {
    setConsoleLogs((prevConsoleLogs) => [...prevConsoleLogs, textBool]);
  }
  useEffect(() => {
    let intervalId;
    let consoleVal;
    if (startSpam) {
      try {
        fetch("https://google.com");
        consoleVal = true;
      } catch (error) {
        login(username, password);
        consoleVal = false;
      }

      intervalId = setInterval(() => logToConsole(consoleVal), 2500);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [startSpam, username, password]);

  return (
    <View>
      <ScrollView
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }
        style={{
          height: 150,

          top: 10,
          flex: 0.3,
        }}>
        {consoleLogs.map((value, index) => {
          console.log(value);
          {
            return value ? (
              <Text
                key={index}
                style={{ color: "green", fontSize: 20, fontWeight: "bold" }}>
                Connection Good
              </Text>
            ) : (
              <Text
                key={index}
                style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>
                Connection lost, trying to Log Back in...
              </Text>
            );
          }
        })}
      </ScrollView>
    </View>
  );
};

export default ConsoleLogs;
