import { App } from "./App";
import { ZustandAdapterProvider } from "../../providers/zustand.provider";

export function ZustandContextApp() {
  return (
    <ZustandAdapterProvider>
      <App />;
    </ZustandAdapterProvider>
  );
}
