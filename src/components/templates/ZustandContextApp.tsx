import { App } from "./App";
import { STORE_zustand } from "../../stores/zustand.store";

export function ZustandContextApp() {
  return <Body />;
}

function Body() {
  // TODO: Do it granular and avoid component props.
  // TODO: Do it granular and avoid component props.
  // TODO: Do it granular and avoid component props.

  const {
    fontSize,
    theme,
    user,
    setAvatar,
    setBackground,
    setFontSize,
    setName,
    setTextColor,
  } = STORE_zustand();

  return (
    <App
      fontSize={fontSize}
      theme={theme}
      user={user}
      setAvatar={setAvatar}
      setBackgroundColor={setBackground}
      setFontSize={setFontSize}
      setName={setName}
      setTextColor={setTextColor}
    />
  );
}
