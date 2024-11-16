export type CompetitionTable = {
  id: number;
  drop: boolean;
  division_id: number;
  division_name: string;
  country: string;
  name: string;
  maps_played: number;
  maps_won: number;
  gc_won: number;
  gc_lost: number;
  maps_lost: number;
  penalty_points: number;
  score: number;
  ach: number | null;
  byes: number;
  seeded_points: number;
};
