import React from "react";
import { SettingsButton } from "./SettingsButton";

export function ThemeButton({ children }: React.PropsWithChildren) {
  return (
    <SettingsButton title="Theme Settings" icon="fa-brush">
      {children}
    </SettingsButton>
  );
}
