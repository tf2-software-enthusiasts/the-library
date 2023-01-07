import type { Status } from "types/common/status";
import type { Whitelist } from "types/whitelists/whitelists";

export type Etf2lWhitelist = {
  whitelists: Whitelist;
  status: Status;
};