import type { AppReadContextType } from "./app-context.type";

export type ReactAppContextType = AppReadContextType & {
  setBackground: React.Dispatch<
    React.SetStateAction<AppReadContextType["theme"]["background"]>
  >;
  setTextColor: React.Dispatch<
    React.SetStateAction<AppReadContextType["theme"]["text"]>
  >;
  setName: React.Dispatch<
    React.SetStateAction<AppReadContextType["user"]["name"]>
  >;
  setAvatar: React.Dispatch<
    React.SetStateAction<AppReadContextType["user"]["avatar"]>
  >;
  setFontSize: React.Dispatch<
    React.SetStateAction<AppReadContextType["fontSize"]>
  >;
};
