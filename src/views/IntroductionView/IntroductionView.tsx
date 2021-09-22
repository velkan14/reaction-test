import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useRouteState } from "../../hooks/useRouteState";

const IntroductionView = () => {
  const { setRoute } = useRouteState();

  const onPress = () => {
    setRoute(routes.WAIT);
  };

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <Pressable
      style={styles.press}
      android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={[globalStyles.text, styles.text1]}>
          This is a reaction test!
        </Text>
        <Text style={[globalStyles.text, styles.margin]}>
          You will be presented with a red screen, and when it turns green you
          need to touch the screen as fast as possible
        </Text>
        <Text style={[globalStyles.text, styles.margin]}>
          It will repeat 5x before giving a final result
        </Text>
        <Text style={[globalStyles.text, styles.text]}>
          Touch to start the test
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    fontSize: 24,
    marginBottom: 20,
  },
  margin: {
    marginBottom: 20,
  },
  text: {
    fontWeight: "800",
    fontSize: 28,
  },
});

export default IntroductionView;
