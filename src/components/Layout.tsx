import { cn } from "../utilities/cn";

export function Layout({
  reactChildren,
  zustandChildren,
}: {
  reactChildren: React.ReactElement;
  zustandChildren: React.ReactElement;
}) {
  return (
    <main className="max-w-260 w-full m-auto px-2 py-2">
      <section className="py-4 max-w-160 m-auto text-center">
        <p className="text-4xl font-black">
          Exploring render behavior between{" "}
          <a
            href="https://reactjs.org/docs/context.html"
            className="text-sky-400 hover:underline react-context-word"
          >
            React Context
          </a>{" "}
          and{" "}
          <a
            href="https://zustand-demo.pmnd.rs/"
            className="text-fuchsia-400 hover:underline zustand-word"
          >
            Zustand
          </a>
        </p>
        <hr className="mt-8 mx-30 opacity-50" />
        <p className="mt-2 text-lg opacity-80 max-w-100 m-auto">
          Same UI, same logic, same interactions - different state propagation
          strategies.
        </p>
      </section>

      <section className="flex w-full max-[760px]:flex-wrap items-center justify-between gap-5 mt-4">
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
    <div
      className={cn(
        "app w-full border rounded-sm app relative max-w-126 m-auto",
        name === "Zustand" ? "zustand-app" : "react-context-app"
      )}
    >
      <p
        className={cn(
          "text-2xl text-center font-black bg-black/60 py-2 rounded-t-sm border-b border-white",
          name === "Zustand" ? "zustand-word" : "react-context-word"
        )}
      >
        {name}
      </p>
      <div className="p-2 rounded-b-sm bg-black/60">{children}</div>
    </div>
  );
}
