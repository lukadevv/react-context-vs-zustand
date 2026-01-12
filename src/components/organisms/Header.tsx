export function Header({
  backgroundColor,
  children,
}: {
  backgroundColor: string;
  children: React.ReactNode;
}) {
  return (
    <header
      className="mb-2 p-1.5 rounded-sm border"
      style={{
        backgroundColor,
      }}
    >
      {children}
    </header>
  );
}
