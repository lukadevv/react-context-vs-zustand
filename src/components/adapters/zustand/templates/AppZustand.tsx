import { ZustandAdapterProvider } from "../../../../providers/zustand.provider";
import { App } from "../../../templates/App";
import { ContentZustand } from "../organisms/ContentZustand";
import { HeaderZustand } from "../organisms/HeaderZustand";

export function AppZustand() {
  return (
    <ZustandAdapterProvider>
      <App content={<ContentZustand />} header={<HeaderZustand />} />;
    </ZustandAdapterProvider>
  );
}
