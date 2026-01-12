import React from "react";
import { SketchPicker, type Color } from "react-color";
import type {
  AppContextType,
  AppReadContextType,
} from "../../types/app-context.type";

export const ThemeControl = React.memo(LocalThemeControl);

function LocalThemeControl({
  text,
  background,
  setBackground,
  setTextColor,
}: {
  background: AppReadContextType["theme"]["background"];
  text: AppReadContextType["theme"]["text"];
  setBackground: AppContextType["setBackground"];
  setTextColor: AppContextType["setTextColor"];
}) {
  return (
    <section className="flex justify-evenly items-center bg-black/50 rounded-2xl p-4 border">
      <SettingColor
        title="Background"
        color={background}
        setColor={(color) =>
          setBackground(color as Parameters<typeof setBackground>[0])
        }
      />
      <SettingColor
        title="Text"
        color={text}
        setColor={(color) =>
          setTextColor(color as Parameters<typeof setTextColor>[0])
        }
      />
    </section>
  );
}

const SettingColor = React.memo(LocalSettingColor);

function LocalSettingColor({
  title,
  color,
  setColor,
}: {
  title: string;
  color: Color;
  setColor: (color: Color) => void;
}) {
  return (
    <div className="bg-black/50 p-4 rounded-2xl border border-white/0 hover:border-white">
      <p className="pb-4 mb-2 text-lg font-bold">{title}</p>
      <SketchPicker
        styles={{
          default: {
            picker: {
              backgroundColor: "lightgray",
              color: "white",
            },
          },
        }}
        onChange={(color) => setColor(color.hex)}
        color={color}
      />
    </div>
  );
}
