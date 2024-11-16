import type { Status } from "../../common/status.ts";
import type { Whitelists } from "../../whitelists/whitelists.ts";

export type Etf2lWhitelists = {
  whitelists: Whitelists;
  status: Status;
};
