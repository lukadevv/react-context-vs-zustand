export function Layout({
  reactChildren,
  zustandChildren,
}: {
  reactChildren: React.ReactElement;
  zustandChildren: React.ReactElement;
}) {
  return (
    <main>
      <section>
        <h1>react context vs zustand</h1>
        <p>Description</p>
        <i className="fa-solid fa-user"></i>
      </section>
    </main>
  );
}
