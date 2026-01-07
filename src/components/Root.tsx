import { Layout } from "./Layout";
import { ReactContextApp } from "./organisms/ReactContextApp";
import { ZustandContextApp } from "./organisms/ZustandContextApp";

export default function Root() {
  return (
    <Layout
      reactChildren={<ReactContextApp />}
      zustandChildren={<ZustandContextApp />}
    />
  );
}
