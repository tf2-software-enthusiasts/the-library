export type Whitelists = {
  [whiteListName: string]: {
    filename: string;
    last_change: number;
    url: string;
  };
};
