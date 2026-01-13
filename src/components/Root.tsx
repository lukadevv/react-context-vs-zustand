import { AppReact } from "./adapters/react/templates/AppReact";
import { AppZustand } from "./adapters/zustand/templates/AppZustand";
import { Layout } from "./Layout";
import "../styles/main.css";

export default function Root() {
  return (
    <Layout reactChildren={<AppReact />} zustandChildren={<AppZustand />} />
  );
}
