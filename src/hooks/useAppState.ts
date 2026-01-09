import { useContext } from "react";
import { AppStateHookContext } from "../contexts/app-hook.context";
import type { AppContextType } from "../types/app-context.type";

export function useAppStateSelector<T>(selector: (s: AppContextType) => T): T {
  const impl = useContext(AppStateHookContext);
  if (!impl) throw new Error("Missing provider");
  return selector(impl());
}
