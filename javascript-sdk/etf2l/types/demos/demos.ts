import type { MultiPage } from "../common/multiPage.ts";
import type { DemosData } from "./demosData.ts";

export type Demos = MultiPage & {
  data: DemosData[];
};