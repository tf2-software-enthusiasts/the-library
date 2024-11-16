import type { CompetitionUrls } from "./competitionUrls.ts";

export type CompetitionElement = {
  category: string;
  description: string;
  id: number;
  name: string;
  archived: boolean;
  type: string;
  urls: CompetitionUrls;
};
