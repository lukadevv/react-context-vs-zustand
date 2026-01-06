export function Layout({
  reactChildren,
  zustandChildren,
}: {
  reactChildren: React.ReactElement;
  zustandChildren: React.ReactElement;
}) {
  return (
    <main className="max-w-300 w-full m-auto">
      <section className="py-4 max-w-200 m-auto">
        <h1 className="text-6xl font-bold capitalize text-center">
          react context vs zustand
        </h1>
        <p className="mt-8">Description</p>
      </section>
      <section className="border bg-black/50 p-2 rounded-sm">
        <div>{reactChildren}</div>
        <div>{zustandChildren}</div>
      </section>
    </main>
  );
}
