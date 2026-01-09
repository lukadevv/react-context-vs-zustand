import { useContext } from "react";
import type { AppContextType } from "../types/app-context.type";
import { ReactAPIContext } from "../contexts/react-api.context";

export function useAppStateFromReactContext(): AppContextType {
  return useContext(ReactAPIContext);
}
