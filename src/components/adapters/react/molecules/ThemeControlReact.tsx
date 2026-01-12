import { useReactContextState } from "../../../../hooks/useReactContextState";
import { ThemeControl } from "../../../molecules/ThemeControl";

export function ThemeControlReact() {
  const {
    setBackground,
    setTextColor,
    theme: { background, text },
  } = useReactContextState();

  return (
    <ThemeControl
      background={background}
      setBackground={setBackground}
      setTextColor={setTextColor}
      text={text}
    />
  );
}
