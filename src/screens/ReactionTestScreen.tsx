import React from "react";
import BackgroundView from "../components/BackgroundView/BackgroundView";
import IntroductionView from "../views/IntroductionView/IntroductionView";
import ReadyView from "../views/ReadyView/ReadyView";
import WaitView from "../views/WaitView/WaitView";
import ResultView from "../views/ResultView/ResultView";
import { routes } from "../constants/routes";
import PrematureView from "../views/PrematureView/PrematureView";
import { ReactionProvider } from "../components/ReactionContext/ReactionContext";
import { useRouteState } from "../hooks/useRouteState";
import ResultsView from "../views/ResultsView/ResultsView";

const colors = {
  [routes.INTRODUCTION]: "#A2CDCD",
  [routes.READY]: "#C6D57E",
  [routes.WAIT]: "#D57E7E",
  [routes.PREMATURE]: "#A2CDCD",
  [routes.RESULT]: "#A2CDCD",
  [routes.RESULTS]: "#A2CDCD",
};

const ReactionTestScreen = () => {
  const { route } = useRouteState();

  return (
    <ReactionProvider>
      <BackgroundView color={colors[route]}>
        {route === routes.INTRODUCTION && <IntroductionView />}
        {route === routes.READY && <ReadyView />}
        {route === routes.WAIT && <WaitView />}
        {route === routes.PREMATURE && <PrematureView />}
        {route === routes.RESULT && <ResultView />}
        {route === routes.RESULTS && <ResultsView />}
      </BackgroundView>
    </ReactionProvider>
  );
};

export default ReactionTestScreen;
