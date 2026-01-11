import { useReactContextState } from "../../../hooks/useReactContextState";
import { FontSizeControl } from "../../molecules/FontSizeControl";

export function FontSizeControlReact() {
  const { fontSize, setFontSize } = useReactContextState();

  return <FontSizeControl fontSize={fontSize} setFontSize={setFontSize} />;
}
