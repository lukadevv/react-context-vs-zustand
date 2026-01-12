import { ReactAPIProvider } from "../../../../providers/react-api.provider";
import { App } from "../../../templates/App";
import { ContentReact } from "../organisms/ContentReact";
import { HeaderReact } from "../organisms/HeaderReact";

export function AppReact() {
  return (
    <ReactAPIProvider>
      <App content={<ContentReact />} header={<HeaderReact />} />
    </ReactAPIProvider>
  );
}
