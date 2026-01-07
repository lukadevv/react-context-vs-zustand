import type { AppReadContextType } from "./app-context.type";

export type ZustandAppContextType = AppReadContextType & {
  setBackground: (
    background: AppReadContextType["theme"]["background"]
  ) => void;
  setTextColor: (text: AppReadContextType["theme"]["text"]) => void;
  setName: (name: AppReadContextType["user"]["name"]) => void;
  setAvatar: (avatar: AppReadContextType["user"]["avatar"]) => void;
  setFontSize: (fontSize: AppReadContextType["fontSize"]) => void;
};
