import type { LogSearchRequest } from "./logSearchRequest.ts";

export type LogSearchResponse = {
  success: boolean;
  results: number;
  total: number;
  parameters: LogSearchRequest;
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
