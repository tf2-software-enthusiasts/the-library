export type ClassStats = {
  type: string;
  kills: number;
  assists: number;
  deaths: number;
  dmg: number;
  weapon: {
    [weaponName: string]: {
      kills: number;
      dmg: number;
      avg_dmg: number;
      shots: number;
      hits: number;
    };
  };
  total_time: number;
};
