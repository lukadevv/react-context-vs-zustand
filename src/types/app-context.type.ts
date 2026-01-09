type HexColor = `#${string}`;
export type Avatar =
  | "fa-user"
  | "fa-house"
  | "fa-alarm-clock"
  | "fa-truck"
  | "fa-calendar"
  | "fa-hand"
  | "fa-trophy"
  | "fa-suitcase"
  | "fa-web-awesome"
  | "fa-bolt";

/**
 * Main Context
 *
 * Values have to be used for both contexts and those have to be the most
 * volatile possible.
 */
export type AppReadContextType = {
  theme: {
    background: HexColor;
    text: HexColor;
  };
  user: {
    name: string;
    avatar: Avatar;
  };
  fontSize: number;
};

export type AppContextType = AppReadContextType & {
  setBackground: (value: AppReadContextType["theme"]["background"]) => void;
  setTextColor: (value: AppReadContextType["theme"]["text"]) => void;
  setName: (value: AppReadContextType["user"]["name"]) => void;
  setAvatar: (value: AppReadContextType["user"]["avatar"]) => void;
  setFontSize: (value: AppReadContextType["fontSize"]) => void;
};
