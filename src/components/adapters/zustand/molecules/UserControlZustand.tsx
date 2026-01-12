import { STORE_zustand } from "../../../../stores/zustand.store";
import { UserControl } from "../../../molecules/UserControl";

export function UserControlZustand() {
  const avatar = STORE_zustand((s) => s.user.avatar);
  const name = STORE_zustand((s) => s.user.name);
  const setAvatar = STORE_zustand((s) => s.setAvatar);
  const setName = STORE_zustand((s) => s.setName);

  return (
    <UserControl
      avatar={avatar}
      name={name}
      setAvatar={setAvatar}
      setName={setName}
    />
  );
}
