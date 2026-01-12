import React from "react";
import { TopBar } from "../../../organisms/TopBar";
import { FontButtonZustand } from "../molecules/buttons/FontButtonZustand";
import { ThemeButtonZustand } from "../molecules/buttons/ThemeButtonZustand";
import { UserButtonZustand } from "../molecules/buttons/UserButtonZustand";

export const TopBarZustand = React.memo(LocalTopBarZustand);

function LocalTopBarZustand() {
  return (
    <TopBar
      fontButton={<FontButtonZustand />}
      themeButton={<ThemeButtonZustand />}
      userButton={<UserButtonZustand />}
    />
  );
}
