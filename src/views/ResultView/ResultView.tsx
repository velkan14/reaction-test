import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useReactionState } from "../../hooks/useReactionState";
import { useRouteState } from "../../hooks/useRouteState";

const ResultView = () => {
  const { reactions } = useReactionState();
  const { setRoute } = useRouteState();

  const reactionTime =
    reactions.length > 0 ? reactions[reactions.length - 1] : 0;

  const onPress = () => {
    if (reactions.length === 5) {
      setRoute(routes.RESULTS);
    } else {
      setRoute(routes.WAIT);
    }
  };

  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text
          style={[globalStyles.text, styles.text]}
        >{`You took ${reactionTime} ms`}</Text>
        <Text style={globalStyles.text}>Touch to continue</Text>
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

export default ResultView;
