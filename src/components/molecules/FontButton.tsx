import type { AppReadContextType } from "../../types/app-context.type";
import { SettingsButton } from "./SettingsButton";

export function FontButton({
  fontSize,
  setFontSize,
}: {
  fontSize: AppReadContextType["fontSize"];
  setFontSize: (fontSize: AppReadContextType["fontSize"]) => void;
}) {
  return (
    <SettingsButton title="Font Settings" icon="fa-font">
      <section className="flex flex-col gap-2 justify-evenly items-center bg-black/50 rounded-2xl p-4 border">
        <p>Font Size</p>
        <div className="flex w-full">
          <div className="w-full flex gap-2">
            <input
              type="range"
              value={fontSize}
              min={4}
              max={40}
              className="w-full"
              onChange={(value) => setFontSize(Number(value.target.value))}
            />
            <p>{fontSize}</p>
          </div>
        </div>
      </section>
    </SettingsButton>
  );
}
