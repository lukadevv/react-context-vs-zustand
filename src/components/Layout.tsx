export function Layout({
  reactChildren,
  zustandChildren,
}: {
  reactChildren: React.ReactElement;
  zustandChildren: React.ReactElement;
}) {
  return (
    <main className="max-w-350 w-full m-auto px-2 bg-slate-800 rounded-lg my-2 border">
      <section className="py-4 max-w-300 m-auto">
        <h1 className="text-3xl font-bold uppercase text-center">
          react context vs{" "}
          <a
            href="https://zustand-demo.pmnd.rs/"
            className="hover:underline hover:opacity-80"
          >
            zustand
          </a>
        </h1>
        <div className="space-y-4 py-4">
          <p className="mt-8 description">
            This experiment compares the render behavior of two identical UI
            implementations: one powered by <strong>React Context</strong> and
            the other by <strong>Zustand</strong>. Both apps share the same
            layout, components, and interactions—the only difference lies in how
            state is consumed.
          </p>
          <p>
            The goal is to visualize a practical performance distinction:{" "}
            <em>Zustand</em> enables granular subscriptions via selectors at the
            leaf component level, which confines re-renders to only the
            components that actually depend on the changed state. In contrast,{" "}
            <em>React Context</em> broadcasts updates to all consumers of the
            provider, unless additional splitting or optimization patterns are
            applied.
          </p>
          <p>
            How to use this demo: interact with the controls (sliders, toggles,
            inputs) and observe the renders.
          </p>
        </div>
      </section>
      <section className="flex w-full max-[760px]:flex-wrap gap-3 border bg-black/50 p-2 rounded-sm">
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
    <div className="w-full border rounded-sm app relative bg-black">
      <p className="text-2xl text-center font-black bg-black/85 py-2 rounded-t-sm border-b">
        {name}
      </p>
      <div className="p-2 rounded-b-sm">{children}</div>
    </div>
  );
}
