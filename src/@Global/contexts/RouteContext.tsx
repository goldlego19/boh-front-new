// import { view } from "@forge/bridge";
import { createContext, useContext, useEffect, useState } from "react";

type LocationDescriptor = {
  pathname: string;
  search?: string;
  hash?: string;
  state?: any;
};

type UnlistenCallback = () => void;
type Action = "POP" | "PUSH" | "REPLACE";

type HistoryT = {
  action: Action;
  location: LocationDescriptor;
  createHref(to: LocationDescriptor): string;
  push(path: string, state?: any): void;
  push(location: LocationDescriptor): void;
  replace(path: string, state?: any): void;
  replace(location: LocationDescriptor): void;
  go(n: number): void;
  goBack(): void;
  goForward(): void;
  listen(
    listener: (location: LocationDescriptor, action: Action) => void
  ): UnlistenCallback;
};

interface RouteContextProps {
  history: HistoryT | undefined;
  historyState: HistoryState | undefined;
  setHistory: React.Dispatch<React.SetStateAction<HistoryT | undefined>>;
  setHistoryState: React.Dispatch<
    React.SetStateAction<HistoryState | undefined>
  >;
}
interface RouteProviderProps {
  children: React.ReactNode;
}

interface HistoryState {
  action: Action | any;
  location: LocationDescriptor;
}

const RouteContext = createContext<RouteContextProps | undefined>(undefined);

export const RouteProvider = ({ children }: RouteProviderProps) => {
  const [history, setHistory] = useState<HistoryT>();

  useEffect(() => {
    // view.createHistory().then((newHistory: HistoryT) => {
    //   setHistory(newHistory);
    // });
  }, []);

  const [historyState, setHistoryState] = useState<HistoryState>();

  useEffect(() => {
    if (!historyState && history) {
      setHistoryState({
        action: history.action,
        location: history.location,
      });
    }
  }, [history, historyState]);

  useEffect(() => {
    if (history) {
      history.listen((location, action) => {
        setHistoryState({
          action,
          location,
        });
      });
    }
  }, [history]);

  const returnValue = {
    history,
    historyState,
    setHistory,
    setHistoryState,
  };

  return (
    <RouteContext.Provider value={returnValue}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteContext = () => {
  const context = useContext(RouteContext);
  if (context === undefined) {
    throw new Error("useRouteContext must be used within a RouteProvider");
  }
  return context;
};
