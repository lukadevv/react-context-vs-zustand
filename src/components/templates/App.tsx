import type { AppReadContextType } from "../../types/app-context.type";
import "../../styles/app.css";
import { TopBar } from "../organisms/TopBar";
import { Content } from "../organisms/Content";
import React from "react";

export const App = React.memo(LocalApp);

function LocalApp({
  fontSize,
  theme: { background, text },
  user: { avatar, name },
  setBackgroundColor,
  setTextColor,
  setAvatar,
  setName,
  setFontSize,
}: AppReadContextType & {
  setBackgroundColor: (
    color: AppReadContextType["theme"]["background"]
  ) => void;
  setTextColor: (color: AppReadContextType["theme"]["text"]) => void;
  setAvatar: (avatar: AppReadContextType["user"]["avatar"]) => void;
  setName: (name: AppReadContextType["user"]["name"]) => void;
  setFontSize: (fontSize: AppReadContextType["fontSize"]) => void;
}) {
  return (
    <>
      <header
        className="mb-2 p-1.5 rounded-sm border"
        style={{
          backgroundColor: background,
        }}
      >
        <TopBar
          themeButton={{
            background: {
              color: background,
              setColor: (color) =>
                setBackgroundColor(
                  color as AppReadContextType["theme"]["background"]
                ),
            },
            text: {
              color: text,
              setColor: (color) =>
                setTextColor(color as AppReadContextType["theme"]["text"]),
            },
          }}
          userButton={{
            avatar,
            name,
            setAvatar,
            setName,
          }}
          fontButton={{
            fontSize,
            setFontSize,
          }}
        />
      </header>

      <Content
        theme={{
          background,
          text,
        }}
        fontSize={fontSize}
        user={{
          avatar,
          name,
        }}
      />
    </>
  );
}
