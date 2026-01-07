import { useContext } from "react";
import { App } from "../templates/App";
import { ReactAPIContext } from "../../contexts/react-api.context";
import { ReactAPIProvider } from "../../providers/react-api.provider";

export function ReactContextApp() {
  return (
    <ReactAPIProvider>
      <Body />
    </ReactAPIProvider>
  );
}

function Body() {
  const { fontSize, theme, user } = useContext(ReactAPIContext);

  return <App fontSize={fontSize} theme={theme} user={user} />;
}
