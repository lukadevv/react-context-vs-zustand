import { TopBar } from "../../../organisms/TopBar";
import { FontButtonReact } from "../molecules/buttons/FontButtonReact";
import { ThemeButtonReact } from "../molecules/buttons/ThemeButtonReact";
import { UserButtonReact } from "../molecules/buttons/UserButtonReact";

export function TopBarReact() {
  return (
    <TopBar
      fontButton={<FontButtonReact />}
      themeButton={<ThemeButtonReact />}
      userButton={<UserButtonReact />}
    />
  );
}
