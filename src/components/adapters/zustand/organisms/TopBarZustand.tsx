import { TopBar } from "../../../organisms/TopBar";
import { FontButtonZustand } from "../molecules/buttons/FontButtonZustand";
import { ThemeButtonZustand } from "../molecules/buttons/ThemeButtonZustand";
import { UserButtonZustand } from "../molecules/buttons/UserButtonZustand";

export function TopBarZustand() {
  return (
    <TopBar
      fontButton={<FontButtonZustand />}
      themeButton={<ThemeButtonZustand />}
      userButton={<UserButtonZustand />}
    />
  );
}
