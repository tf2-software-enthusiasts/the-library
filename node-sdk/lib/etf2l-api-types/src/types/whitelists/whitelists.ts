export type Whitelist = {
  [whiteListName: string]: {
    filename: string;
    last_change: number;
    url: string;
  };
};