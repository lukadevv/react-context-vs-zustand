import React from "react";
import { SettingsButton } from "./SettingsButton";
import { SketchPicker, type Color } from "react-color";
import { useAppStateSelector } from "../../hooks/useAppState";

export function ThemeButton() {
  const background = useAppStateSelector((s) => s.theme.background);
  const text = useAppStateSelector((s) => s.theme.text);
  const setBackground = useAppStateSelector((s) => s.setBackground);
  const setTextColor = useAppStateSelector((s) => s.setTextColor);

  return (
    <SettingsButton title="Theme Settings" icon="fa-brush">
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
    </SettingsButton>
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
