import { useReactContextState } from "../../../../hooks/useReactContextState";
import { Content } from "../../../organisms/Content";

export function ContentReact() {
  const {
    user: { avatar, name },
    theme: { background, text },
    fontSize,
  } = useReactContextState();

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
