import { App } from "./App";
import { STORE_zustand } from "../../stores/zustand.store";

export function ZustandContextApp() {
  return <Body />;
}

function Body() {
  const { fontSize, theme, user } = STORE_zustand();

  return <App fontSize={fontSize} theme={theme} user={user} />;
}
