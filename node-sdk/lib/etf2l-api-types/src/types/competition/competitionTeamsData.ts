export type CompetitionTeamsData = {
  id: number;
  country: string;
  name: string;
  dropped: number;
  steam: {
    avatar: string;
    steam_group: string | null;
  };
  url: string;
};