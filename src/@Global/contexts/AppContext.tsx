import { createContext, useContext, useEffect, useState } from "react";
import LoadingSplashScreen from "../components/Loading/LoadingSplashScreen";
import { AppContextType, AppProviderProps, ErrorResponse } from "../@types";
import { useNavigate } from "react-router";

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [appLoad, setAppLoad] = useState(false);
  const [error, setError] = useState<ErrorResponse | null>(null);

  const navigate = useNavigate();

  const contextValue: AppContextType = {
    loading,
    setLoading,
    error,
    setError,
    appLoad,
    setAppLoad,
  };

  return appLoad ? (
    <LoadingSplashScreen />
  ) : (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext should be used within a AppProvider");
  }
  return ctx;
};
