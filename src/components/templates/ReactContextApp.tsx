import { App } from "./App";
import { ReactAPIProvider } from "../../providers/react-api.provider";

export function ReactContextApp() {
  return (
    <ReactAPIProvider>
      <App />;
    </ReactAPIProvider>
  );
}
