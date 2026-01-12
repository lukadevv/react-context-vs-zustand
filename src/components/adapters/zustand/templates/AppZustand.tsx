import { App } from "../../../templates/App";
import { ContentZustand } from "../organisms/ContentZustand";
import { HeaderZustand } from "../organisms/HeaderZustand";

export function AppZustand() {
  return <App content={<ContentZustand />} header={<HeaderZustand />} />;
}
