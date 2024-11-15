export type PlayerTransferTeam = {
  id: number;
  name: string;
  steam: {
    avatar: string;
    group: string | null;
  };
  type: string;
  url: string;
};
