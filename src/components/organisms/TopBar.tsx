import { FontButton } from "../molecules/buttons/FontButton";
import { ThemeButton } from "../molecules/buttons/ThemeButton";
import { UserButton } from "../molecules/buttons/UserButton";

// TODO: Remove this, use adapters
// TODO: Remove this, use adapters
// TODO: Remove this, use adapters
// TODO: Remove this, use adapters
export function TopBar() {
  return (
    <nav className="flex gap-2 justify-end items-center">
      <ThemeButton />
      <UserButton />
      <FontButton />
    </nav>
  );
}
