import { STORE_zustand } from "../../../../stores/zustand.store";
import { Avatar, Content, Description, Name } from "../../../organisms/Content";

export function ContentZustand() {
  const background = STORE_zustand((s) => s.theme.background);
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
  const avatar = STORE_zustand((s) => s.user.avatar);

  return <Avatar avatar={avatar} />;
}

function LocalDescription() {
  const text = STORE_zustand((s) => s.theme.text);
  const fontSize = STORE_zustand((s) => s.fontSize);

  return <Description fontSize={fontSize} text={text} />;
}

function LocalName() {
  const name = STORE_zustand((s) => s.user.name);
  const text = STORE_zustand((s) => s.theme.text);

  return <Name text={text} name={name} />;
}
