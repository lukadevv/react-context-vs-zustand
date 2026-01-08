export function Dialog({
  open,
  close,
  title,
  children,
}: React.PropsWithChildren<{
  title: string;
  open: boolean;
  close: () => void;
}>) {
  return (
    <dialog open={open} className="absolute w-full h-full left-0 top-0 rounded-md bg-white/0">
      <div
        className="absolute w-full h-full left-0 top-0 bg-black/80 rounded-md"
        onClick={() => {
          if (open) {
            close();
          }
        }}
      />
      <section className="z-60 p-2 absolute w-full top-[50%] -translate-y-[50%]">
        <div className="flex flex-col w-full min-h-62.5 h-full bg-slate-600 p-2 rounded-2xl">
          <header className="w-full border-b border-stone-800 pb-2">
            <p className="text-lg font-bold">{title}</p>
          </header>
          <div className="flex-1 w-full pt-2">{children}</div>
          <footer className="w-full border-t pt-2 border-stone-800">
            <button
              onClick={close}
              className="text-sm font-bold text-black bg-red-500 p-2 rounded-lg border border-slate-800 w-full hover:opacity-80 cursor-pointer hover:scale-101 transition-all"
            >
              CLOSE
            </button>
          </footer>
        </div>
      </section>
    </dialog>
  );
}
