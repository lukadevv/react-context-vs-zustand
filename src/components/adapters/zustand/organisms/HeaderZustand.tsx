import { STORE_zustand } from "../../../../stores/zustand.store";
import { Header } from "../../../organisms/Header";
import { TopBarZustand } from "./TopBarZustand";

export function HeaderZustand() {
  const background = STORE_zustand((s) => s.theme.background);

  return (
    <Header backgroundColor={background}>
      <TopBarZustand />
    </Header>
  );
}
