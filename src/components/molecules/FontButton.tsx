import { useAppStateSelector } from "../../hooks/useAppState";
import { SettingsButton } from "./SettingsButton";

export function FontButton() {
  const fontSize = useAppStateSelector((s) => s.fontSize);
  const setFontSize = useAppStateSelector((s) => s.setFontSize);

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
