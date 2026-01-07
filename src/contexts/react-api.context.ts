import React from "react";
import type { AppReadContextType } from "../types/app-context.type";

export const ReactAPIContext = React.createContext<AppReadContextType>({
  fontSize: 14,
  theme: {
    background: "#fffff",
    text: "#00000",
  },
  user: {
    avatar: "",
    name: "John Doe",
  },
});
