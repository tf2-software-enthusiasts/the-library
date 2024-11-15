import type {
  Etf2lBan,
  Etf2lCompetitionDetails,
  Etf2lCompetitionList,
  Etf2lCompetitionMatches,
  Etf2lCompetitionResults,
  Etf2lCompetitionTables,
  Etf2lCompetitionTeams,
  Etf2lDemos,
  Etf2lMatch,
  Etf2lMatchDetails,
  Etf2lPlayer,
  Etf2lPlayerResults,
  Etf2lPlayerTransfers,
  Etf2lRecruitmentPlayers,
  Etf2lRecruitmentTeams,
  Etf2lTeam,
  Etf2lTeamMatches,
  Etf2lTeamResults,
  Etf2lTeamTransfers,
  Etf2lWhitelists,
} from "../types/mod.ts";

export class Etf2l {
  /**
   * URL of the API for etf2l.org
   */
  #etf2lApiUrl = "https://api-v2.etf2l.org";

  public constructor(apiUrl?: string) {
    if (apiUrl) {
      this.#etf2lApiUrl = apiUrl;
    }
  }

  public async bans({
    player = null,
    status = null,
    reason = null,
  }: {
    player: number | null;
    status: "active" | "expired" | null;
    reason: string | null;
  } = { player: null, status: null, reason: null }): Promise<Etf2lBan> {
    const params = new URLSearchParams();

    if (player) {
      params.append("player", player.toString());
    }

    if (status) {
      params.append("status", status);
    }

    if (reason) {
      params.append("reason", reason);
    }

    const data = await fetch(`${this.#etf2lApiUrl}/bans${params.toString()}`);

    return (await data.json()) as Etf2lBan;
  }

  public async competitionList({
    archived = null,
    name = null,
    description = null,
    category = null,
    comp_type = null,
    team_type = null,
    competition = null,
  }: {
    archived: number | null;
    name: string | null;
    description: string | null;
    category: string | null;
    comp_type: string | null;
    team_type: string | null;
    competition: string | null;
  } = {
    archived: null,
    name: null,
    description: null,
    category: null,
    comp_type: null,
    team_type: null,
    competition: null,
  }): Promise<Etf2lCompetitionList> {
    const params = new URLSearchParams();

    if (archived) {
      params.append("archived", archived.toString());
    }

    if (name) {
      params.append("name", name);
    }

    if (description) {
      params.append("description", description);
    }

    if (category) {
      params.append("category", category);
    }

    if (comp_type) {
      params.append("comp_type", comp_type);
    }

    if (team_type) {
      params.append("team_type", team_type);
    }

    if (competition) {
      params.append("competition_id", competition);
    }

    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/list${params.toString()}`,
    );

    return (await data.json()) as Etf2lCompetitionList;
  }

  public async competitionDetails(
    competition_id: number,
  ): Promise<Etf2lCompetitionDetails> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}`,
    );

    return (await data.json()) as Etf2lCompetitionDetails;
  }

  public async competitionTeams(
    competition_id: number,
  ): Promise<Etf2lCompetitionTeams> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/teams`,
    );

    return (await data.json()) as Etf2lCompetitionTeams;
  }

  public async competitionResults(
    competition_id: number,
  ): Promise<Etf2lCompetitionResults> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/results`,
    );

    return (await data.json()) as Etf2lCompetitionResults;
  }

  public async competitionMatches(
    competition_id: number,
  ): Promise<Etf2lCompetitionMatches> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/matches`,
    );

    return (await data.json()) as Etf2lCompetitionMatches;
  }

  public async competitionTables(
    competition_id: number,
  ): Promise<Etf2lCompetitionTables> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/tables`,
    );

    return (await data.json()) as Etf2lCompetitionTables;
  }

  public async demos({
    player = null,
    type = null,
    pruned = null,
    from = null,
    to = null,
  }: {
    player: number | null;
    type: string | null;
    pruned: boolean | null;
    from: number | null;
    to: number | null;
  } = {
    player: null,
    type: null,
    pruned: null,
    from: null,
    to: null,
  }): Promise<Etf2lDemos> {
    const params = new URLSearchParams();

    if (player) {
      params.append("player", player.toString());
    }

    if (type) {
      params.append("type", type);
    }

    if (pruned) {
      params.append("pruned", pruned.toString());
    }

    if (from) {
      params.append("from", from.toString());
    }

    if (to) {
      params.append("to", to.toString());
    }

    const data = await fetch(`${this.#etf2lApiUrl}/demos${params.toString()}`);

    return (await data.json()) as Etf2lDemos;
  }

  public async matches({
    clan1 = null,
    clan2 = null,
    vs = null,
    scheduled = null,
    competition = null,
    from = null,
    to = null,
    division = null,
    team_type = null,
    round = null,
    players = null,
  }: {
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
  } = {
    clan1: null,
    clan2: null,
    vs: null,
    scheduled: null,
    competition: null,
    from: null,
    to: null,
    division: null,
    team_type: null,
    round: null,
    players: null,
  }): Promise<Etf2lMatch> {
    const params = new URLSearchParams();

    if (clan1) {
      params.append("clan1", clan1.toString());
    }

    if (clan2) {
      params.append("clan2", clan2.toString());
    }

    if (vs) {
      params.append("vs", vs.toString());
    }

    if (scheduled) {
      params.append("scheduled", scheduled.toString());
    }

    if (competition) {
      params.append("competition", competition.toString());
    }

    if (from) {
      params.append("from", from.toString());
    }

    if (to) {
      params.append("to", to.toString());
    }

    if (division) {
      params.append("division", division);
    }

    if (team_type) {
      params.append("team_type", team_type);
    }

    if (round) {
      params.append("round", round);
    }

    if (players) {
      params.append("string[]", `[${players.toString()}]`);
    }

    const data = await fetch(
      `${this.#etf2lApiUrl}/matches${params.toString()}`,
    );

    return (await data.json()) as Etf2lMatch;
  }

  public async matchDetails(
    leagueMatch_id: number,
  ): Promise<Etf2lMatchDetails> {
    const data = await fetch(`${this.#etf2lApiUrl}/matches/${leagueMatch_id}`);

    return (await data.json()) as Etf2lMatchDetails;
  }

  public async player(id: number): Promise<Etf2lPlayer> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}`);

    return (await data.json()) as Etf2lPlayer;
  }

  public async playerTransfers(id: number): Promise<Etf2lPlayerTransfers> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}/transfers`);

    return (await data.json()) as Etf2lPlayerTransfers;
  }

  public async playerResults(id: number): Promise<Etf2lPlayerResults> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}/results`);

    return (await data.json()) as Etf2lPlayerResults;
  }

  public async playerRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null,
  }: {
    country: string | null;
    player_class: string[] | null;
    skill: string[] | null;
    type: string | null;
    user: number | null;
  } = {
    country: null,
    player_class: null,
    skill: null,
    type: null,
    user: null,
  }): Promise<Etf2lRecruitmentPlayers> {
    const params = new URLSearchParams();

    if (country) {
      params.append("country", country);
    }

    if (player_class && player_class.length > 0) {
      for (const p_class of player_class) {
        params.append("class", p_class);
      }
    }

    if (skill) {
      params.append("skill", skill.toString());
    }

    if (type) {
      params.append("type", type);
    }

    if (user) {
      params.append("user", user.toString());
    }

    const data = await fetch(
      `${this.#etf2lApiUrl}/recruitment/players?${params.toString()}`,
    );

    return (await data.json()) as Etf2lRecruitmentPlayers;
  }

  public async teamRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null,
  }: {
    country: string | null;
    player_class: string[] | null;
    skill: string[] | null;
    type: string | null;
    user: number | null;
  } = {
    country: null,
    player_class: null,
    skill: null,
    type: null,
    user: null,
  }): Promise<Etf2lRecruitmentTeams> {
    const params = new URLSearchParams();

    if (country) {
      params.append("country", country);
    }

    if (player_class) {
      params.append("class", player_class.toString());
    }

    if (skill) {
      params.append("skill", skill.toString());
    }

    if (type) {
      params.append("type", type);
    }

    if (user) {
      params.append("user", user.toString());
    }

    const data = await fetch(
      `${this.#etf2lApiUrl}/recruitment/teams${params.toString()}`,
    );

    return (await data.json()) as Etf2lRecruitmentTeams;
  }

  public async team(clan_id: number): Promise<Etf2lTeam> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}`);

    return (await data.json()) as Etf2lTeam;
  }

  public async teamTransfers(clan_id: number): Promise<Etf2lTeamTransfers> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}/transfers`);

    return (await data.json()) as Etf2lTeamTransfers;
  }

  public async teamResults(clan_id: number): Promise<Etf2lTeamResults> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}/results`);

    return (await data.json()) as Etf2lTeamResults;
  }

  public async teamMatches(
    clan_id: number,
    {
      clan1 = null,
      clan2 = null,
      vs = null,
      scheduled = null,
      competition = null,
      from = null,
      to = null,
      division = null,
      team_type = null,
      round = null,
      players = null,
    }: {
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
    } = {
      clan1: null,
      clan2: null,
      vs: null,
      scheduled: null,
      competition: null,
      from: null,
      to: null,
      division: null,
      team_type: null,
      round: null,
      players: null,
    },
  ): Promise<Etf2lTeamMatches> {
    const params = new URLSearchParams();

    if (clan1) {
      params.append("clan1", clan1.toString());
    }

    if (clan2) {
      params.append("clan2", clan2.toString());
    }

    if (vs) {
      params.append("vs", vs.toString());
    }

    if (scheduled) {
      params.append("scheduled", scheduled.toString());
    }

    if (competition) {
      params.append("competition", competition.toString());
    }

    if (from) {
      params.append("from", from.toString());
    }

    if (to) {
      params.append("to", to.toString());
    }

    if (division) {
      params.append("division", division);
    }

    if (team_type) {
      params.append("team_type", team_type);
    }

    if (round) {
      params.append("round", round);
    }

    if (players) {
      params.append("string[]", `[${players.toString()}]`);
    }

    const data = await fetch(
      `${this.#etf2lApiUrl}/team/${clan_id}/matches${params.toString()}`,
    );

    return (await data.json()) as Etf2lTeamMatches;
  }

  public async whitelists(): Promise<Etf2lWhitelists> {
    const data = await fetch(`${this.#etf2lApiUrl}/whitelists`);

    return (await data.json()) as Etf2lWhitelists;
  }
}
