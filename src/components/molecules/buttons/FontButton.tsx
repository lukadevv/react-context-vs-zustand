import { SettingsButton } from "./SettingsButton";

export function FontButton({ children }: React.PropsWithChildren) {
  return (
    <SettingsButton title="Font Settings" icon="fa-font">
      {children}
    </SettingsButton>
  );
}
