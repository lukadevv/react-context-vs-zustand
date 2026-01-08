import { useState } from "react";
import { Dialog } from "../organisms/Dialog";
import { cn } from "../../utilities/cn";

export function SettingsButton({
  title,
  children,
  icon,
}: React.PropsWithChildren<{
  title: string;
  icon: string;
}>) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <button
      className={cn(
        "flex items-center justify-center bg-black p-1.25 rounded-sm w-9 h-9 border",
        !open &&
          "cursor-pointer hover:opacity-85 hover:scale-105 transition-all "
      )}
      onClick={!open ? () => setOpen((old) => !old) : undefined}
    >
      <i className={cn("fa-solid fa-lg", icon)} />
      <Dialog open={open} close={() => setOpen(false)} title={title}>
        {children}
      </Dialog>
    </button>
  );
}
