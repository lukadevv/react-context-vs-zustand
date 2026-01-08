import { FontButton } from "../molecules/FontButton";
import { ThemeButton } from "../molecules/ThemeButton";
import { UserButton } from "../molecules/UserButton";

export function TopBar({
  themeButton,
  userButton,
  fontButton,
}: {
  themeButton: React.ComponentProps<typeof ThemeButton>;
  userButton: React.ComponentProps<typeof UserButton>;
  fontButton: React.ComponentProps<typeof FontButton>;
}) {
  return (
    <nav className="flex gap-2 justify-end items-center">
      <ThemeButton {...themeButton} />
      <UserButton {...userButton} />
      <FontButton {...fontButton} />
    </nav>
  );
}
