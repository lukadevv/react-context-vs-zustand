import { useContext } from "react";
import { AbstractApp } from "../templates/AbstractApp";
import { ReactAPIContext } from "../../contexts/react-api.context";
import { ReactAPIProvider } from "../../providers/react-api.provider";

export function MainReactContext() {
  return (
    <ReactAPIProvider>
      <Body />
    </ReactAPIProvider>
  );
}

function Body() {
  const { fontSize, theme, user } = useContext(ReactAPIContext);

  return <AbstractApp fontSize={fontSize} theme={theme} user={user} />;
}
