import { create } from "zustand";
import type { ZustandAppContextType } from "../types/zustand-api-context.type";
import { CONSTS_defaultReadContextValue } from "../consts/default-context-value.const";

export const STORE_zustand = create<ZustandAppContextType>((set) => ({
  ...CONSTS_defaultReadContextValue,
  setAvatar(avatar) {
    set((state) => ({
      user: {
        ...state.user,
        avatar,
      },
    }));
  },
  setName(name) {
    set((state) => ({
      user: {
        ...state.user,
        name,
      },
    }));
  },
  setBackground(background) {
    set((state) => ({
      theme: {
        ...state.theme,
        background,
      },
    }));
  },
  setFontSize(fontSize) {
    set(() => ({
      fontSize,
    }));
  },
  setTextColor(text) {
    set((state) => ({
      theme: {
        ...state.theme,
        text,
      },
    }));
  },
}));

Object.freeze(STORE_zustand);
