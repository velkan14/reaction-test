import React from "react";
import { StyleSheet, Text, View } from "react-native";

export interface IBackgroundViewProps {
  color: string;
}

const BackgroundView: React.FC<IBackgroundViewProps> = ({
  children,
  color,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default BackgroundView;
