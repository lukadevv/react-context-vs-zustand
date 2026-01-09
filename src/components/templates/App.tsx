import "../../styles/app.css";
import { TopBar } from "../organisms/TopBar";
import { Content } from "../organisms/Content";
import { useAppStateSelector } from "../../hooks/useAppState";

export function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

function Header() {
  const background = useAppStateSelector((s) => s.theme.background);

  return (
    <header
      className="mb-2 p-1.5 rounded-sm border"
      style={{
        backgroundColor: background,
      }}
    >
      <TopBar />
    </header>
  );
}
