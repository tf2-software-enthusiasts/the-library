export type SeasonByIdResponse = {
  name: string;
  divisionSorting: Record<string, number>;
  formatName: string;
  regionName: string;
  maps: string[];
  participatingTeams: number[];
  matchesPlayedDuringSeason: number[];
};
