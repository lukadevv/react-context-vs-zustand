import type { AppReadContextType } from "../../types/app-context.type";

export function App({
  fontSize,
  theme: { background, text },
  user: { avatar, name },
}: AppReadContextType) {
  return <>{fontSize}</>;
}
