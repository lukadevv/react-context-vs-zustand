import { Layout } from "./Layout";
import { ReactContextApp } from "./templates/ReactContextApp";
import { ZustandContextApp } from "./templates/ZustandContextApp";

export default function Root() {
  return (
    <Layout
      reactChildren={<ReactContextApp />}
      zustandChildren={<ZustandContextApp />}
    />
  );
}
