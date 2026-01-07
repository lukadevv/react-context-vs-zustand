import type { AppReadContextType } from "../types/app-context.type";

export const CONSTS_defaultReadContextValue: AppReadContextType = {
  fontSize: 14,
  theme: {
    background: "#fffff",
    text: "#00000",
  },
  user: {
    avatar: "",
    name: "John Doe",
  },
};

Object.freeze(CONSTS_defaultReadContextValue);
