import { SettingsButton } from "./SettingsButton";

export function UserButton({ children }: React.PropsWithChildren) {
  return (
    <SettingsButton title="User Settings" icon="fa-user">
      {children}
    </SettingsButton>
  );
}
