import { useMemo, useState } from "react";
import { ReactAPIContext } from "../contexts/react-api.context";
import type { ReactAppContextType } from "../types/react-api-context.type";

export function ReactAPIProvider({ children }: React.PropsWithChildren) {
  const [fontSize, setFontSize] = useState<ReactAppContextType["fontSize"]>(0);
  const [name, setName] =
    useState<ReactAppContextType["user"]["name"]>("John Doe");
  const [avatar, setAvatar] =
    useState<ReactAppContextType["user"]["avatar"]>("");
  const [background, setBackground] =
    useState<ReactAppContextType["theme"]["background"]>("#fffff");
  const [text, setTextColor] =
    useState<ReactAppContextType["theme"]["text"]>("#00000");

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
      {children}
    </ReactAPIContext.Provider>
  );
}
