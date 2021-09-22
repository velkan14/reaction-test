import React, { useRef } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import globalStyles from "../../constants/globalStyles";
import { routes } from "../../constants/routes";
import { useRouteState } from "../../hooks/useRouteState";

const getRandomNumberAsync = async (min: number, max: number, id: number) => {
  try {
    const response = await fetch("https://api.random.org/json-rpc/4/invoke", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "generateIntegers",
        params: {
          apiKey: "",
          n: 1,
          min: min,
          max: max,
          replacement: true,
        },
        id: id,
      }),
    });
    const json = await response.json();
    return json.result.random.data[0];
  } catch (e: any) {
    return Math.floor(Math.random() * max + min);
  }
};

const WaitView = () => {
  const { setRoute } = useRouteState();
  const id = useRef(0);
  let timeout: any = undefined;

  const onPressIn = () => {
    clearTimeout(timeout);
    setRoute(routes.PREMATURE);
  };

  getRandomNumberAsync(1, 10, id.current++).then((seconds) => {
    const time = seconds * 1000;
    timeout = setTimeout(() => {
      setRoute(routes.READY);
    }, time);
  });

  return (
    <Pressable style={styles.container} onPressIn={onPressIn}>
      <View style={styles.container}>
        <Text style={[globalStyles.text, styles.text]}>Wait for green...</Text>
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
  },
});

export default WaitView;
