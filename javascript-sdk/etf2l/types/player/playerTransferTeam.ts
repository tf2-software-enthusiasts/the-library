export type PlayerTransferTeam = {
  id: number;
  name: string;
  steam: {
    avatar: string;
    group: string | null;
  };
  //TODO: Create enum
  type: string;
  url: string;
};
