import type { ReactNode } from "react";

export function TopBar({
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
