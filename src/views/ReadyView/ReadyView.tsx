import React, { useRef } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useReactionState } from "../../hooks/useReactionState";
import { useRouteState } from "../../hooks/useRouteState";

const ReadyView: React.FC = () => {
  const startTime = useRef(new Date());
  const { addReaction } = useReactionState();
  const { setRoute } = useRouteState();

  const onPressIn = () => {
    const endTime = new Date();
    const timeDiff = endTime.getTime() - startTime.current.getTime();
    addReaction(timeDiff);
    setRoute(routes.RESULT);
  };

  return (
    <Pressable style={styles.container} onPressIn={onPressIn}>
      <View style={styles.container}>
        <Text style={[globalStyles.text, styles.text]}>Go!</Text>
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
    fontSize: 64,
  },
});

export default ReadyView;
