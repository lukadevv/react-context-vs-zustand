import { Layout } from "./Layout";
import { MainReactContext } from "./organisms/MainReactContext";

export default function App() {
  return (
    <Layout reactChildren={<MainReactContext />} zustandChildren={<></>} />
  );
}
