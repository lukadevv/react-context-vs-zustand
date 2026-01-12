import "../../styles/app.css";

export function App({
  header,
  content,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <>
      {header}
      {content}
    </>
  );
}
