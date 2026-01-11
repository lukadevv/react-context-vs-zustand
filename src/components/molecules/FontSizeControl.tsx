import React from "react";
import type {
  AppContextType,
  AppReadContextType,
} from "../../types/app-context.type";

export const FontSizeControl = React.memo(LocalFontSizeControl);

function LocalFontSizeControl({
  fontSize,
  setFontSize,
}: {
  fontSize: AppReadContextType["fontSize"];
  setFontSize: AppContextType["setFontSize"];
}) {
  return (
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
  );
}
