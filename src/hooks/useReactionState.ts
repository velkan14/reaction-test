import React, { useContext } from "react";
import {
  ReactionContent,
  ReactionContext,
} from "../components/ReactionContext/ReactionContext";

const useReactionState = () => {
  const { reactions, setReactions } =
    useContext<ReactionContent>(ReactionContext);

  const addReaction = (reaction: number) => {
    setReactions([...reactions, reaction]);
  };

  const clearReactions = () => {
    setReactions([]);
  };

  return {
    reactions,
    addReaction,
    clearReactions,
  };
};

export { useReactionState };
