import { STORE_zustand } from "../stores/zustand.store";
import type { AppContextType } from "../types/app-context.type";

export function useAppStateFromZustand(): AppContextType {
  return {
    user: {
      name: STORE_zustand((s) => s.user.name),
      avatar: STORE_zustand((s) => s.user.avatar),
    },
    theme: {
      background: STORE_zustand((s) => s.theme.background),
      text: STORE_zustand((s) => s.theme.text),
    },
    fontSize: STORE_zustand((s) => s.fontSize),
    setFontSize: STORE_zustand((s) => s.setFontSize),
    setName: STORE_zustand((s) => s.setName),
    setAvatar: STORE_zustand((s) => s.setAvatar),
    setBackground: STORE_zustand((s) => s.setBackground),
    setTextColor: STORE_zustand((s) => s.setTextColor),
  };
}
