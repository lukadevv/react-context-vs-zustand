import { ZustandAdapterProvider } from "../../../../providers/zustand.provider";
import { App } from "../../../templates/App";
import { ContentReact } from "../organisms/ContentReact";
import { HeaderReact } from "../organisms/HeaderReact";

export function AppReact() {
  return (
    <ZustandAdapterProvider>
      <App content={<ContentReact />} header={<HeaderReact />} />;
    </ZustandAdapterProvider>
  );
}
