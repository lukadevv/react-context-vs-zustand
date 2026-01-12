import { useReactContextState } from "../../../../hooks/useReactContextState";
import { UserControl } from "../../../molecules/UserControl";

export function UserControlReact() {
  const {
    user: { avatar, name },
    setAvatar,
    setName,
  } = useReactContextState();

  return (
    <UserControl
      avatar={avatar}
      name={name}
      setAvatar={setAvatar}
      setName={setName}
    />
  );
}
