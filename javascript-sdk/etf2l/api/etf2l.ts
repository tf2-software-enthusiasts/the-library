import type {
  BanQuery,
  CompetitionListQuery,
  DemosQuery,
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
  MatchesQuery,
  PlayerRecruitmentQuery,
  TeamRecruitmentQuery,
} from "../types/mod.ts";

export class Etf2l {
  /**
   * URL of the API for etf2l.org
   */
  #etf2lApiUrl = "https://api-v2.etf2l.org";

  /**
   * Creates an instance of the ETF2L API
   * @param apiUrl The URL of the api endpoint
   */
  public constructor(apiUrl?: string) {
    if (apiUrl) {
      this.#etf2lApiUrl = apiUrl;
    }
  }

  /**
   * Returns a paginated list of all bans that were performed on ETF2L.
   * @param {BanQuery} BanQuery
   * @returns {Promise<Etf2lBan>}
   */
  public async bans({
    player = null,
    status = null,
    reason = null,
  }: BanQuery = { player: null, status: null, reason: null }): Promise<
    Etf2lBan
  > {
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

  /**
   * Gets a list of all competitions.
   * @param {CompetitionListQuery} CompetitionListQuery
   * @returns {Promise<Etf2lCompetitionList>}
   */
  public async competitionList({
    archived = null,
    name = null,
    description = null,
    category = null,
    comp_type = null,
    team_type = null,
    competition = null,
  }: CompetitionListQuery = {
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

  /**
   * Provides some extra details on the competition. Extra information includes the map pool & total signups.
   * @param {number} competition_id
   * @returns {Promise<Etf2lCompetitionDetails>}
   */
  public async competitionDetails(
    competition_id: number,
  ): Promise<Etf2lCompetitionDetails> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}`,
    );

    return (await data.json()) as Etf2lCompetitionDetails;
  }

  /**
   * Returns a paginated list of teams that participated in the competition. Dropped teams are marked with the 'drop' parameter.
   * @param {number} competition_id
   * @returns {Promise<Etf2lCompetitionTeams>}
   */
  public async competitionTeams(
    competition_id: number,
  ): Promise<Etf2lCompetitionTeams> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/teams`,
    );

    return (await data.json()) as Etf2lCompetitionTeams;
  }

  /**
   * Gets a paginated list of all match results for this competition, ordered from most to least recent.
   * @param {number} competition_id
   * @returns {Promise<Etf2lCompetitionResults>}
   */
  public async competitionResults(
    competition_id: number,
  ): Promise<Etf2lCompetitionResults> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/results`,
    );

    return (await data.json()) as Etf2lCompetitionResults;
  }

  /**
   * Gets a paginated list of all matches for this competition, ordered from most to least recent. The main difference with the competition results API is that matches do not have to be played yet in order to appear in this list.
   * @param {number} competition_id
   * @returns {Promise<Etf2lCompetitionMatches>}
   */
  public async competitionMatches(
    competition_id: number,
  ): Promise<Etf2lCompetitionMatches> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/matches`,
    );

    return (await data.json()) as Etf2lCompetitionMatches;
  }

  /**
   * This endpoint returns the same data that is used to show the tables if you navigate to 'Competitions' -> {the competition} Tables.
   * Drop marks if a team was dropped from the competition. gc_ stands for Golden Cap and covers both Golden Cap wins and losses. penalty_points are assigned when a team has contracted a certain amount of warnings (see ETF2L General Rules for more information) ach (short for achievement) indicates the placement of the teams at the end of a season. The tables are grouped by division names respectively. The order in which they are sorted indicates their placements. Dropped teams will always be at the bottom, while teams that finished top 3 will always be first even if they had overall less score in the main season.
   * Note that one season might have multiple competitions internally. This is usually the case for regular tiers vs top tiers.
   * @param {number} competition_id
   * @returns {Promise<Etf2lCompetitionTables>}
   */
  public async competitionTables(
    competition_id: number,
  ): Promise<Etf2lCompetitionTables> {
    const data = await fetch(
      `${this.#etf2lApiUrl}/competition/${competition_id}/tables`,
    );

    return (await data.json()) as Etf2lCompetitionTables;
  }

  /**
   * Returns a paginated list of all demos that were uploaded on ETF2L.
   * @param {DemosQuery} DemosQuery
   * @returns {Promise<Etf2lDemos>}
   */
  public async demos({
    player = null,
    type = null,
    pruned = null,
    from = null,
    to = null,
  }: DemosQuery = {
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

  /**
   * Returns a paginated list of all matches, sorted from most to least recent.
   * @param {MatchesQuery} MatchesQuery
   * @returns {Promise<Etf2lMatch>}
   */

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
  }: MatchesQuery = {
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

  /**
   * Returns additional details about a match like the players who participated in it.
   * @param {number} leagueMatch_id
   * @returns {Promise<Etf2lMatchDetails>}
   */
  public async matchDetails(
    leagueMatch_id: number,
  ): Promise<Etf2lMatchDetails> {
    const data = await fetch(`${this.#etf2lApiUrl}/matches/${leagueMatch_id}`);

    return (await data.json()) as Etf2lMatchDetails;
  }

  /**
   * Gets the ETF2L user information. Valid arguments: ETF2L Player ID, SteamID2, SteamID3, SteamID64.
   * @param {number} id
   * @returns {Promise<Etf2lPlayer>}
   */
  public async player(id: number): Promise<Etf2lPlayer> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}`);

    return (await data.json()) as Etf2lPlayer;
  }

  /**
   * Gets the team transfers of a player. Valid parameters: ETF2L Player ID, SteamID2, SteamID3, SteamID64.
   * @param {number} id
   * @returns {Promise<Etf2lPlayerTransfers>}
   */
  public async playerTransfers(id: number): Promise<Etf2lPlayerTransfers> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}/transfers`);

    return (await data.json()) as Etf2lPlayerTransfers;
  }

  /**
   * Gets the player's results. Sorted from most recent to least recent. Uses pagination. Provide a page query parameter to iterate through the results. Valid parameters: ETF2L Player ID, SteamID2, SteamID3, SteamID64.
   * @param {number} id
   * @returns {Promise<Etf2lPlayerResults>}
   */
  public async playerResults(id: number): Promise<Etf2lPlayerResults> {
    const data = await fetch(`${this.#etf2lApiUrl}/player/${id}/results`);

    return (await data.json()) as Etf2lPlayerResults;
  }

  /**
   * Gets a paginated list of recruitment posts for players.
   * @param {PlayerRecruitmentQuery} PlayerRecruitmentQuery
   * @returns {Promise<Etf2lRecruitmentPlayers>}
   */
  public async playerRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null,
  }: PlayerRecruitmentQuery = {
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

    if (skill && skill.length > 0) {
      for (const entry of skill) {
        params.append("skill", entry);
      }
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

  /**
   * Gets a paginated list of recruitment posts for teams.
   * @param {TeamRecruitmentQuery} TeamRecruitmentQuery
   * @returns {Promise<Etf2lRecruitmentTeams>}
   */
  public async teamRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null,
  }: TeamRecruitmentQuery = {
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

    if (player_class && player_class.length > 0) {
      for (const p_class of player_class) {
        params.append("class", p_class);
      }
    }

    if (skill && skill.length > 0) {
      for (const entry of skill) {
        params.append("skill", entry);
      }
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

  /**
   * Shows information about an ETF2L team. Information includes competitions, current active players and details.
   * @param {number} clan_id
   * @returns {Promise<Etf2lTeam>}
   */
  public async team(clan_id: number): Promise<Etf2lTeam> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}`);

    return (await data.json()) as Etf2lTeam;
  }

  /**
   * Gets the transfers of a team.
   * @param {number} clan_id
   * @returns {Promise<Etf2lTeamTransfers>}
   */
  public async teamTransfers(clan_id: number): Promise<Etf2lTeamTransfers> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}/transfers`);

    return (await data.json()) as Etf2lTeamTransfers;
  }

  /**
   * Gets the team's results.
   * @param {number} clan_id
   * @returns {Promise<Etf2lTeamResults>}
   */
  public async teamResults(clan_id: number): Promise<Etf2lTeamResults> {
    const data = await fetch(`${this.#etf2lApiUrl}/team/${clan_id}/results`);

    return (await data.json()) as Etf2lTeamResults;
  }

  /**
   * Returns a list of matches the team has played in, from most to least recent. Requires a ETF2L team ID.
   * @param {number} clan_id
   * @param {MatchesQuery} MatchesQuery
   * @returns {Promise<Etf2lTeamMatches>}
   */
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
    }: MatchesQuery = {
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

  /**
   * Returns a list of all whitelists currently maintained by ETF2L.
   * @returns {Promise<Etf2lWhitelists>}
   */
  public async whitelists(): Promise<Etf2lWhitelists> {
    const data = await fetch(`${this.#etf2lApiUrl}/whitelists`);

    return (await data.json()) as Etf2lWhitelists;
  }
}
