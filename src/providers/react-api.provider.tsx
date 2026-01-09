import { useMemo, useState } from "react";
import { ReactAPIContext } from "../contexts/react-api.context";
import type { ReactAppContextType } from "../types/react-api-context.type";
import { CONSTS_defaultReadContextValue } from "../consts/default-context-value.const";
import { AppStateHookContext } from "../contexts/app-hook.context";
import { useAppStateFromReactContext } from "../hooks/useAppStateFromReactContext";

export function ReactAPIProvider({ children }: React.PropsWithChildren) {
  const [fontSize, setFontSize] = useState<ReactAppContextType["fontSize"]>(
    CONSTS_defaultReadContextValue.fontSize
  );
  const [name, setName] = useState<ReactAppContextType["user"]["name"]>(
    CONSTS_defaultReadContextValue.user.name
  );
  const [avatar, setAvatar] = useState<ReactAppContextType["user"]["avatar"]>(
    CONSTS_defaultReadContextValue.user.avatar
  );
  const [background, setBackground] = useState<
    ReactAppContextType["theme"]["background"]
  >(CONSTS_defaultReadContextValue.theme.background);
  const [text, setTextColor] = useState<ReactAppContextType["theme"]["text"]>(
    CONSTS_defaultReadContextValue.theme.text
  );

  const value = useMemo<ReactAppContextType>(
    () => ({
      fontSize,
      theme: {
        background,
        text,
      },
      user: {
        avatar,
        name,
      },
      setAvatar,
      setBackground,
      setFontSize,
      setName,
      setTextColor,
    }),
    [avatar, background, fontSize, name, text]
  );
  return (
    <ReactAPIContext.Provider value={value}>
      <AppStateHookContext.Provider value={useAppStateFromReactContext}>
        {children}
      </AppStateHookContext.Provider>
    </ReactAPIContext.Provider>
  );
}
