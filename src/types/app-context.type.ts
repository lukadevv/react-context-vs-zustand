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
