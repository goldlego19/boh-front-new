// FlagContext.tsx
import React, { createContext, useContext, useState } from "react";
import { Flag, FlagContextType } from "../@types";


const FlagContext = createContext<FlagContextType | undefined>(undefined);

export const FlagProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [flags, setFlags] = useState<Flag[]>([]);

  const addFlag = (title: string, description: string, actions?: [  {content: string, onClick: () => void }]) => {
    const newFlag = { id: Date.now(), title, description, actions };
    setFlags((prevFlags) => [newFlag, ...prevFlags]);
  };

  const dismissFlag = (id: number | string) => {
    setFlags((prevFlags) => prevFlags.filter((flag) => flag.id !== id));
  };

  return (
    <FlagContext.Provider value={{ flags, addFlag, dismissFlag }}>
      {children}
    </FlagContext.Provider>
  );
};

export const useFlag = () => {
  const context = useContext(FlagContext);
  if (!context) {
    throw new Error("useFlag must be used within a FlagProvider");
  }
  return context;
};
