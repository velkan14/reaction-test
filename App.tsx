import React from "react";
import { RouteProvider } from "./src/components/RouteContext/RouteContext";
import ReactionTestScreen from "./src/screens/ReactionTestScreen";

export default function App() {
  return (
    <RouteProvider>
      <ReactionTestScreen />
    </RouteProvider>
  );
}
