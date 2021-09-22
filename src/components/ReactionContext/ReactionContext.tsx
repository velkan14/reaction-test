import React, { useState, createContext, useContext, Dispatch } from "react";

export type ReactionContent = {
  reactions: number[];
  setReactions: (reactions: number[]) => void;
};

export const ReactionContext = createContext<ReactionContent>({
  reactions: [],
  setReactions: (reaction: number[]) => {},
});

export const ReactionProvider: React.FC = ({ children }) => {
  const [reactions, setReactions] = useState<number[]>([]);

  return (
    <ReactionContext.Provider value={{ reactions, setReactions }}>
      {children}
    </ReactionContext.Provider>
  );
};
