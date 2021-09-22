import React, { useState, createContext } from "react";
import { routes } from "../../constants/routes";

export type RouteContent = {
  route: routes;
  setRoute: Function;
};

export const RouteContext = createContext<RouteContent>({
  route: routes.INTRODUCTION,
  setRoute: () => {},
});

export const RouteProvider: React.FC = ({ children }) => {
  const [route, setRoute] = useState<routes>(routes.INTRODUCTION);
  return (
    <RouteContext.Provider value={{ route, setRoute }}>
      {children}
    </RouteContext.Provider>
  );
};
