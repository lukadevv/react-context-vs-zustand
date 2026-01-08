import { SettingsButton } from "./SettingsButton";
import { SketchPicker, type Color } from "react-color";

export function ThemeButton({
  background,
  text,
}: {
  background: {
    color: Color;
    setColor: (color: Color) => void;
  };
  text: {
    color: Color;
    setColor: (color: Color) => void;
  };
}) {
  return (
    <SettingsButton title="Theme Settings" icon="fa-brush">
      <section className="flex justify-evenly items-center bg-black/50 rounded-2xl p-4 border">
        <SettingColor
          title="Background"
          color={background.color}
          setColor={background.setColor}
        />
        <SettingColor
          title="Text"
          color={text.color}
          setColor={text.setColor}
        />
      </section>
    </SettingsButton>
  );
}

function SettingColor({
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
