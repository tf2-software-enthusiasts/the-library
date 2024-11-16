export type BanQuery = {
    player: number | null;
    status: "active" | "expired" | null;
    reason: string | null;
};

export type CompetitionListQuery = {
    archived: number | null;
    name: string | null;
    description: string | null;
    category: string | null;
    comp_type: string | null;
    team_type: string | null;
    competition: string | null;
};

export type DemosQuery = {
    player: number | null;
    type: string | null;
    pruned: boolean | null;
    from: number | null;
    to: number | null;
};

export type MatchesQuery = {
    clan1: number | null;
    clan2: number | null;
    vs: number | null;
    scheduled: number | null;
    competition: number | null;
    from: number | null;
    to: number | null;
    division: string | null;
    team_type: string | null;
    round: string | null;
    players: string[] | null;
};

export type PlayerRecruitmentQuery = {
    country: string | null;
    player_class: string[] | null;
    skill: string[] | null;
    type: string | null;
    user: number | null;
};

export type TeamRecruitmentQuery = {
    country: string | null;
    player_class: string[] | null;
    skill: string[] | null;
    type: string | null;
    user: number | null;
};

export type TeamMatchesQuery = {
    clan1: number | null;
    clan2: number | null;
    vs: number | null;
    scheduled: number | null;
    competition: number | null;
    from: number | null;
    to: number | null;
    division: string | null;
    team_type: string | null;
    round: string | null;
    players: string[] | null;
};
