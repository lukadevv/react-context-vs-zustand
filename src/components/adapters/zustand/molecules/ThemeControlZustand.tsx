import { STORE_zustand } from "../../../../stores/zustand.store";
import { ThemeControl } from "../../../molecules/ThemeControl";

export function ThemeControlZustand() {
  const background = STORE_zustand((s) => s.theme.background);
  const text = STORE_zustand((s) => s.theme.text);
  const setBackground = STORE_zustand((s) => s.setBackground);
  const setTextColor = STORE_zustand((s) => s.setTextColor);

  return (
    <ThemeControl
      background={background}
      setBackground={setBackground}
      setTextColor={setTextColor}
      text={text}
    />
  );
}
