import type { MultiPage } from "types/common/multiPage";
import type { DemosData } from "./demosData";

export type Demos = MultiPage & {
  demos: DemosData[];
};