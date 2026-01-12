import { UserButton } from "../../../../molecules/buttons/UserButton";
import { UserControlZustand } from "../UserControlZustand";

export function UserButtonZustand() {
  return (
    <UserButton>
      <UserControlZustand />
    </UserButton>
  );
}
