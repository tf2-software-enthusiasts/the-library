import { fetch, FetchResultTypes, isNullishOrEmpty } from "common";
import type { Etf2lBan, Etf2lCompetitionDetails, Etf2lCompetitionList, Etf2lCompetitionMatches, Etf2lCompetitionResults, Etf2lCompetitionTables, Etf2lCompetitionTeams, Etf2lDemos, Etf2lMatch, Etf2lMatchDetails, Etf2lPlayer, Etf2lPlayerResults, Etf2lPlayerTransfers, Etf2lRecruitmentPlayers, Etf2lRecruitmentTeams, Etf2lTeam, Etf2lTeamMatches, Etf2lTeamResults, Etf2lTeamTransfers, Etf2lWhitelists } from "etf2l-api-types";
import { URLSearchParams } from "node:url";

export class Etf2l {
  /**
   * URL of the API for etf2l.org
   */
  #etf2lApiUrl = "https://api-v2.etf2l.org";

  public constructor(apiUrl?: string) {
    if (apiUrl)
      this.#etf2lApiUrl = apiUrl;
  }

  public async bans({
    player = null,
    status = null,
    reason = null,
  }: { player: number | null, status: 'active' | 'expired' | null, reason: string | null } = { player: null, status: null, reason: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(player)) {
      params.append("player", player.toString());
    }

    if (!isNullishOrEmpty(status)) {
      params.append("status", status);
    }

    if (!isNullishOrEmpty(reason)) {
      params.append("reason", reason);
    }

    return await fetch<Etf2lBan>(
      `${this.#etf2lApiUrl}/bans${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionList({
    archived = null,
    name = null,
    description = null,
    category = null,
    comp_type = null,
    team_type = null,
    competition = null,
  }: { archived: number | null, name: string | null, description: string | null, category: string | null, comp_type: string | null, team_type: string | null, competition: string | null } = { archived: null, name: null, description: null, category: null, comp_type: null, team_type: null, competition: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(archived)) {
      params.append("archived", archived.toString());
    }

    if (!isNullishOrEmpty(name)) {
      params.append("name", name);
    }

    if (!isNullishOrEmpty(description)) {
      params.append("description", description);
    }

    if (!isNullishOrEmpty(category)) {
      params.append("category", category);
    }

    if (!isNullishOrEmpty(comp_type)) {
      params.append("comp_type", comp_type);
    }

    if (!isNullishOrEmpty(team_type)) {
      params.append("team_type", team_type);
    }

    if (!isNullishOrEmpty(competition)) {
      params.append("competition_id", competition);
    }

    return await fetch<Etf2lCompetitionList>(
      `${this.#etf2lApiUrl}/competition/list${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionDetails(
    competition_id: number) {
    return await fetch<Etf2lCompetitionDetails>(
      `${this.#etf2lApiUrl}/competition/${competition_id}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionTeams(
    competition_id: number) {


    return await fetch<Etf2lCompetitionTeams>(
      `${this.#etf2lApiUrl}/competition/${competition_id}/teams`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionResults(
    competition_id: number) {
    return await fetch<Etf2lCompetitionResults>(
      `${this.#etf2lApiUrl}/competition/${competition_id}/results`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionMatches(
    competition_id: number) {
    return await fetch<Etf2lCompetitionMatches>(
      `${this.#etf2lApiUrl}/competition/${competition_id}/matches`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async competitionTables(competition_id: number) {
    return await fetch<Etf2lCompetitionTables>(
      `${this.#etf2lApiUrl}/competition/${competition_id}/tables`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async demos({
    player = null,
    type = null,
    pruned = null,
    from = null,
    to = null }
    : { player: number | null, type: string | null, pruned: boolean | null, from: number | null, to: number | null } = { player: null, type: null, pruned: null, from: null, to: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(player)) {
      params.append("player", player.toString());
    }

    if (!isNullishOrEmpty(type)) {
      params.append("type", type);
    }

    if (!isNullishOrEmpty(pruned)) {
      params.append("pruned", pruned.toString());
    }

    if (!isNullishOrEmpty(from)) {
      params.append("from", from.toString());
    }

    if (!isNullishOrEmpty(to)) {
      params.append("to", to.toString());
    }

    return await fetch<Etf2lDemos>(
      `${this.#etf2lApiUrl}/demos${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
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
  }: { clan1: number | null, clan2: number | null, vs: number | null, scheduled: number | null, competition: number | null, from: number | null, to: number | null, division: string | null, team_type: string | null, round: string | null, players: string[] | null } = { clan1: null, clan2: null, vs: null, scheduled: null, competition: null, from: null, to: null, division: null, team_type: null, round: null, players: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(clan1)) {
      params.append("clan1", clan1.toString());
    }

    if (!isNullishOrEmpty(clan2)) {
      params.append("clan2", clan2.toString());
    }

    if (!isNullishOrEmpty(vs)) {
      params.append("vs", vs.toString());
    }

    if (!isNullishOrEmpty(scheduled)) {
      params.append("scheduled", scheduled.toString());
    }

    if (!isNullishOrEmpty(competition)) {
      params.append("competition", competition.toString());
    }

    if (!isNullishOrEmpty(from)) {
      params.append("from", from.toString());
    }

    if (!isNullishOrEmpty(to)) {
      params.append("to", to.toString());
    }

    if (!isNullishOrEmpty(division)) {
      params.append("division", division);
    }

    if (!isNullishOrEmpty(team_type)) {
      params.append("team_type", team_type);
    }

    if (!isNullishOrEmpty(round)) {
      params.append("round", round);
    }

    if (!isNullishOrEmpty(players)) {
      params.append("string[]", `[${players.toString()}]`);
    }

    return await fetch<Etf2lMatch>(
      `${this.#etf2lApiUrl}/matches${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async matchDetails(leagueMatch_id: number) {
    return await fetch<Etf2lMatchDetails>(
      `${this.#etf2lApiUrl}/matches/${leagueMatch_id}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async player(id: number) {
    return await fetch<Etf2lPlayer>(
      `${this.#etf2lApiUrl}/player/${id}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async playerTransfers(id: number) {
    return await fetch<Etf2lPlayerTransfers>(
      `${this.#etf2lApiUrl}/player/${id}/transfers`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async playerResults(id: number) {
    return await fetch<Etf2lPlayerResults>(
      `${this.#etf2lApiUrl}/player/${id}/results`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async playerRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null
  }: { country: string | null, player_class: string[] | null, skill: string[] | null, type: string | null, user: number | null } = { country: null, player_class: null, skill: null, type: null, user: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(country)) {
      params.append("country", country);
    }

    if (!isNullishOrEmpty(player_class)) {
      params.append("class",  `[${player_class.toString()}]`);
    }

    if (!isNullishOrEmpty(skill)) {
      params.append("skill", skill.toString());
    }

    if (!isNullishOrEmpty(type)) {
      params.append("type", type);
    }

    if (!isNullishOrEmpty(user)) {
      params.append("user", user.toString());
    }

    return await fetch<Etf2lRecruitmentPlayers>(
      `${this.#etf2lApiUrl}/recruitment/players?${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async teamRecruitment({
    country = null,
    player_class = null,
    skill = null,
    type = null,
    user = null
  }: { country: string | null, player_class: string[] | null, skill: string[] | null, type: string | null, user: number | null } = { country: null, player_class: null, skill: null, type: null, user: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(country)) {
      params.append("country", country);
    }

    if (!isNullishOrEmpty(player_class)) {
      params.append("class", player_class.toString());
    }

    if (!isNullishOrEmpty(skill)) {
      params.append("skill", skill.toString());
    }

    if (!isNullishOrEmpty(type)) {
      params.append("type", type);
    }

    if (!isNullishOrEmpty(user)) {
      params.append("user", user.toString());
    }

    return await fetch<Etf2lRecruitmentTeams>(
      `${this.#etf2lApiUrl}/recruitment/teams${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async team(clan_id: number) {
    return await fetch<Etf2lTeam>(
      `${this.#etf2lApiUrl}/team/${clan_id}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async teamTransfers(clan_id: number) {
    return await fetch<Etf2lTeamTransfers>(
      `${this.#etf2lApiUrl}/team/${clan_id}/transfers`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async teamResults(clan_id: number) {
    return await fetch<Etf2lTeamResults>(
      `${this.#etf2lApiUrl}/team/${clan_id}/results`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async teamMatches(
    clan_id: number, {
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
    }: { clan1: number | null, clan2: number | null, vs: number | null, scheduled: number | null, competition: number | null, from: number | null, to: number | null, division: string | null, team_type: string | null, round: string | null, players: string[] | null } = { clan1: null, clan2: null, vs: null, scheduled: null, competition: null, from: null, to: null, division: null, team_type: null, round: null, players: null }) {

    const params = new URLSearchParams();

    if (!isNullishOrEmpty(clan1)) {
      params.append("clan1", clan1.toString());
    }

    if (!isNullishOrEmpty(clan2)) {
      params.append("clan2", clan2.toString());
    }

    if (!isNullishOrEmpty(vs)) {
      params.append("vs", vs.toString());
    }

    if (!isNullishOrEmpty(scheduled)) {
      params.append("scheduled", scheduled.toString());
    }

    if (!isNullishOrEmpty(competition)) {
      params.append("competition", competition.toString());
    }

    if (!isNullishOrEmpty(from)) {
      params.append("from", from.toString());
    }

    if (!isNullishOrEmpty(to)) {
      params.append("to", to.toString());
    }

    if (!isNullishOrEmpty(division)) {
      params.append("division", division);
    }

    if (!isNullishOrEmpty(team_type)) {
      params.append("team_type", team_type);
    }

    if (!isNullishOrEmpty(round)) {
      params.append("round", round);
    }

    if (!isNullishOrEmpty(players)) {
      params.append("string[]", `[${players.toString()}]`);
    }

    return await fetch<Etf2lTeamMatches>(
      `${this.#etf2lApiUrl}/team/${clan_id}/matches${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async whitelists() {
    return await fetch<Etf2lWhitelists>(
      `${this.#etf2lApiUrl}/whitelists`,
      {},
      FetchResultTypes.JSON
    );
  }
}
