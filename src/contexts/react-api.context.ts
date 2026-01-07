import React from "react";
import type { ReactAppContextType } from "../types/react-api-context.type";
import { CONSTS_defaultReadContextValue } from "../consts/default-context-value.const";

export const ReactAPIContext = React.createContext<ReactAppContextType>({
  ...CONSTS_defaultReadContextValue,
  setAvatar: () => {},
  setBackground: () => {},
  setFontSize: () => {},
  setName: () => {},
  setTextColor: () => {},
});
