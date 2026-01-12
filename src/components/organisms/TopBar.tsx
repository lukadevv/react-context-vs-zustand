import type { ReactNode } from "react";
import React from "react";

export const TopBar = React.memo(LocalTopBar);

function LocalTopBar({
  fontButton,
  themeButton,
  userButton,
}: {
  themeButton: ReactNode;
  userButton: ReactNode;
  fontButton: ReactNode;
}) {
  return (
    <nav className="flex gap-2 justify-end items-center">
      {themeButton}
      {userButton}
      {fontButton}
    </nav>
  );
}
