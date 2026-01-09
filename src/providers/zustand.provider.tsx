import { AppStateHookContext } from "../contexts/app-hook.context";
import { useAppStateFromZustand } from "../hooks/useAppStateFromZustand";

export function ZustandAdapterProvider({ children }: React.PropsWithChildren) {
  return (
    <AppStateHookContext.Provider value={useAppStateFromZustand}>
      {children}
    </AppStateHookContext.Provider>
  );
}
