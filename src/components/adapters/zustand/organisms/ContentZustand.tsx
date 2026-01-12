import { STORE_zustand } from "../../../../stores/zustand.store";
import { Content } from "../../../organisms/Content";

export function ContentZustand() {
  const avatar = STORE_zustand((s) => s.user.avatar);
  const name = STORE_zustand((s) => s.user.name);
  const background = STORE_zustand((s) => s.theme.background);
  const text = STORE_zustand((s) => s.theme.text);
  const fontSize = STORE_zustand((s) => s.fontSize);

  return (
    <Content
      avatar={avatar}
      background={background}
      fontSize={fontSize}
      name={name}
      text={text}
    />
  );
}
