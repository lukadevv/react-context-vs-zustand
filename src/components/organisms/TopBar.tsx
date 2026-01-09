import { FontButton } from "../molecules/FontButton";
import { ThemeButton } from "../molecules/ThemeButton";
import { UserButton } from "../molecules/UserButton";

export function TopBar() {
  return (
    <nav className="flex gap-2 justify-end items-center">
      <ThemeButton />
      <UserButton />
      <FontButton />
    </nav>
  );
}
