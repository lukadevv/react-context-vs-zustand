type HexColor = `#${string}`;
export type Avatar = "";

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

export type ReactAppContextType = AppReadContextType & {
  setBackground: React.Dispatch<
    React.SetStateAction<AppReadContextType["theme"]["background"]>
  >;
  setTextColor: React.Dispatch<
    React.SetStateAction<AppReadContextType["theme"]["text"]>
  >;
  setName: React.Dispatch<
    React.SetStateAction<AppReadContextType["user"]["name"]>
  >;
  setAvatar: React.Dispatch<
    React.SetStateAction<AppReadContextType["user"]["avatar"]>
  >;
  setFontSize: React.Dispatch<
    React.SetStateAction<AppReadContextType["fontSize"]>
  >;
};
