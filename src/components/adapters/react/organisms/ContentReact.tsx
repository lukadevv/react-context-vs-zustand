import { useReactContextState } from "../../../../hooks/useReactContextState";
import { Avatar, Content, Description, Name } from "../../../organisms/Content";

export function ContentReact() {
  const {
    theme: { background },
  } = useReactContextState();

  return (
    <Content
      background={background}
      avatarChildren={<LocalAvatar />}
      descriptionChildren={<LocalDescription />}
      nameChildren={<LocalName />}
    />
  );
}

function LocalAvatar() {
  const {
    user: { avatar },
  } = useReactContextState();

  return <Avatar avatar={avatar} />;
}

function LocalDescription() {
  const {
    theme: { text },
    fontSize,
  } = useReactContextState();

  return <Description fontSize={fontSize} text={text} />;
}

function LocalName() {
  const {
    theme: { text },
    user: { name },
  } = useReactContextState();

  return <Name text={text} name={name} />;
}
