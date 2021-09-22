import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useRouteState } from "../../hooks/useRouteState";

const PrematureView = () => {
  const { setRoute } = useRouteState();

  const onPress = () => {
    setRoute(routes.WAIT);
  };

  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={[globalStyles.text, styles.text]}>Too soon...</Text>
        <Text style={globalStyles.text}>Touch to try again</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 20,
  },
});

export default PrematureView;
