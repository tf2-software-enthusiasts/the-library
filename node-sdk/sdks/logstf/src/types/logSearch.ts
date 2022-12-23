import type { LogSearchConfig } from "./logSearchConfig";

export type LogSearchResponse = {
  success: boolean;
  results: number;
  total: number;
  parameters: LogSearchConfig;
  logs: [
    {
      id: number;
      title: string;
      map: string;
      date: number;
      views: number;
      players: number;
    }
  ];
};
