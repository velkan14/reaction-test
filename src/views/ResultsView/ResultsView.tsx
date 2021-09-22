import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useReactionState } from "../../hooks/useReactionState";
import { useRouteState } from "../../hooks/useRouteState";

const ResultsView = () => {
  const { reactions, clearReactions } = useReactionState();
  const { setRoute } = useRouteState();

  const reactionTotalTime = reactions.reduce(
    (total, current) => total + current,
    0
  );
  const reactionTime = reactionTotalTime / reactions.length;

  const onPress = () => {
    clearReactions();
    setRoute(routes.INTRODUCTION);
  };

  return (
    <Pressable
      style={styles.container}
      android_ripple={{ color: "rgba(255, 255, 255, 0.2)" }}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Text style={[globalStyles.text, styles.text]}>
          Overall your reaction time was of{" "}
          <Text style={styles.textMS}> {reactionTime}</Text> ms!
        </Text>
        <Text style={globalStyles.text}>Touch to go back to the start</Text>
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
  textMS: {
    fontWeight: "bold",
  },
  text: {
    fontWeight: "800",
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ResultsView;
