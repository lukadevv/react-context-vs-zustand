import { STORE_zustand } from "../../../stores/zustand.store";
import { FontSizeControl } from "../../molecules/FontSizeControl";

export function FontSizeControlZustand() {
  const fontSize = STORE_zustand((s) => s.fontSize);
  const setFontSize = STORE_zustand((s) => s.setFontSize);

  return <FontSizeControl fontSize={fontSize} setFontSize={setFontSize} />;
}
