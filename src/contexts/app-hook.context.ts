import { createContext } from "react";
import type { AppContextType } from "../types/app-context.type";

export const AppStateHookContext = createContext<(() => AppContextType) | null>(
  null
);
