import { beforeAll, describe, it } from "jsr:@std/testing/bdd";
import { expect } from "jsr:@std/expect";
import { Etf2l } from "./../api/mod.ts";
import {
  isEtf2lBan,
  isEtf2lCompetitionDetails,
  isEtf2lCompetitionList,
  isEtf2lCompetitionResults,
  isEtf2lCompetitionTables,
  isEtf2lCompetitionTeams,
  isEtf2lDemos,
  isEtf2lMatch,
  isEtf2lMatchDetails,
  isEtf2lPlayer,
  isEtf2lPlayerResults,
  isEtf2lPlayerTransfers,
  isEtf2lRecruitmentPlayers,
  isEtf2lRecruitmentTeams,
  isEtf2lTeam,
  isEtf2lTeamMatches,
  isEtf2lTeamResults,
  isEtf2lTeamTransfers,
  isEtf2lWhitelists,
} from "./etf2lTypeGuards.guard.ts";

describe("etf2l", () => {
  let etf2l: Etf2l;
  let playerId: number;
  let matchId: number;
  let competitionId: number;
  let teamId: number;

  beforeAll(() => {
    etf2l = new Etf2l();
    playerId = 123;
    matchId = 123;
    competitionId = 10;
    teamId = 123;
  });

  describe("returns correct types", () => {
    it("ban types", async () => {
      const bans = await etf2l.bans();
      expect(isEtf2lBan(bans)).toBe(true);
    });
    it("competitionList types", async () => {
      const competitions = await etf2l.competitionList();
      expect(isEtf2lCompetitionList(competitions)).toBe(true);
    });
    it("competitionDetails types", async () => {
      const competition = await etf2l.competitionDetails(competitionId);
      expect(isEtf2lCompetitionDetails(competition)).toBe(true);
    });
    it("competitionResults types", async () => {
      const competition = await etf2l.competitionResults(competitionId);
      expect(isEtf2lCompetitionResults(competition)).toBe(true);
    });
    it("competitionTeams types", async () => {
      const competition = await etf2l.competitionTeams(competitionId);
      expect(isEtf2lCompetitionTeams(competition)).toBe(true);
    });
    it("competitionTables types", async () => {
      const competition = await etf2l.competitionTables(competitionId);
      expect(isEtf2lCompetitionTables(competition)).toBe(true);
    });
    it("demos types", async () => {
      const demos = await etf2l.demos();
      expect(isEtf2lDemos(demos)).toBe(true);
    });
    it("matches types", async () => {
      const matches = await etf2l.matches();
      expect(isEtf2lMatch(matches)).toBe(true);
    });
    it("matchDetails types", async () => {
      const match = await etf2l.matchDetails(matchId);
      expect(isEtf2lMatchDetails(match)).toBe(true);
    });
    it("player types", async () => {
      const player = await etf2l.player(playerId);
      expect(isEtf2lPlayer(player)).toBe(true);
    });
    it("playerTransfers types", async () => {
      const transfers = await etf2l.playerTransfers(playerId);
      expect(isEtf2lPlayerTransfers(transfers)).toBe(true);
    });
    it("playerResults types", async () => {
      const results = await etf2l.playerResults(playerId);
      expect(isEtf2lPlayerResults(results)).toBe(true);
    });
    it("playerRecruitment types", async () => {
      const recruitment = await etf2l.playerRecruitment({
        country: null,
        player_class: ["soldier"],
        skill: null,
        type: null,
        user: null,
      });
      expect(isEtf2lRecruitmentPlayers(recruitment)).toBe(true);
    });
    it("teamRecruitment types", async () => {
      const recruitment = await etf2l.teamRecruitment();
      expect(isEtf2lRecruitmentTeams(recruitment)).toBe(true);
    });
    it("team types", async () => {
      const team = await etf2l.team(teamId);
      expect(isEtf2lTeam(team)).toBe(true);
    });
    it("teamTransfers types", async () => {
      const transfers = await etf2l.teamTransfers(teamId);
      expect(isEtf2lTeamTransfers(transfers)).toBe(true);
    });
    it("teamResults types", async () => {
      const results = await etf2l.teamResults(teamId);
      expect(isEtf2lTeamResults(results)).toBe(true);
    });
    it("teamMatches types", async () => {
      const matches = await etf2l.teamMatches(teamId);
      expect(isEtf2lTeamMatches(matches)).toBe(true);
    });
    it("whitelists types", async () => {
      const whitelists = await etf2l.whitelists();
      expect(isEtf2lWhitelists(whitelists)).toBe(true);
    });
  });
});
