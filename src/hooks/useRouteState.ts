import { useContext } from "react";
import {
  RouteContent,
  RouteContext,
} from "../components/RouteContext/RouteContext";

const useRouteState = () => {
  const { route, setRoute } = useContext<RouteContent>(RouteContext);

  return {
    route,
    setRoute,
  };
};

export { useRouteState };
