import { useReactContextState } from "../../../../hooks/useReactContextState";
import { Header } from "../../../organisms/Header";
import { TopBarReact } from "./TopBarReact";

export function HeaderReact() {
  const {
    theme: { background },
  } = useReactContextState();

  return (
    <Header backgroundColor={background}>
      <TopBarReact />
    </Header>
  );
}
