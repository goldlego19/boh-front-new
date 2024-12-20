import { ReactNode } from "react";

export interface ErrorResponse {
  error: string;
  message: string;
}

export interface SuccessResponse {
  body: {
    data: unknown;
    message: string;
  };
  status: number;
}
export enum categoryType {
  avail = "Available",
  error = "Error",
}
export enum statusType {
  sync = "Synced",
  navail = "Not Available",
}
export interface Account {
  id: string;
  name: string;
  key: string;
  lead: string;
  category: categoryType;
  status: statusType;
}

export interface AppContextType {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: ErrorResponse | null;
  setError: React.Dispatch<React.SetStateAction<ErrorResponse | null>>;
  appLoad: boolean;
  setAppLoad: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface AppProviderProps {
  children: ReactNode;
}

export interface Flag {
  id: number | string;
  title: string;
  description: string;
  actions?: [{ content: string; onClick: () => void }];
}

export interface FlagContextType {
  flags: Flag[];
  addFlag: (
    title: string,
    description: string,
    actions?: [{ content: string; onClick: () => void }]
  ) => void;
  dismissFlag: (id: number | string) => void;
}
