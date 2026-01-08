export function Layout({
  reactChildren,
  zustandChildren,
}: {
  reactChildren: React.ReactElement;
  zustandChildren: React.ReactElement;
}) {
  return (
    <main className="max-w-350 w-full m-auto">
      <section className="py-4 max-w-200 m-auto">
        <h1 className="text-6xl font-bold capitalize text-center">
          react context vs zustand
        </h1>
        <p className="mt-8">Description</p>
      </section>
      <section className="flex flex-wrap w-full gap-2 border bg-black/50 p-2 rounded-sm">
        <WrappedApp name="React Context">{reactChildren}</WrappedApp>
        <WrappedApp name="Zustand">{zustandChildren}</WrappedApp>
      </section>
    </main>
  );
}

function WrappedApp({
  name,
  children,
}: React.PropsWithChildren<{ name: string }>) {
  return (
    <div className="w-full border rounded-sm app relative">
      <p className="text-2xl text-center font-black bg-black/85 py-2 rounded-t-sm border-b">
        {name}
      </p>
      <div className="p-2 rounded-b-sm min-h-200">{children}</div>
    </div>
  );
}
