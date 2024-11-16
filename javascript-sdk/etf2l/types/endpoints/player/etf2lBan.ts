import type { Ban } from "../../common/ban.ts";
import type { MultiPage } from "../../mod.ts";

export type Etf2lBan = {
  bans: MultiPage & {
    data: Ban[];
  };
};
