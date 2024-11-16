/*
 * Generated type guards for "etf2lTypeGuards.ts".
 * WARNING: Do not manually change this file.
 */
 // deno-lint-ignore-file
import { Etf2lBanG, Etf2lCompetitionDetailsG, Etf2lCompetitionListG, Etf2lCompetitionMatchesG, Etf2lCompetitionResultsG, Etf2lCompetitionTeamsG, Etf2lCompetitionTablesG, Etf2lDemosG, Etf2lMatchG, Etf2lMatchDetailsG, Etf2lPlayerG, Etf2lPlayerResultsG, Etf2lPlayerTransfersG, Etf2lRecruitmentPlayersG, Etf2lRecruitmentTeamsG, Etf2lTeamG, Etf2lTeamMatchesG, Etf2lTeamResultsG, Etf2lTeamTransfersG, Etf2lWhitelistsG } from "./etf2lTypeGuards.ts";
import { Classes } from "../types/enums/classes.ts";

function evaluate(
    isCorrect: boolean,
    varName: string,
    expected: string,
    actual: any
): boolean {
    if (!isCorrect) {
        console.error(
            `${varName} type mismatch, expected: ${expected}, found:`,
            actual
        )
    }
    return isCorrect
}

export function isEtf2lBan(obj: unknown, argumentName: string = "etf2lBanG"): obj is Etf2lBanG {
    const typedObj = obj as Etf2lBanG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["bans"] !== null &&
            typeof typedObj["bans"] === "object" ||
            typeof typedObj["bans"] === "function") &&
            evaluate(typeof typedObj["bans"]["current_page"] === "number", `${argumentName}["bans"]["current_page"]`, "number", typedObj["bans"]["current_page"]) &&
            evaluate((typedObj["bans"]["from"] === null ||
                typeof typedObj["bans"]["from"] === "number"), `${argumentName}["bans"]["from"]`, "number | null", typedObj["bans"]["from"]) &&
            evaluate(typeof typedObj["bans"]["last_page"] === "number", `${argumentName}["bans"]["last_page"]`, "number", typedObj["bans"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["bans"]["links"]) &&
                typedObj["bans"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["bans"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["bans"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["bans"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["bans"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["bans"]["links"]) &&
            evaluate(typeof typedObj["bans"]["path"] === "string", `${argumentName}["bans"]["path"]`, "string", typedObj["bans"]["path"]) &&
            evaluate(typeof typedObj["bans"]["per_page"] === "number", `${argumentName}["bans"]["per_page"]`, "number", typedObj["bans"]["per_page"]) &&
            evaluate((typedObj["bans"]["to"] === null ||
                typeof typedObj["bans"]["to"] === "number"), `${argumentName}["bans"]["to"]`, "number | null", typedObj["bans"]["to"]) &&
            evaluate(typeof typedObj["bans"]["total"] === "number", `${argumentName}["bans"]["total"]`, "number", typedObj["bans"]["total"]) &&
            (typedObj["bans"] !== null &&
                typeof typedObj["bans"] === "object" ||
                typeof typedObj["bans"] === "function") &&
            evaluate(typeof typedObj["bans"]["current_page"] === "number", `${argumentName}["bans"]["current_page"]`, "number", typedObj["bans"]["current_page"]) &&
            evaluate(typeof typedObj["bans"]["first_page_url"] === "string", `${argumentName}["bans"]["first_page_url"]`, "string", typedObj["bans"]["first_page_url"]) &&
            evaluate((typedObj["bans"]["from"] === null ||
                typeof typedObj["bans"]["from"] === "number"), `${argumentName}["bans"]["from"]`, "number | null", typedObj["bans"]["from"]) &&
            evaluate(typeof typedObj["bans"]["last_page"] === "number", `${argumentName}["bans"]["last_page"]`, "number", typedObj["bans"]["last_page"]) &&
            evaluate(typeof typedObj["bans"]["last_page_url"] === "string", `${argumentName}["bans"]["last_page_url"]`, "string", typedObj["bans"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["bans"]["links"]) &&
                typedObj["bans"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["bans"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["bans"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["bans"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["bans"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["bans"]["links"]) &&
            evaluate((typedObj["bans"]["next_page_url"] === null ||
                typeof typedObj["bans"]["next_page_url"] === "string"), `${argumentName}["bans"]["next_page_url"]`, "string | null", typedObj["bans"]["next_page_url"]) &&
            evaluate(typeof typedObj["bans"]["path"] === "string", `${argumentName}["bans"]["path"]`, "string", typedObj["bans"]["path"]) &&
            evaluate(typeof typedObj["bans"]["per_page"] === "number", `${argumentName}["bans"]["per_page"]`, "number", typedObj["bans"]["per_page"]) &&
            evaluate((typedObj["bans"]["prev_page_url"] === null ||
                typeof typedObj["bans"]["prev_page_url"] === "string"), `${argumentName}["bans"]["prev_page_url"]`, "string | null", typedObj["bans"]["prev_page_url"]) &&
            evaluate((typedObj["bans"]["to"] === null ||
                typeof typedObj["bans"]["to"] === "number"), `${argumentName}["bans"]["to"]`, "number | null", typedObj["bans"]["to"]) &&
            evaluate(typeof typedObj["bans"]["total"] === "number", `${argumentName}["bans"]["total"]`, "number", typedObj["bans"]["total"]) &&
            (typedObj["bans"] !== null &&
                typeof typedObj["bans"] === "object" ||
                typeof typedObj["bans"] === "function") &&
            evaluate(Array.isArray(typedObj["bans"]["data"]) &&
                typedObj["bans"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["start"] === "number", `${argumentName}["bans"]["data"][${i0}]["start"]`, "number", e["start"]) &&
                    evaluate(typeof e["end"] === "number", `${argumentName}["bans"]["data"][${i0}]["end"]`, "number", e["end"]) &&
                    evaluate(typeof e["reason"] === "string", `${argumentName}["bans"]["data"][${i0}]["reason"]`, "string", e["reason"]) &&
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["bans"]["data"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["steamid"] === "string", `${argumentName}["bans"]["data"][${i0}]["steamid"]`, "string", e["steamid"]) &&
                    evaluate(typeof e["steamid64"] === "string", `${argumentName}["bans"]["data"][${i0}]["steamid64"]`, "string", e["steamid64"]) &&
                    evaluate(typeof e["profile"] === "string", `${argumentName}["bans"]["data"][${i0}]["profile"]`, "string", e["profile"]) &&
                    evaluate(typeof e["expired"] === "boolean", `${argumentName}["bans"]["data"][${i0}]["expired"]`, "boolean", e["expired"])
                ), `${argumentName}["bans"]["data"]`, "import(\"./types/common/ban\").Ban[]", typedObj["bans"]["data"]), `${argumentName}["bans"]`, "import(\"./types/common/multiPageSmall\").MultiPageSmall & { current_page: number; first_page_url: string; from: number | null; last_page: number; last_page_url: string; links: import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/common/link\").Link[]; next_page_url: string | null; path: string; per_page: number; prev_page_url: string | null; to: number | null; total: number; } & { data: import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/common/ban\").Ban[]; }", typedObj["bans"])
    )
}

export function isEtf2lCompetitionDetails(obj: unknown, argumentName: string = "etf2lCompetitionDetailsG"): obj is Etf2lCompetitionDetailsG {
    const typedObj = obj as Etf2lCompetitionDetailsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["competition"] !== null &&
            typeof typedObj["competition"] === "object" ||
            typeof typedObj["competition"] === "function") &&
            evaluate(typeof typedObj["competition"]["category"] === "string", `${argumentName}["competition"]["category"]`, "string", typedObj["competition"]["category"]) &&
            evaluate(typeof typedObj["competition"]["description"] === "string", `${argumentName}["competition"]["description"]`, "string", typedObj["competition"]["description"]) &&
            evaluate(typeof typedObj["competition"]["id"] === "number", `${argumentName}["competition"]["id"]`, "number", typedObj["competition"]["id"]) &&
            evaluate(typeof typedObj["competition"]["name"] === "string", `${argumentName}["competition"]["name"]`, "string", typedObj["competition"]["name"]) &&
            evaluate(Array.isArray(typedObj["competition"]["pool"]) &&
                typedObj["competition"]["pool"].every((e: any) =>
                    typeof e === "string"
                ), `${argumentName}["competition"]["pool"]`, "string[]", typedObj["competition"]["pool"]) &&
            evaluate(typeof typedObj["competition"]["archived"] === "boolean", `${argumentName}["competition"]["archived"]`, "boolean", typedObj["competition"]["archived"]) &&
            evaluate(typeof typedObj["competition"]["type"] === "string", `${argumentName}["competition"]["type"]`, "string", typedObj["competition"]["type"]) &&
            evaluate((typedObj["competition"]["teams"] !== null &&
                typeof typedObj["competition"]["teams"] === "object" ||
                typeof typedObj["competition"]["teams"] === "function") &&
                evaluate(typeof typedObj["competition"]["teams"]["max"] === "number", `${argumentName}["competition"]["teams"]["max"]`, "number", typedObj["competition"]["teams"]["max"]) &&
                evaluate(typeof typedObj["competition"]["teams"]["signedup"] === "number", `${argumentName}["competition"]["teams"]["signedup"]`, "number", typedObj["competition"]["teams"]["signedup"]), `${argumentName}["competition"]["teams"]`, "import(\"./types/competition/competitionTeamStats\").CompetitionTeamStats", typedObj["competition"]["teams"]) &&
            evaluate((typedObj["competition"]["urls"] !== null &&
                typeof typedObj["competition"]["urls"] === "object" ||
                typeof typedObj["competition"]["urls"] === "function") &&
                evaluate(typeof typedObj["competition"]["urls"]["matches"] === "string", `${argumentName}["competition"]["urls"]["matches"]`, "string", typedObj["competition"]["urls"]["matches"]) &&
                evaluate(typeof typedObj["competition"]["urls"]["results"] === "string", `${argumentName}["competition"]["urls"]["results"]`, "string", typedObj["competition"]["urls"]["results"]) &&
                evaluate(typeof typedObj["competition"]["urls"]["self"] === "string", `${argumentName}["competition"]["urls"]["self"]`, "string", typedObj["competition"]["urls"]["self"]) &&
                evaluate(typeof typedObj["competition"]["urls"]["teams"] === "string", `${argumentName}["competition"]["urls"]["teams"]`, "string", typedObj["competition"]["urls"]["teams"]), `${argumentName}["competition"]["urls"]`, "import(\"./types/competition/competitionUrls\").CompetitionUrls", typedObj["competition"]["urls"]), `${argumentName}["competition"]`, "import(\"./types/competition/competitionDetails\").CompetitionDetails", typedObj["competition"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lCompetitionList(obj: unknown, argumentName: string = "etf2lCompetitionListG"): obj is Etf2lCompetitionListG {
    const typedObj = obj as Etf2lCompetitionListG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["competitions"] !== null &&
            typeof typedObj["competitions"] === "object" ||
            typeof typedObj["competitions"] === "function") &&
            evaluate(typeof typedObj["competitions"]["current_page"] === "number", `${argumentName}["competitions"]["current_page"]`, "number", typedObj["competitions"]["current_page"]) &&
            evaluate((typedObj["competitions"]["from"] === null ||
                typeof typedObj["competitions"]["from"] === "number"), `${argumentName}["competitions"]["from"]`, "number | null", typedObj["competitions"]["from"]) &&
            evaluate(typeof typedObj["competitions"]["last_page"] === "number", `${argumentName}["competitions"]["last_page"]`, "number", typedObj["competitions"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["competitions"]["links"]) &&
                typedObj["competitions"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["competitions"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["competitions"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["competitions"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["competitions"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["competitions"]["links"]) &&
            evaluate(typeof typedObj["competitions"]["path"] === "string", `${argumentName}["competitions"]["path"]`, "string", typedObj["competitions"]["path"]) &&
            evaluate(typeof typedObj["competitions"]["per_page"] === "number", `${argumentName}["competitions"]["per_page"]`, "number", typedObj["competitions"]["per_page"]) &&
            evaluate((typedObj["competitions"]["to"] === null ||
                typeof typedObj["competitions"]["to"] === "number"), `${argumentName}["competitions"]["to"]`, "number | null", typedObj["competitions"]["to"]) &&
            evaluate(typeof typedObj["competitions"]["total"] === "number", `${argumentName}["competitions"]["total"]`, "number", typedObj["competitions"]["total"]) &&
            (typedObj["competitions"] !== null &&
                typeof typedObj["competitions"] === "object" ||
                typeof typedObj["competitions"] === "function") &&
            evaluate(typeof typedObj["competitions"]["current_page"] === "number", `${argumentName}["competitions"]["current_page"]`, "number", typedObj["competitions"]["current_page"]) &&
            evaluate(typeof typedObj["competitions"]["first_page_url"] === "string", `${argumentName}["competitions"]["first_page_url"]`, "string", typedObj["competitions"]["first_page_url"]) &&
            evaluate((typedObj["competitions"]["from"] === null ||
                typeof typedObj["competitions"]["from"] === "number"), `${argumentName}["competitions"]["from"]`, "number | null", typedObj["competitions"]["from"]) &&
            evaluate(typeof typedObj["competitions"]["last_page"] === "number", `${argumentName}["competitions"]["last_page"]`, "number", typedObj["competitions"]["last_page"]) &&
            evaluate(typeof typedObj["competitions"]["last_page_url"] === "string", `${argumentName}["competitions"]["last_page_url"]`, "string", typedObj["competitions"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["competitions"]["links"]) &&
                typedObj["competitions"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["competitions"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["competitions"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["competitions"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["competitions"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["competitions"]["links"]) &&
            evaluate((typedObj["competitions"]["next_page_url"] === null ||
                typeof typedObj["competitions"]["next_page_url"] === "string"), `${argumentName}["competitions"]["next_page_url"]`, "string | null", typedObj["competitions"]["next_page_url"]) &&
            evaluate(typeof typedObj["competitions"]["path"] === "string", `${argumentName}["competitions"]["path"]`, "string", typedObj["competitions"]["path"]) &&
            evaluate(typeof typedObj["competitions"]["per_page"] === "number", `${argumentName}["competitions"]["per_page"]`, "number", typedObj["competitions"]["per_page"]) &&
            evaluate((typedObj["competitions"]["prev_page_url"] === null ||
                typeof typedObj["competitions"]["prev_page_url"] === "string"), `${argumentName}["competitions"]["prev_page_url"]`, "string | null", typedObj["competitions"]["prev_page_url"]) &&
            evaluate((typedObj["competitions"]["to"] === null ||
                typeof typedObj["competitions"]["to"] === "number"), `${argumentName}["competitions"]["to"]`, "number | null", typedObj["competitions"]["to"]) &&
            evaluate(typeof typedObj["competitions"]["total"] === "number", `${argumentName}["competitions"]["total"]`, "number", typedObj["competitions"]["total"]) &&
            (typedObj["competitions"] !== null &&
                typeof typedObj["competitions"] === "object" ||
                typeof typedObj["competitions"] === "function") &&
            evaluate(Array.isArray(typedObj["competitions"]["data"]) &&
                typedObj["competitions"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["category"] === "string", `${argumentName}["competitions"]["data"][${i0}]["category"]`, "string", e["category"]) &&
                    evaluate(typeof e["description"] === "string", `${argumentName}["competitions"]["data"][${i0}]["description"]`, "string", e["description"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["competitions"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["competitions"]["data"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["archived"] === "boolean", `${argumentName}["competitions"]["data"][${i0}]["archived"]`, "boolean", e["archived"]) &&
                    evaluate(typeof e["type"] === "string", `${argumentName}["competitions"]["data"][${i0}]["type"]`, "string", e["type"]) &&
                    evaluate((e["urls"] !== null &&
                        typeof e["urls"] === "object" ||
                        typeof e["urls"] === "function") &&
                        evaluate(typeof e["urls"]["matches"] === "string", `${argumentName}["competitions"]["data"][${i0}]["urls"]["matches"]`, "string", e["urls"]["matches"]) &&
                        evaluate(typeof e["urls"]["results"] === "string", `${argumentName}["competitions"]["data"][${i0}]["urls"]["results"]`, "string", e["urls"]["results"]) &&
                        evaluate(typeof e["urls"]["self"] === "string", `${argumentName}["competitions"]["data"][${i0}]["urls"]["self"]`, "string", e["urls"]["self"]) &&
                        evaluate(typeof e["urls"]["teams"] === "string", `${argumentName}["competitions"]["data"][${i0}]["urls"]["teams"]`, "string", e["urls"]["teams"]), `${argumentName}["competitions"]["data"][${i0}]["urls"]`, "import(\"./types/competition/competitionUrls\").CompetitionUrls", e["urls"])
                ), `${argumentName}["competitions"]["data"]`, "import(\"./types/competition/competitionElement\").CompetitionElement[]", typedObj["competitions"]["data"]), `${argumentName}["competitions"]`, "import(\"./types/competition/competitions\").Competitions", typedObj["competitions"])
    )
}

export function isEtf2lCompetitionMatches(obj: unknown, argumentName: string = "etf2lCompetitionMatchesG"): obj is Etf2lCompetitionMatchesG {
    const typedObj = obj as Etf2lCompetitionMatchesG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["matches"] !== null &&
            typeof typedObj["matches"] === "object" ||
            typeof typedObj["matches"] === "function") &&
            evaluate(typeof typedObj["matches"]["current_page"] === "number", `${argumentName}["matches"]["current_page"]`, "number", typedObj["matches"]["current_page"]) &&
            evaluate((typedObj["matches"]["from"] === null ||
                typeof typedObj["matches"]["from"] === "number"), `${argumentName}["matches"]["from"]`, "number | null", typedObj["matches"]["from"]) &&
            evaluate(typeof typedObj["matches"]["last_page"] === "number", `${argumentName}["matches"]["last_page"]`, "number", typedObj["matches"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["matches"]["links"]) &&
                typedObj["matches"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["matches"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["matches"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["matches"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["matches"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["matches"]["links"]) &&
            evaluate(typeof typedObj["matches"]["path"] === "string", `${argumentName}["matches"]["path"]`, "string", typedObj["matches"]["path"]) &&
            evaluate(typeof typedObj["matches"]["per_page"] === "number", `${argumentName}["matches"]["per_page"]`, "number", typedObj["matches"]["per_page"]) &&
            evaluate((typedObj["matches"]["to"] === null ||
                typeof typedObj["matches"]["to"] === "number"), `${argumentName}["matches"]["to"]`, "number | null", typedObj["matches"]["to"]) &&
            evaluate(typeof typedObj["matches"]["total"] === "number", `${argumentName}["matches"]["total"]`, "number", typedObj["matches"]["total"]) &&
            (typedObj["matches"] !== null &&
                typeof typedObj["matches"] === "object" ||
                typeof typedObj["matches"] === "function") &&
            evaluate(typeof typedObj["matches"]["current_page"] === "number", `${argumentName}["matches"]["current_page"]`, "number", typedObj["matches"]["current_page"]) &&
            evaluate(typeof typedObj["matches"]["first_page_url"] === "string", `${argumentName}["matches"]["first_page_url"]`, "string", typedObj["matches"]["first_page_url"]) &&
            evaluate((typedObj["matches"]["from"] === null ||
                typeof typedObj["matches"]["from"] === "number"), `${argumentName}["matches"]["from"]`, "number | null", typedObj["matches"]["from"]) &&
            evaluate(typeof typedObj["matches"]["last_page"] === "number", `${argumentName}["matches"]["last_page"]`, "number", typedObj["matches"]["last_page"]) &&
            evaluate(typeof typedObj["matches"]["last_page_url"] === "string", `${argumentName}["matches"]["last_page_url"]`, "string", typedObj["matches"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["matches"]["links"]) &&
                typedObj["matches"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["matches"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["matches"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["matches"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["matches"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["matches"]["links"]) &&
            evaluate((typedObj["matches"]["next_page_url"] === null ||
                typeof typedObj["matches"]["next_page_url"] === "string"), `${argumentName}["matches"]["next_page_url"]`, "string | null", typedObj["matches"]["next_page_url"]) &&
            evaluate(typeof typedObj["matches"]["path"] === "string", `${argumentName}["matches"]["path"]`, "string", typedObj["matches"]["path"]) &&
            evaluate(typeof typedObj["matches"]["per_page"] === "number", `${argumentName}["matches"]["per_page"]`, "number", typedObj["matches"]["per_page"]) &&
            evaluate((typedObj["matches"]["prev_page_url"] === null ||
                typeof typedObj["matches"]["prev_page_url"] === "string"), `${argumentName}["matches"]["prev_page_url"]`, "string | null", typedObj["matches"]["prev_page_url"]) &&
            evaluate((typedObj["matches"]["to"] === null ||
                typeof typedObj["matches"]["to"] === "number"), `${argumentName}["matches"]["to"]`, "number | null", typedObj["matches"]["to"]) &&
            evaluate(typeof typedObj["matches"]["total"] === "number", `${argumentName}["matches"]["total"]`, "number", typedObj["matches"]["total"]) &&
            (typedObj["matches"] !== null &&
                typeof typedObj["matches"] === "object" ||
                typeof typedObj["matches"] === "function") &&
            evaluate((typedObj["matches"]["data"] !== null &&
                typeof typedObj["matches"]["data"] === "object" ||
                typeof typedObj["matches"]["data"] === "function") &&
                evaluate((typedObj["matches"]["data"]["clan1"] !== null &&
                    typeof typedObj["matches"]["data"]["clan1"] === "object" ||
                    typeof typedObj["matches"]["data"]["clan1"] === "function") &&
                    evaluate(typeof typedObj["matches"]["data"]["clan1"]["country"] === "string", `${argumentName}["matches"]["data"]["clan1"]["country"]`, "string", typedObj["matches"]["data"]["clan1"]["country"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan1"]["drop"] === "boolean", `${argumentName}["matches"]["data"]["clan1"]["drop"]`, "boolean", typedObj["matches"]["data"]["clan1"]["drop"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan1"]["id"] === "number", `${argumentName}["matches"]["data"]["clan1"]["id"]`, "number", typedObj["matches"]["data"]["clan1"]["id"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan1"]["name"] === "string", `${argumentName}["matches"]["data"]["clan1"]["name"]`, "string", typedObj["matches"]["data"]["clan1"]["name"]) &&
                    evaluate((typedObj["matches"]["data"]["clan1"]["steam"] !== null &&
                        typeof typedObj["matches"]["data"]["clan1"]["steam"] === "object" ||
                        typeof typedObj["matches"]["data"]["clan1"]["steam"] === "function") &&
                        evaluate(typeof typedObj["matches"]["data"]["clan1"]["steam"]["avatar"] === "string", `${argumentName}["matches"]["data"]["clan1"]["steam"]["avatar"]`, "string", typedObj["matches"]["data"]["clan1"]["steam"]["avatar"]) &&
                        evaluate((typedObj["matches"]["data"]["clan1"]["steam"]["group"] === null ||
                            typeof typedObj["matches"]["data"]["clan1"]["steam"]["group"] === "string"), `${argumentName}["matches"]["data"]["clan1"]["steam"]["group"]`, "string | null", typedObj["matches"]["data"]["clan1"]["steam"]["group"]), `${argumentName}["matches"]["data"]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", typedObj["matches"]["data"]["clan1"]["steam"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan1"]["url"] === "string", `${argumentName}["matches"]["data"]["clan1"]["url"]`, "string", typedObj["matches"]["data"]["clan1"]["url"]), `${argumentName}["matches"]["data"]["clan1"]`, "import(\"./types/common/clan\").Clan", typedObj["matches"]["data"]["clan1"]) &&
                evaluate((typedObj["matches"]["data"]["clan2"] !== null &&
                    typeof typedObj["matches"]["data"]["clan2"] === "object" ||
                    typeof typedObj["matches"]["data"]["clan2"] === "function") &&
                    evaluate(typeof typedObj["matches"]["data"]["clan2"]["country"] === "string", `${argumentName}["matches"]["data"]["clan2"]["country"]`, "string", typedObj["matches"]["data"]["clan2"]["country"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan2"]["drop"] === "boolean", `${argumentName}["matches"]["data"]["clan2"]["drop"]`, "boolean", typedObj["matches"]["data"]["clan2"]["drop"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan2"]["id"] === "number", `${argumentName}["matches"]["data"]["clan2"]["id"]`, "number", typedObj["matches"]["data"]["clan2"]["id"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan2"]["name"] === "string", `${argumentName}["matches"]["data"]["clan2"]["name"]`, "string", typedObj["matches"]["data"]["clan2"]["name"]) &&
                    evaluate((typedObj["matches"]["data"]["clan2"]["steam"] !== null &&
                        typeof typedObj["matches"]["data"]["clan2"]["steam"] === "object" ||
                        typeof typedObj["matches"]["data"]["clan2"]["steam"] === "function") &&
                        evaluate(typeof typedObj["matches"]["data"]["clan2"]["steam"]["avatar"] === "string", `${argumentName}["matches"]["data"]["clan2"]["steam"]["avatar"]`, "string", typedObj["matches"]["data"]["clan2"]["steam"]["avatar"]) &&
                        evaluate((typedObj["matches"]["data"]["clan2"]["steam"]["group"] === null ||
                            typeof typedObj["matches"]["data"]["clan2"]["steam"]["group"] === "string"), `${argumentName}["matches"]["data"]["clan2"]["steam"]["group"]`, "string | null", typedObj["matches"]["data"]["clan2"]["steam"]["group"]), `${argumentName}["matches"]["data"]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", typedObj["matches"]["data"]["clan2"]["steam"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["clan2"]["url"] === "string", `${argumentName}["matches"]["data"]["clan2"]["url"]`, "string", typedObj["matches"]["data"]["clan2"]["url"]), `${argumentName}["matches"]["data"]["clan2"]`, "import(\"./types/common/clan\").Clan", typedObj["matches"]["data"]["clan2"]) &&
                evaluate((typedObj["matches"]["data"]["competition"] !== null &&
                    typeof typedObj["matches"]["data"]["competition"] === "object" ||
                    typeof typedObj["matches"]["data"]["competition"] === "function") &&
                    evaluate(typeof typedObj["matches"]["data"]["competition"]["category"] === "string", `${argumentName}["matches"]["data"]["competition"]["category"]`, "string", typedObj["matches"]["data"]["competition"]["category"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["competition"]["id"] === "number", `${argumentName}["matches"]["data"]["competition"]["id"]`, "number", typedObj["matches"]["data"]["competition"]["id"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["competition"]["name"] === "string", `${argumentName}["matches"]["data"]["competition"]["name"]`, "string", typedObj["matches"]["data"]["competition"]["name"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["competition"]["type"] === "string", `${argumentName}["matches"]["data"]["competition"]["type"]`, "string", typedObj["matches"]["data"]["competition"]["type"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["competition"]["url"] === "string", `${argumentName}["matches"]["data"]["competition"]["url"]`, "string", typedObj["matches"]["data"]["competition"]["url"]), `${argumentName}["matches"]["data"]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", typedObj["matches"]["data"]["competition"]) &&
                evaluate((typedObj["matches"]["data"]["defaultwin"] === null ||
                    typedObj["matches"]["data"]["defaultwin"] === false ||
                    typedObj["matches"]["data"]["defaultwin"] === true), `${argumentName}["matches"]["data"]["defaultwin"]`, "boolean | null", typedObj["matches"]["data"]["defaultwin"]) &&
                evaluate((typedObj["matches"]["data"]["division"] !== null &&
                    typeof typedObj["matches"]["data"]["division"] === "object" ||
                    typeof typedObj["matches"]["data"]["division"] === "function") &&
                    evaluate((typedObj["matches"]["data"]["division"]["id"] === null ||
                        typeof typedObj["matches"]["data"]["division"]["id"] === "number"), `${argumentName}["matches"]["data"]["division"]["id"]`, "number | null", typedObj["matches"]["data"]["division"]["id"]) &&
                    evaluate((typedObj["matches"]["data"]["division"]["name"] === null ||
                        typeof typedObj["matches"]["data"]["division"]["name"] === "string"), `${argumentName}["matches"]["data"]["division"]["name"]`, "string | null", typedObj["matches"]["data"]["division"]["name"]) &&
                    evaluate((typedObj["matches"]["data"]["division"]["skill_contrib"] === null ||
                        typeof typedObj["matches"]["data"]["division"]["skill_contrib"] === "number"), `${argumentName}["matches"]["data"]["division"]["skill_contrib"]`, "number | null", typedObj["matches"]["data"]["division"]["skill_contrib"]) &&
                    evaluate((typedObj["matches"]["data"]["division"]["tier"] === null ||
                        typeof typedObj["matches"]["data"]["division"]["tier"] === "number"), `${argumentName}["matches"]["data"]["division"]["tier"]`, "number | null", typedObj["matches"]["data"]["division"]["tier"]), `${argumentName}["matches"]["data"]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision", typedObj["matches"]["data"]["division"]) &&
                evaluate(typeof typedObj["matches"]["data"]["id"] === "number", `${argumentName}["matches"]["data"]["id"]`, "number", typedObj["matches"]["data"]["id"]) &&
                evaluate(Array.isArray(typedObj["matches"]["data"]["maps"]) &&
                    typedObj["matches"]["data"]["maps"].every((e: any) =>
                        typeof e === "string"
                    ), `${argumentName}["matches"]["data"]["maps"]`, "string[]", typedObj["matches"]["data"]["maps"]) &&
                evaluate((typedObj["matches"]["data"]["result"] !== null &&
                    typeof typedObj["matches"]["data"]["result"] === "object" ||
                    typeof typedObj["matches"]["data"]["result"] === "function") &&
                    evaluate(typeof typedObj["matches"]["data"]["result"]["r1"] === "number", `${argumentName}["matches"]["data"]["result"]["r1"]`, "number", typedObj["matches"]["data"]["result"]["r1"]) &&
                    evaluate(typeof typedObj["matches"]["data"]["result"]["r2"] === "number", `${argumentName}["matches"]["data"]["result"]["r2"]`, "number", typedObj["matches"]["data"]["result"]["r2"]), `${argumentName}["matches"]["data"]["result"]`, "{ r1: number; r2: number; }", typedObj["matches"]["data"]["result"]) &&
                evaluate(typeof typedObj["matches"]["data"]["round"] === "string", `${argumentName}["matches"]["data"]["round"]`, "string", typedObj["matches"]["data"]["round"]) &&
                evaluate((typedObj["matches"]["data"]["time"] === null ||
                    typeof typedObj["matches"]["data"]["time"] === "number"), `${argumentName}["matches"]["data"]["time"]`, "number | null", typedObj["matches"]["data"]["time"]) &&
                evaluate(typeof typedObj["matches"]["data"]["week"] === "number", `${argumentName}["matches"]["data"]["week"]`, "number", typedObj["matches"]["data"]["week"]) &&
                evaluate((typedObj["matches"]["data"]["skill_contrib"] === null ||
                    typeof typedObj["matches"]["data"]["skill_contrib"] === "number"), `${argumentName}["matches"]["data"]["skill_contrib"]`, "number | null", typedObj["matches"]["data"]["skill_contrib"]), `${argumentName}["matches"]["data"]`, "import(\"./types/competition/competitionMatchData\").CompetitionMatchData", typedObj["matches"]["data"]) &&
            evaluate((typedObj["matches"]["status"] !== null &&
                typeof typedObj["matches"]["status"] === "object" ||
                typeof typedObj["matches"]["status"] === "function") &&
                evaluate(typeof typedObj["matches"]["status"]["code"] === "number", `${argumentName}["matches"]["status"]["code"]`, "number", typedObj["matches"]["status"]["code"]) &&
                evaluate(typeof typedObj["matches"]["status"]["message"] === "string", `${argumentName}["matches"]["status"]["message"]`, "string", typedObj["matches"]["status"]["message"]), `${argumentName}["matches"]["status"]`, "import(\"./types/common/status\").Status", typedObj["matches"]["status"]), `${argumentName}["matches"]`, "import(\"./types/competition/competitionMatches\").CompetitionMatches", typedObj["matches"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lCompetitionResults(obj: unknown, argumentName: string = "etf2lCompetitionResultsG"): obj is Etf2lCompetitionResultsG {
    const typedObj = obj as Etf2lCompetitionResultsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["results"] !== null &&
            typeof typedObj["results"] === "object" ||
            typeof typedObj["results"] === "function") &&
            evaluate(typeof typedObj["results"]["current_page"] === "number", `${argumentName}["results"]["current_page"]`, "number", typedObj["results"]["current_page"]) &&
            evaluate((typedObj["results"]["from"] === null ||
                typeof typedObj["results"]["from"] === "number"), `${argumentName}["results"]["from"]`, "number | null", typedObj["results"]["from"]) &&
            evaluate(typeof typedObj["results"]["last_page"] === "number", `${argumentName}["results"]["last_page"]`, "number", typedObj["results"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["results"]["links"]) &&
                typedObj["results"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["results"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["results"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["results"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["results"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["results"]["links"]) &&
            evaluate(typeof typedObj["results"]["path"] === "string", `${argumentName}["results"]["path"]`, "string", typedObj["results"]["path"]) &&
            evaluate(typeof typedObj["results"]["per_page"] === "number", `${argumentName}["results"]["per_page"]`, "number", typedObj["results"]["per_page"]) &&
            evaluate((typedObj["results"]["to"] === null ||
                typeof typedObj["results"]["to"] === "number"), `${argumentName}["results"]["to"]`, "number | null", typedObj["results"]["to"]) &&
            evaluate(typeof typedObj["results"]["total"] === "number", `${argumentName}["results"]["total"]`, "number", typedObj["results"]["total"]) &&
            (typedObj["results"] !== null &&
                typeof typedObj["results"] === "object" ||
                typeof typedObj["results"] === "function") &&
            evaluate(typeof typedObj["results"]["current_page"] === "number", `${argumentName}["results"]["current_page"]`, "number", typedObj["results"]["current_page"]) &&
            evaluate(typeof typedObj["results"]["first_page_url"] === "string", `${argumentName}["results"]["first_page_url"]`, "string", typedObj["results"]["first_page_url"]) &&
            evaluate((typedObj["results"]["from"] === null ||
                typeof typedObj["results"]["from"] === "number"), `${argumentName}["results"]["from"]`, "number | null", typedObj["results"]["from"]) &&
            evaluate(typeof typedObj["results"]["last_page"] === "number", `${argumentName}["results"]["last_page"]`, "number", typedObj["results"]["last_page"]) &&
            evaluate(typeof typedObj["results"]["last_page_url"] === "string", `${argumentName}["results"]["last_page_url"]`, "string", typedObj["results"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["results"]["links"]) &&
                typedObj["results"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["results"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["results"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["results"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["results"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["results"]["links"]) &&
            evaluate((typedObj["results"]["next_page_url"] === null ||
                typeof typedObj["results"]["next_page_url"] === "string"), `${argumentName}["results"]["next_page_url"]`, "string | null", typedObj["results"]["next_page_url"]) &&
            evaluate(typeof typedObj["results"]["path"] === "string", `${argumentName}["results"]["path"]`, "string", typedObj["results"]["path"]) &&
            evaluate(typeof typedObj["results"]["per_page"] === "number", `${argumentName}["results"]["per_page"]`, "number", typedObj["results"]["per_page"]) &&
            evaluate((typedObj["results"]["prev_page_url"] === null ||
                typeof typedObj["results"]["prev_page_url"] === "string"), `${argumentName}["results"]["prev_page_url"]`, "string | null", typedObj["results"]["prev_page_url"]) &&
            evaluate((typedObj["results"]["to"] === null ||
                typeof typedObj["results"]["to"] === "number"), `${argumentName}["results"]["to"]`, "number | null", typedObj["results"]["to"]) &&
            evaluate(typeof typedObj["results"]["total"] === "number", `${argumentName}["results"]["total"]`, "number", typedObj["results"]["total"]) &&
            (typedObj["results"] !== null &&
                typeof typedObj["results"] === "object" ||
                typeof typedObj["results"] === "function") &&
            evaluate(Array.isArray(typedObj["results"]["data"]) &&
                typedObj["results"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["clan1"] !== null &&
                        typeof e["clan1"] === "object" ||
                        typeof e["clan1"] === "function") &&
                        evaluate(typeof e["clan1"]["country"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["country"]`, "string", e["clan1"]["country"]) &&
                        evaluate(typeof e["clan1"]["drop"] === "boolean", `${argumentName}["results"]["data"][${i0}]["clan1"]["drop"]`, "boolean", e["clan1"]["drop"]) &&
                        evaluate(typeof e["clan1"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["clan1"]["id"]`, "number", e["clan1"]["id"]) &&
                        evaluate(typeof e["clan1"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["name"]`, "string", e["clan1"]["name"]) &&
                        evaluate((e["clan1"]["steam"] !== null &&
                            typeof e["clan1"]["steam"] === "object" ||
                            typeof e["clan1"]["steam"] === "function") &&
                            evaluate(typeof e["clan1"]["steam"]["avatar"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]["avatar"]`, "string", e["clan1"]["steam"]["avatar"]) &&
                            evaluate((e["clan1"]["steam"]["group"] === null ||
                                typeof e["clan1"]["steam"]["group"] === "string"), `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]["group"]`, "string | null", e["clan1"]["steam"]["group"]), `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan1"]["steam"]) &&
                        evaluate(typeof e["clan1"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["url"]`, "string", e["clan1"]["url"]), `${argumentName}["results"]["data"][${i0}]["clan1"]`, "import(\"./types/common/clan\").Clan", e["clan1"]) &&
                    evaluate((e["clan2"] !== null &&
                        typeof e["clan2"] === "object" ||
                        typeof e["clan2"] === "function") &&
                        evaluate(typeof e["clan2"]["country"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["country"]`, "string", e["clan2"]["country"]) &&
                        evaluate(typeof e["clan2"]["drop"] === "boolean", `${argumentName}["results"]["data"][${i0}]["clan2"]["drop"]`, "boolean", e["clan2"]["drop"]) &&
                        evaluate(typeof e["clan2"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["clan2"]["id"]`, "number", e["clan2"]["id"]) &&
                        evaluate(typeof e["clan2"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["name"]`, "string", e["clan2"]["name"]) &&
                        evaluate((e["clan2"]["steam"] !== null &&
                            typeof e["clan2"]["steam"] === "object" ||
                            typeof e["clan2"]["steam"] === "function") &&
                            evaluate(typeof e["clan2"]["steam"]["avatar"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]["avatar"]`, "string", e["clan2"]["steam"]["avatar"]) &&
                            evaluate((e["clan2"]["steam"]["group"] === null ||
                                typeof e["clan2"]["steam"]["group"] === "string"), `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]["group"]`, "string | null", e["clan2"]["steam"]["group"]), `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan2"]["steam"]) &&
                        evaluate(typeof e["clan2"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["url"]`, "string", e["clan2"]["url"]), `${argumentName}["results"]["data"][${i0}]["clan2"]`, "import(\"./types/common/clan\").Clan", e["clan2"]) &&
                    evaluate((e["competition"] !== null &&
                        typeof e["competition"] === "object" ||
                        typeof e["competition"] === "function") &&
                        evaluate(typeof e["competition"]["category"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["category"]`, "string", e["competition"]["category"]) &&
                        evaluate(typeof e["competition"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["competition"]["id"]`, "number", e["competition"]["id"]) &&
                        evaluate(typeof e["competition"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["name"]`, "string", e["competition"]["name"]) &&
                        evaluate(typeof e["competition"]["type"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["type"]`, "string", e["competition"]["type"]) &&
                        evaluate(typeof e["competition"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["url"]`, "string", e["competition"]["url"]), `${argumentName}["results"]["data"][${i0}]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", e["competition"]) &&
                    evaluate((e["defaultwin"] === null ||
                        e["defaultwin"] === false ||
                        e["defaultwin"] === true), `${argumentName}["results"]["data"][${i0}]["defaultwin"]`, "boolean | null", e["defaultwin"]) &&
                    evaluate((e["division"] !== null &&
                        typeof e["division"] === "object" ||
                        typeof e["division"] === "function") &&
                        evaluate((e["division"]["id"] === null ||
                            typeof e["division"]["id"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["id"]`, "number | null", e["division"]["id"]) &&
                        evaluate((e["division"]["name"] === null ||
                            typeof e["division"]["name"] === "string"), `${argumentName}["results"]["data"][${i0}]["division"]["name"]`, "string | null", e["division"]["name"]) &&
                        evaluate((e["division"]["skill_contrib"] === null ||
                            typeof e["division"]["skill_contrib"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["skill_contrib"]`, "number | null", e["division"]["skill_contrib"]) &&
                        evaluate((e["division"]["tier"] === null ||
                            typeof e["division"]["tier"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["tier"]`, "number | null", e["division"]["tier"]), `${argumentName}["results"]["data"][${i0}]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision", e["division"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["results"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(Array.isArray(e["maps"]) &&
                        e["maps"].every((e: any) =>
                            typeof e === "string"
                        ), `${argumentName}["results"]["data"][${i0}]["maps"]`, "string[]", e["maps"]) &&
                    evaluate(typeof e["r1"] === "number", `${argumentName}["results"]["data"][${i0}]["r1"]`, "number", e["r1"]) &&
                    evaluate(typeof e["r2"] === "number", `${argumentName}["results"]["data"][${i0}]["r2"]`, "number", e["r2"]) &&
                    evaluate(typeof e["round"] === "string", `${argumentName}["results"]["data"][${i0}]["round"]`, "string", e["round"]) &&
                    evaluate((e["time"] === null ||
                        typeof e["time"] === "number"), `${argumentName}["results"]["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                    evaluate(typeof e["week"] === "number", `${argumentName}["results"]["data"][${i0}]["week"]`, "number", e["week"])
                ), `${argumentName}["results"]["data"]`, "import(\"./types/competition/competitionResultsData\").CompetitionResultsData[]", typedObj["results"]["data"]), `${argumentName}["results"]`, "import(\"./types/competition/competitionResult\").CompetitionResults", typedObj["results"])
    )
}

export function isEtf2lCompetitionTeams(obj: unknown, argumentName: string = "etf2lCompetitionTeamsG"): obj is Etf2lCompetitionTeamsG {
    const typedObj = obj as Etf2lCompetitionTeamsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"]) &&
        evaluate((typedObj["teams"] !== null &&
            typeof typedObj["teams"] === "object" ||
            typeof typedObj["teams"] === "function") &&
            evaluate(typeof typedObj["teams"]["current_page"] === "number", `${argumentName}["teams"]["current_page"]`, "number", typedObj["teams"]["current_page"]) &&
            evaluate((typedObj["teams"]["from"] === null ||
                typeof typedObj["teams"]["from"] === "number"), `${argumentName}["teams"]["from"]`, "number | null", typedObj["teams"]["from"]) &&
            evaluate(typeof typedObj["teams"]["last_page"] === "number", `${argumentName}["teams"]["last_page"]`, "number", typedObj["teams"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["teams"]["links"]) &&
                typedObj["teams"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["teams"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["teams"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["teams"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["teams"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["teams"]["links"]) &&
            evaluate(typeof typedObj["teams"]["path"] === "string", `${argumentName}["teams"]["path"]`, "string", typedObj["teams"]["path"]) &&
            evaluate(typeof typedObj["teams"]["per_page"] === "number", `${argumentName}["teams"]["per_page"]`, "number", typedObj["teams"]["per_page"]) &&
            evaluate((typedObj["teams"]["to"] === null ||
                typeof typedObj["teams"]["to"] === "number"), `${argumentName}["teams"]["to"]`, "number | null", typedObj["teams"]["to"]) &&
            evaluate(typeof typedObj["teams"]["total"] === "number", `${argumentName}["teams"]["total"]`, "number", typedObj["teams"]["total"]) &&
            (typedObj["teams"] !== null &&
                typeof typedObj["teams"] === "object" ||
                typeof typedObj["teams"] === "function") &&
            evaluate(typeof typedObj["teams"]["current_page"] === "number", `${argumentName}["teams"]["current_page"]`, "number", typedObj["teams"]["current_page"]) &&
            evaluate(typeof typedObj["teams"]["first_page_url"] === "string", `${argumentName}["teams"]["first_page_url"]`, "string", typedObj["teams"]["first_page_url"]) &&
            evaluate((typedObj["teams"]["from"] === null ||
                typeof typedObj["teams"]["from"] === "number"), `${argumentName}["teams"]["from"]`, "number | null", typedObj["teams"]["from"]) &&
            evaluate(typeof typedObj["teams"]["last_page"] === "number", `${argumentName}["teams"]["last_page"]`, "number", typedObj["teams"]["last_page"]) &&
            evaluate(typeof typedObj["teams"]["last_page_url"] === "string", `${argumentName}["teams"]["last_page_url"]`, "string", typedObj["teams"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["teams"]["links"]) &&
                typedObj["teams"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["teams"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["teams"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["teams"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["teams"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["teams"]["links"]) &&
            evaluate((typedObj["teams"]["next_page_url"] === null ||
                typeof typedObj["teams"]["next_page_url"] === "string"), `${argumentName}["teams"]["next_page_url"]`, "string | null", typedObj["teams"]["next_page_url"]) &&
            evaluate(typeof typedObj["teams"]["path"] === "string", `${argumentName}["teams"]["path"]`, "string", typedObj["teams"]["path"]) &&
            evaluate(typeof typedObj["teams"]["per_page"] === "number", `${argumentName}["teams"]["per_page"]`, "number", typedObj["teams"]["per_page"]) &&
            evaluate((typedObj["teams"]["prev_page_url"] === null ||
                typeof typedObj["teams"]["prev_page_url"] === "string"), `${argumentName}["teams"]["prev_page_url"]`, "string | null", typedObj["teams"]["prev_page_url"]) &&
            evaluate((typedObj["teams"]["to"] === null ||
                typeof typedObj["teams"]["to"] === "number"), `${argumentName}["teams"]["to"]`, "number | null", typedObj["teams"]["to"]) &&
            evaluate(typeof typedObj["teams"]["total"] === "number", `${argumentName}["teams"]["total"]`, "number", typedObj["teams"]["total"]) &&
            (typedObj["teams"] !== null &&
                typeof typedObj["teams"] === "object" ||
                typeof typedObj["teams"] === "function") &&
            evaluate(Array.isArray(typedObj["teams"]["data"]) &&
                typedObj["teams"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["teams"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["country"] === "string", `${argumentName}["teams"]["data"][${i0}]["country"]`, "string", e["country"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["teams"]["data"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["dropped"] === "number", `${argumentName}["teams"]["data"][${i0}]["dropped"]`, "number", e["dropped"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["teams"]["data"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate((e["steam"]["steam_group"] === null ||
                            typeof e["steam"]["steam_group"] === "string"), `${argumentName}["teams"]["data"][${i0}]["steam"]["steam_group"]`, "string | null", e["steam"]["steam_group"]), `${argumentName}["teams"]["data"][${i0}]["steam"]`, "{ avatar: string; steam_group: string | null; }", e["steam"]) &&
                    evaluate(typeof e["url"] === "string", `${argumentName}["teams"]["data"][${i0}]["url"]`, "string", e["url"])
                ), `${argumentName}["teams"]["data"]`, "import(\"./types/competition/competitionTeamsData\").CompetitionTeamsData[]", typedObj["teams"]["data"]), `${argumentName}["teams"]`, "import(\"./types/competition/competitionTeams\").CompetitionTeams", typedObj["teams"])
    )
}

export function isEtf2lCompetitionTables(obj: unknown, argumentName: string = "etf2lCompetitionTablesG"): obj is Etf2lCompetitionTablesG {
    const typedObj = obj as Etf2lCompetitionTablesG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["tables"] !== null &&
            typeof typedObj["tables"] === "object" ||
            typeof typedObj["tables"] === "function") &&
            Object.entries<any>(typedObj["tables"])
                .every(([key, value]) => (evaluate(Array.isArray(value) &&
                    value.every((e: any, i0: number) =>
                        (e !== null &&
                            typeof e === "object" ||
                            typeof e === "function") &&
                        evaluate(typeof e["id"] === "number", `${argumentName}["tables"] value[${i0}]["id"]`, "number", e["id"]) &&
                        evaluate(typeof e["drop"] === "boolean", `${argumentName}["tables"] value[${i0}]["drop"]`, "boolean", e["drop"]) &&
                        evaluate(typeof e["division_id"] === "number", `${argumentName}["tables"] value[${i0}]["division_id"]`, "number", e["division_id"]) &&
                        evaluate(typeof e["division_name"] === "string", `${argumentName}["tables"] value[${i0}]["division_name"]`, "string", e["division_name"]) &&
                        evaluate(typeof e["country"] === "string", `${argumentName}["tables"] value[${i0}]["country"]`, "string", e["country"]) &&
                        evaluate(typeof e["name"] === "string", `${argumentName}["tables"] value[${i0}]["name"]`, "string", e["name"]) &&
                        evaluate(typeof e["maps_played"] === "number", `${argumentName}["tables"] value[${i0}]["maps_played"]`, "number", e["maps_played"]) &&
                        evaluate(typeof e["maps_won"] === "number", `${argumentName}["tables"] value[${i0}]["maps_won"]`, "number", e["maps_won"]) &&
                        evaluate(typeof e["gc_won"] === "number", `${argumentName}["tables"] value[${i0}]["gc_won"]`, "number", e["gc_won"]) &&
                        evaluate(typeof e["gc_lost"] === "number", `${argumentName}["tables"] value[${i0}]["gc_lost"]`, "number", e["gc_lost"]) &&
                        evaluate(typeof e["maps_lost"] === "number", `${argumentName}["tables"] value[${i0}]["maps_lost"]`, "number", e["maps_lost"]) &&
                        evaluate(typeof e["penalty_points"] === "number", `${argumentName}["tables"] value[${i0}]["penalty_points"]`, "number", e["penalty_points"]) &&
                        evaluate(typeof e["score"] === "number", `${argumentName}["tables"] value[${i0}]["score"]`, "number", e["score"]) &&
                        evaluate((e["ach"] === null ||
                            typeof e["ach"] === "number"), `${argumentName}["tables"] value[${i0}]["ach"]`, "number | null", e["ach"]) &&
                        evaluate(typeof e["byes"] === "number", `${argumentName}["tables"] value[${i0}]["byes"]`, "number", e["byes"]) &&
                        evaluate(typeof e["seeded_points"] === "number", `${argumentName}["tables"] value[${i0}]["seeded_points"]`, "number", e["seeded_points"])
                    ), `${argumentName}["tables"]["${key.toString().replace(/"/g, '\\"')}"]`, "import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/competition/competitionTable\").CompetitionTable[]", value) &&
                    evaluate(typeof key === "string", `${argumentName}["tables"] (key: "${key.toString().replace(/"/g, '\\"')}")`, "string", key))), `${argumentName}["tables"]`, "{ [division: string]: import(\"./types/competition/competitionTable\").CompetitionTable[]; }", typedObj["tables"])
    )
}

export function isEtf2lDemos(obj: unknown, argumentName: string = "etf2lDemosG"): obj is Etf2lDemosG {
    const typedObj = obj as Etf2lDemosG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["demos"] !== null &&
            typeof typedObj["demos"] === "object" ||
            typeof typedObj["demos"] === "function") &&
            evaluate(typeof typedObj["demos"]["current_page"] === "number", `${argumentName}["demos"]["current_page"]`, "number", typedObj["demos"]["current_page"]) &&
            evaluate((typedObj["demos"]["from"] === null ||
                typeof typedObj["demos"]["from"] === "number"), `${argumentName}["demos"]["from"]`, "number | null", typedObj["demos"]["from"]) &&
            evaluate(typeof typedObj["demos"]["last_page"] === "number", `${argumentName}["demos"]["last_page"]`, "number", typedObj["demos"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["demos"]["links"]) &&
                typedObj["demos"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["demos"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["demos"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["demos"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["demos"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["demos"]["links"]) &&
            evaluate(typeof typedObj["demos"]["path"] === "string", `${argumentName}["demos"]["path"]`, "string", typedObj["demos"]["path"]) &&
            evaluate(typeof typedObj["demos"]["per_page"] === "number", `${argumentName}["demos"]["per_page"]`, "number", typedObj["demos"]["per_page"]) &&
            evaluate((typedObj["demos"]["to"] === null ||
                typeof typedObj["demos"]["to"] === "number"), `${argumentName}["demos"]["to"]`, "number | null", typedObj["demos"]["to"]) &&
            evaluate(typeof typedObj["demos"]["total"] === "number", `${argumentName}["demos"]["total"]`, "number", typedObj["demos"]["total"]) &&
            (typedObj["demos"] !== null &&
                typeof typedObj["demos"] === "object" ||
                typeof typedObj["demos"] === "function") &&
            evaluate(typeof typedObj["demos"]["current_page"] === "number", `${argumentName}["demos"]["current_page"]`, "number", typedObj["demos"]["current_page"]) &&
            evaluate(typeof typedObj["demos"]["first_page_url"] === "string", `${argumentName}["demos"]["first_page_url"]`, "string", typedObj["demos"]["first_page_url"]) &&
            evaluate((typedObj["demos"]["from"] === null ||
                typeof typedObj["demos"]["from"] === "number"), `${argumentName}["demos"]["from"]`, "number | null", typedObj["demos"]["from"]) &&
            evaluate(typeof typedObj["demos"]["last_page"] === "number", `${argumentName}["demos"]["last_page"]`, "number", typedObj["demos"]["last_page"]) &&
            evaluate(typeof typedObj["demos"]["last_page_url"] === "string", `${argumentName}["demos"]["last_page_url"]`, "string", typedObj["demos"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["demos"]["links"]) &&
                typedObj["demos"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["demos"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["demos"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["demos"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["demos"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["demos"]["links"]) &&
            evaluate((typedObj["demos"]["next_page_url"] === null ||
                typeof typedObj["demos"]["next_page_url"] === "string"), `${argumentName}["demos"]["next_page_url"]`, "string | null", typedObj["demos"]["next_page_url"]) &&
            evaluate(typeof typedObj["demos"]["path"] === "string", `${argumentName}["demos"]["path"]`, "string", typedObj["demos"]["path"]) &&
            evaluate(typeof typedObj["demos"]["per_page"] === "number", `${argumentName}["demos"]["per_page"]`, "number", typedObj["demos"]["per_page"]) &&
            evaluate((typedObj["demos"]["prev_page_url"] === null ||
                typeof typedObj["demos"]["prev_page_url"] === "string"), `${argumentName}["demos"]["prev_page_url"]`, "string | null", typedObj["demos"]["prev_page_url"]) &&
            evaluate((typedObj["demos"]["to"] === null ||
                typeof typedObj["demos"]["to"] === "number"), `${argumentName}["demos"]["to"]`, "number | null", typedObj["demos"]["to"]) &&
            evaluate(typeof typedObj["demos"]["total"] === "number", `${argumentName}["demos"]["total"]`, "number", typedObj["demos"]["total"]) &&
            (typedObj["demos"] !== null &&
                typeof typedObj["demos"] === "object" ||
                typeof typedObj["demos"] === "function") &&
            evaluate(Array.isArray(typedObj["demos"]["data"]) &&
                typedObj["demos"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["demos"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate((e["time"] === null ||
                        typeof e["time"] === "number"), `${argumentName}["demos"]["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                    evaluate(typeof e["match"] === "number", `${argumentName}["demos"]["data"][${i0}]["match"]`, "number", e["match"]) &&
                    evaluate(typeof e["download_url"] === "string", `${argumentName}["demos"]["data"][${i0}]["download_url"]`, "string", e["download_url"]) &&
                    evaluate(typeof e["stv"] === "boolean", `${argumentName}["demos"]["data"][${i0}]["stv"]`, "boolean", e["stv"]) &&
                    evaluate(typeof e["first_person"] === "boolean", `${argumentName}["demos"]["data"][${i0}]["first_person"]`, "boolean", e["first_person"]) &&
                    evaluate(typeof e["downloads"] === "number", `${argumentName}["demos"]["data"][${i0}]["downloads"]`, "number", e["downloads"]) &&
                    evaluate(typeof e["owner"] === "number", `${argumentName}["demos"]["data"][${i0}]["owner"]`, "number", e["owner"]) &&
                    evaluate(typeof e["owner_name"] === "string", `${argumentName}["demos"]["data"][${i0}]["owner_name"]`, "string", e["owner_name"]) &&
                    evaluate(typeof e["pruned"] === "boolean", `${argumentName}["demos"]["data"][${i0}]["pruned"]`, "boolean", e["pruned"]) &&
                    evaluate(typeof e["file"] === "string", `${argumentName}["demos"]["data"][${i0}]["file"]`, "string", e["file"]) &&
                    evaluate(typeof e["extension"] === "string", `${argumentName}["demos"]["data"][${i0}]["extension"]`, "string", e["extension"])
                ), `${argumentName}["demos"]["data"]`, "import(\"./types/demos/demosData\").DemosData[]", typedObj["demos"]["data"]), `${argumentName}["demos"]`, "import(\"./types/demos/demos\").Demos", typedObj["demos"])
    )
}

export function isEtf2lMatch(obj: unknown, argumentName: string = "etf2lMatchG"): obj is Etf2lMatchG {
    const typedObj = obj as Etf2lMatchG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["results"] !== null &&
            typeof typedObj["results"] === "object" ||
            typeof typedObj["results"] === "function") &&
            evaluate(typeof typedObj["results"]["current_page"] === "number", `${argumentName}["results"]["current_page"]`, "number", typedObj["results"]["current_page"]) &&
            evaluate((typedObj["results"]["from"] === null ||
                typeof typedObj["results"]["from"] === "number"), `${argumentName}["results"]["from"]`, "number | null", typedObj["results"]["from"]) &&
            evaluate(typeof typedObj["results"]["last_page"] === "number", `${argumentName}["results"]["last_page"]`, "number", typedObj["results"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["results"]["links"]) &&
                typedObj["results"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["results"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["results"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["results"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["results"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["results"]["links"]) &&
            evaluate(typeof typedObj["results"]["path"] === "string", `${argumentName}["results"]["path"]`, "string", typedObj["results"]["path"]) &&
            evaluate(typeof typedObj["results"]["per_page"] === "number", `${argumentName}["results"]["per_page"]`, "number", typedObj["results"]["per_page"]) &&
            evaluate((typedObj["results"]["to"] === null ||
                typeof typedObj["results"]["to"] === "number"), `${argumentName}["results"]["to"]`, "number | null", typedObj["results"]["to"]) &&
            evaluate(typeof typedObj["results"]["total"] === "number", `${argumentName}["results"]["total"]`, "number", typedObj["results"]["total"]) &&
            (typedObj["results"] !== null &&
                typeof typedObj["results"] === "object" ||
                typeof typedObj["results"] === "function") &&
            evaluate(typeof typedObj["results"]["current_page"] === "number", `${argumentName}["results"]["current_page"]`, "number", typedObj["results"]["current_page"]) &&
            evaluate(typeof typedObj["results"]["first_page_url"] === "string", `${argumentName}["results"]["first_page_url"]`, "string", typedObj["results"]["first_page_url"]) &&
            evaluate((typedObj["results"]["from"] === null ||
                typeof typedObj["results"]["from"] === "number"), `${argumentName}["results"]["from"]`, "number | null", typedObj["results"]["from"]) &&
            evaluate(typeof typedObj["results"]["last_page"] === "number", `${argumentName}["results"]["last_page"]`, "number", typedObj["results"]["last_page"]) &&
            evaluate(typeof typedObj["results"]["last_page_url"] === "string", `${argumentName}["results"]["last_page_url"]`, "string", typedObj["results"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["results"]["links"]) &&
                typedObj["results"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["results"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["results"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["results"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["results"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["results"]["links"]) &&
            evaluate((typedObj["results"]["next_page_url"] === null ||
                typeof typedObj["results"]["next_page_url"] === "string"), `${argumentName}["results"]["next_page_url"]`, "string | null", typedObj["results"]["next_page_url"]) &&
            evaluate(typeof typedObj["results"]["path"] === "string", `${argumentName}["results"]["path"]`, "string", typedObj["results"]["path"]) &&
            evaluate(typeof typedObj["results"]["per_page"] === "number", `${argumentName}["results"]["per_page"]`, "number", typedObj["results"]["per_page"]) &&
            evaluate((typedObj["results"]["prev_page_url"] === null ||
                typeof typedObj["results"]["prev_page_url"] === "string"), `${argumentName}["results"]["prev_page_url"]`, "string | null", typedObj["results"]["prev_page_url"]) &&
            evaluate((typedObj["results"]["to"] === null ||
                typeof typedObj["results"]["to"] === "number"), `${argumentName}["results"]["to"]`, "number | null", typedObj["results"]["to"]) &&
            evaluate(typeof typedObj["results"]["total"] === "number", `${argumentName}["results"]["total"]`, "number", typedObj["results"]["total"]) &&
            (typedObj["results"] !== null &&
                typeof typedObj["results"] === "object" ||
                typeof typedObj["results"] === "function") &&
            evaluate(Array.isArray(typedObj["results"]["data"]) &&
                typedObj["results"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["clan1"] !== null &&
                        typeof e["clan1"] === "object" ||
                        typeof e["clan1"] === "function") &&
                        evaluate(typeof e["clan1"]["country"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["country"]`, "string", e["clan1"]["country"]) &&
                        evaluate(typeof e["clan1"]["drop"] === "boolean", `${argumentName}["results"]["data"][${i0}]["clan1"]["drop"]`, "boolean", e["clan1"]["drop"]) &&
                        evaluate(typeof e["clan1"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["clan1"]["id"]`, "number", e["clan1"]["id"]) &&
                        evaluate(typeof e["clan1"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["name"]`, "string", e["clan1"]["name"]) &&
                        evaluate((e["clan1"]["steam"] !== null &&
                            typeof e["clan1"]["steam"] === "object" ||
                            typeof e["clan1"]["steam"] === "function") &&
                            evaluate(typeof e["clan1"]["steam"]["avatar"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]["avatar"]`, "string", e["clan1"]["steam"]["avatar"]) &&
                            evaluate((e["clan1"]["steam"]["group"] === null ||
                                typeof e["clan1"]["steam"]["group"] === "string"), `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]["group"]`, "string | null", e["clan1"]["steam"]["group"]), `${argumentName}["results"]["data"][${i0}]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan1"]["steam"]) &&
                        evaluate(typeof e["clan1"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["clan1"]["url"]`, "string", e["clan1"]["url"]), `${argumentName}["results"]["data"][${i0}]["clan1"]`, "import(\"./types/common/clan\").Clan", e["clan1"]) &&
                    evaluate((e["clan2"] !== null &&
                        typeof e["clan2"] === "object" ||
                        typeof e["clan2"] === "function") &&
                        evaluate(typeof e["clan2"]["country"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["country"]`, "string", e["clan2"]["country"]) &&
                        evaluate(typeof e["clan2"]["drop"] === "boolean", `${argumentName}["results"]["data"][${i0}]["clan2"]["drop"]`, "boolean", e["clan2"]["drop"]) &&
                        evaluate(typeof e["clan2"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["clan2"]["id"]`, "number", e["clan2"]["id"]) &&
                        evaluate(typeof e["clan2"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["name"]`, "string", e["clan2"]["name"]) &&
                        evaluate((e["clan2"]["steam"] !== null &&
                            typeof e["clan2"]["steam"] === "object" ||
                            typeof e["clan2"]["steam"] === "function") &&
                            evaluate(typeof e["clan2"]["steam"]["avatar"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]["avatar"]`, "string", e["clan2"]["steam"]["avatar"]) &&
                            evaluate((e["clan2"]["steam"]["group"] === null ||
                                typeof e["clan2"]["steam"]["group"] === "string"), `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]["group"]`, "string | null", e["clan2"]["steam"]["group"]), `${argumentName}["results"]["data"][${i0}]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan2"]["steam"]) &&
                        evaluate(typeof e["clan2"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["clan2"]["url"]`, "string", e["clan2"]["url"]), `${argumentName}["results"]["data"][${i0}]["clan2"]`, "import(\"./types/common/clan\").Clan", e["clan2"]) &&
                    evaluate((e["competition"] !== null &&
                        typeof e["competition"] === "object" ||
                        typeof e["competition"] === "function") &&
                        evaluate(typeof e["competition"]["category"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["category"]`, "string", e["competition"]["category"]) &&
                        evaluate(typeof e["competition"]["id"] === "number", `${argumentName}["results"]["data"][${i0}]["competition"]["id"]`, "number", e["competition"]["id"]) &&
                        evaluate(typeof e["competition"]["name"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["name"]`, "string", e["competition"]["name"]) &&
                        evaluate(typeof e["competition"]["type"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["type"]`, "string", e["competition"]["type"]) &&
                        evaluate(typeof e["competition"]["url"] === "string", `${argumentName}["results"]["data"][${i0}]["competition"]["url"]`, "string", e["competition"]["url"]), `${argumentName}["results"]["data"][${i0}]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", e["competition"]) &&
                    evaluate((e["defaultwin"] === null ||
                        e["defaultwin"] === false ||
                        e["defaultwin"] === true), `${argumentName}["results"]["data"][${i0}]["defaultwin"]`, "boolean | null", e["defaultwin"]) &&
                    evaluate((e["division"] === null ||
                        (e["division"] !== null &&
                            typeof e["division"] === "object" ||
                            typeof e["division"] === "function") &&
                        evaluate((e["division"]["id"] === null ||
                            typeof e["division"]["id"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["id"]`, "number | null", e["division"]["id"]) &&
                        evaluate((e["division"]["name"] === null ||
                            typeof e["division"]["name"] === "string"), `${argumentName}["results"]["data"][${i0}]["division"]["name"]`, "string | null", e["division"]["name"]) &&
                        evaluate((e["division"]["skill_contrib"] === null ||
                            typeof e["division"]["skill_contrib"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["skill_contrib"]`, "number | null", e["division"]["skill_contrib"]) &&
                        evaluate((e["division"]["tier"] === null ||
                            typeof e["division"]["tier"] === "number"), `${argumentName}["results"]["data"][${i0}]["division"]["tier"]`, "number | null", e["division"]["tier"])), `${argumentName}["results"]["data"][${i0}]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision | null", e["division"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["results"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(Array.isArray(e["maps"]) &&
                        e["maps"].every((e: any) =>
                            typeof e === "string"
                        ), `${argumentName}["results"]["data"][${i0}]["maps"]`, "string[]", e["maps"]) &&
                    evaluate((e["r1"] === null ||
                        typeof e["r1"] === "number"), `${argumentName}["results"]["data"][${i0}]["r1"]`, "number | null", e["r1"]) &&
                    evaluate((e["r2"] === null ||
                        typeof e["r2"] === "number"), `${argumentName}["results"]["data"][${i0}]["r2"]`, "number | null", e["r2"]) &&
                    evaluate(typeof e["round"] === "string", `${argumentName}["results"]["data"][${i0}]["round"]`, "string", e["round"]) &&
                    evaluate((e["submitted"] === null ||
                        typeof e["submitted"] === "number"), `${argumentName}["results"]["data"][${i0}]["submitted"]`, "number | null", e["submitted"]) &&
                    evaluate((e["time"] === null ||
                        typeof e["time"] === "number"), `${argumentName}["results"]["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                    evaluate((e["urls"] !== null &&
                        typeof e["urls"] === "object" ||
                        typeof e["urls"] === "function") &&
                        evaluate(typeof e["urls"]["self"] === "string", `${argumentName}["results"]["data"][${i0}]["urls"]["self"]`, "string", e["urls"]["self"]) &&
                        evaluate(typeof e["urls"]["api"] === "string", `${argumentName}["results"]["data"][${i0}]["urls"]["api"]`, "string", e["urls"]["api"]), `${argumentName}["results"]["data"][${i0}]["urls"]`, "{ self: string; api: string; }", e["urls"]) &&
                    evaluate(typeof e["week"] === "number", `${argumentName}["results"]["data"][${i0}]["week"]`, "number", e["week"])
                ), `${argumentName}["results"]["data"]`, "import(\"./types/matches/matchData\").MatchData[]", typedObj["results"]["data"]), `${argumentName}["results"]`, "import(\"./types/common/multiPageSmall\").MultiPageSmall & { current_page: number; first_page_url: string; from: number | null; last_page: number; last_page_url: string; links: import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/common/link\").Link[]; next_page_url: string | null; path: string; per_page: number; prev_page_url: string | null; to: number | null; total: number; } & { data: import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/matches/matchData\").MatchData[]; }", typedObj["results"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lMatchDetails(obj: unknown, argumentName: string = "etf2lMatchDetailsG"): obj is Etf2lMatchDetailsG {
    const typedObj = obj as Etf2lMatchDetailsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["match"] !== null &&
            typeof typedObj["match"] === "object" ||
            typeof typedObj["match"] === "function") &&
            evaluate((typedObj["match"]["clan1"] !== null &&
                typeof typedObj["match"]["clan1"] === "object" ||
                typeof typedObj["match"]["clan1"] === "function") &&
                evaluate(typeof typedObj["match"]["clan1"]["country"] === "string", `${argumentName}["match"]["clan1"]["country"]`, "string", typedObj["match"]["clan1"]["country"]) &&
                evaluate(typeof typedObj["match"]["clan1"]["drop"] === "boolean", `${argumentName}["match"]["clan1"]["drop"]`, "boolean", typedObj["match"]["clan1"]["drop"]) &&
                evaluate(typeof typedObj["match"]["clan1"]["id"] === "number", `${argumentName}["match"]["clan1"]["id"]`, "number", typedObj["match"]["clan1"]["id"]) &&
                evaluate(typeof typedObj["match"]["clan1"]["name"] === "string", `${argumentName}["match"]["clan1"]["name"]`, "string", typedObj["match"]["clan1"]["name"]) &&
                evaluate((typedObj["match"]["clan1"]["steam"] !== null &&
                    typeof typedObj["match"]["clan1"]["steam"] === "object" ||
                    typeof typedObj["match"]["clan1"]["steam"] === "function") &&
                    evaluate(typeof typedObj["match"]["clan1"]["steam"]["avatar"] === "string", `${argumentName}["match"]["clan1"]["steam"]["avatar"]`, "string", typedObj["match"]["clan1"]["steam"]["avatar"]) &&
                    evaluate((typedObj["match"]["clan1"]["steam"]["group"] === null ||
                        typeof typedObj["match"]["clan1"]["steam"]["group"] === "string"), `${argumentName}["match"]["clan1"]["steam"]["group"]`, "string | null", typedObj["match"]["clan1"]["steam"]["group"]), `${argumentName}["match"]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", typedObj["match"]["clan1"]["steam"]) &&
                evaluate(typeof typedObj["match"]["clan1"]["url"] === "string", `${argumentName}["match"]["clan1"]["url"]`, "string", typedObj["match"]["clan1"]["url"]), `${argumentName}["match"]["clan1"]`, "import(\"./types/common/clan\").Clan", typedObj["match"]["clan1"]) &&
            evaluate((typedObj["match"]["clan2"] !== null &&
                typeof typedObj["match"]["clan2"] === "object" ||
                typeof typedObj["match"]["clan2"] === "function") &&
                evaluate(typeof typedObj["match"]["clan2"]["country"] === "string", `${argumentName}["match"]["clan2"]["country"]`, "string", typedObj["match"]["clan2"]["country"]) &&
                evaluate(typeof typedObj["match"]["clan2"]["drop"] === "boolean", `${argumentName}["match"]["clan2"]["drop"]`, "boolean", typedObj["match"]["clan2"]["drop"]) &&
                evaluate(typeof typedObj["match"]["clan2"]["id"] === "number", `${argumentName}["match"]["clan2"]["id"]`, "number", typedObj["match"]["clan2"]["id"]) &&
                evaluate(typeof typedObj["match"]["clan2"]["name"] === "string", `${argumentName}["match"]["clan2"]["name"]`, "string", typedObj["match"]["clan2"]["name"]) &&
                evaluate((typedObj["match"]["clan2"]["steam"] !== null &&
                    typeof typedObj["match"]["clan2"]["steam"] === "object" ||
                    typeof typedObj["match"]["clan2"]["steam"] === "function") &&
                    evaluate(typeof typedObj["match"]["clan2"]["steam"]["avatar"] === "string", `${argumentName}["match"]["clan2"]["steam"]["avatar"]`, "string", typedObj["match"]["clan2"]["steam"]["avatar"]) &&
                    evaluate((typedObj["match"]["clan2"]["steam"]["group"] === null ||
                        typeof typedObj["match"]["clan2"]["steam"]["group"] === "string"), `${argumentName}["match"]["clan2"]["steam"]["group"]`, "string | null", typedObj["match"]["clan2"]["steam"]["group"]), `${argumentName}["match"]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", typedObj["match"]["clan2"]["steam"]) &&
                evaluate(typeof typedObj["match"]["clan2"]["url"] === "string", `${argumentName}["match"]["clan2"]["url"]`, "string", typedObj["match"]["clan2"]["url"]), `${argumentName}["match"]["clan2"]`, "import(\"./types/common/clan\").Clan", typedObj["match"]["clan2"]) &&
            evaluate((typedObj["match"]["competition"] !== null &&
                typeof typedObj["match"]["competition"] === "object" ||
                typeof typedObj["match"]["competition"] === "function") &&
                evaluate(typeof typedObj["match"]["competition"]["category"] === "string", `${argumentName}["match"]["competition"]["category"]`, "string", typedObj["match"]["competition"]["category"]) &&
                evaluate(typeof typedObj["match"]["competition"]["id"] === "number", `${argumentName}["match"]["competition"]["id"]`, "number", typedObj["match"]["competition"]["id"]) &&
                evaluate(typeof typedObj["match"]["competition"]["name"] === "string", `${argumentName}["match"]["competition"]["name"]`, "string", typedObj["match"]["competition"]["name"]) &&
                evaluate(typeof typedObj["match"]["competition"]["type"] === "string", `${argumentName}["match"]["competition"]["type"]`, "string", typedObj["match"]["competition"]["type"]) &&
                evaluate(typeof typedObj["match"]["competition"]["url"] === "string", `${argumentName}["match"]["competition"]["url"]`, "string", typedObj["match"]["competition"]["url"]), `${argumentName}["match"]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", typedObj["match"]["competition"]) &&
            evaluate((typedObj["match"]["defaultwin"] === null ||
                typedObj["match"]["defaultwin"] === false ||
                typedObj["match"]["defaultwin"] === true), `${argumentName}["match"]["defaultwin"]`, "boolean | null", typedObj["match"]["defaultwin"]) &&
            evaluate((typedObj["match"]["division"] === null ||
                (typedObj["match"]["division"] !== null &&
                    typeof typedObj["match"]["division"] === "object" ||
                    typeof typedObj["match"]["division"] === "function") &&
                evaluate((typedObj["match"]["division"]["id"] === null ||
                    typeof typedObj["match"]["division"]["id"] === "number"), `${argumentName}["match"]["division"]["id"]`, "number | null", typedObj["match"]["division"]["id"]) &&
                evaluate((typedObj["match"]["division"]["name"] === null ||
                    typeof typedObj["match"]["division"]["name"] === "string"), `${argumentName}["match"]["division"]["name"]`, "string | null", typedObj["match"]["division"]["name"]) &&
                evaluate((typedObj["match"]["division"]["skill_contrib"] === null ||
                    typeof typedObj["match"]["division"]["skill_contrib"] === "number"), `${argumentName}["match"]["division"]["skill_contrib"]`, "number | null", typedObj["match"]["division"]["skill_contrib"]) &&
                evaluate((typedObj["match"]["division"]["tier"] === null ||
                    typeof typedObj["match"]["division"]["tier"] === "number"), `${argumentName}["match"]["division"]["tier"]`, "number | null", typedObj["match"]["division"]["tier"])), `${argumentName}["match"]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision | null", typedObj["match"]["division"]) &&
            evaluate(typeof typedObj["match"]["id"] === "number", `${argumentName}["match"]["id"]`, "number", typedObj["match"]["id"]) &&
            evaluate(Array.isArray(typedObj["match"]["maps"]) &&
                typedObj["match"]["maps"].every((e: any) =>
                    typeof e === "string"
                ), `${argumentName}["match"]["maps"]`, "string[]", typedObj["match"]["maps"]) &&
            evaluate(typeof typedObj["match"]["r1"] === "number", `${argumentName}["match"]["r1"]`, "number", typedObj["match"]["r1"]) &&
            evaluate(typeof typedObj["match"]["r2"] === "number", `${argumentName}["match"]["r2"]`, "number", typedObj["match"]["r2"]) &&
            evaluate(typeof typedObj["match"]["round"] === "string", `${argumentName}["match"]["round"]`, "string", typedObj["match"]["round"]) &&
            evaluate((typedObj["match"]["time"] === null ||
                typeof typedObj["match"]["time"] === "number"), `${argumentName}["match"]["time"]`, "number | null", typedObj["match"]["time"]) &&
            evaluate(typeof typedObj["match"]["submitted"] === "number", `${argumentName}["match"]["submitted"]`, "number", typedObj["match"]["submitted"]) &&
            evaluate(typeof typedObj["match"]["week"] === "number", `${argumentName}["match"]["week"]`, "number", typedObj["match"]["week"]) &&
            evaluate((typedObj["match"]["urls"] !== null &&
                typeof typedObj["match"]["urls"] === "object" ||
                typeof typedObj["match"]["urls"] === "function") &&
                evaluate(typeof typedObj["match"]["urls"]["self"] === "string", `${argumentName}["match"]["urls"]["self"]`, "string", typedObj["match"]["urls"]["self"]) &&
                evaluate(typeof typedObj["match"]["urls"]["api"] === "string", `${argumentName}["match"]["urls"]["api"]`, "string", typedObj["match"]["urls"]["api"]), `${argumentName}["match"]["urls"]`, "{ self: string; api: string; }", typedObj["match"]["urls"]) &&
            evaluate(Array.isArray(typedObj["match"]["players"]) &&
                typedObj["match"]["players"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["country"] === "string", `${argumentName}["match"]["players"][${i0}]["country"]`, "string", e["country"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["match"]["players"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["match"]["players"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["team_id"] === "number", `${argumentName}["match"]["players"][${i0}]["team_id"]`, "number", e["team_id"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["match"]["players"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate(typeof e["steam"]["id"] === "string", `${argumentName}["match"]["players"][${i0}]["steam"]["id"]`, "string", e["steam"]["id"]) &&
                        evaluate(typeof e["steam"]["id3"] === "string", `${argumentName}["match"]["players"][${i0}]["steam"]["id3"]`, "string", e["steam"]["id3"]) &&
                        evaluate(typeof e["steam"]["id64"] === "string", `${argumentName}["match"]["players"][${i0}]["steam"]["id64"]`, "string", e["steam"]["id64"]), `${argumentName}["match"]["players"][${i0}]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["steam"])
                ), `${argumentName}["match"]["players"]`, "import(\"./types/matches/matchPlayer\").MatchPlayer[]", typedObj["match"]["players"]) &&
            evaluate(typeof typedObj["match"]["bye_week"] === "boolean", `${argumentName}["match"]["bye_week"]`, "boolean", typedObj["match"]["bye_week"]) &&
            evaluate(Array.isArray(typedObj["match"]["demos"]), `${argumentName}["match"]["demos"]`, "[]", typedObj["match"]["demos"]) &&
            evaluate(Array.isArray(typedObj["match"]["map_results"]) &&
                typedObj["match"]["map_results"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["match_order"] === "number", `${argumentName}["match"]["map_results"][${i0}]["match_order"]`, "number", e["match_order"]) &&
                    evaluate(typeof e["clan1"] === "number", `${argumentName}["match"]["map_results"][${i0}]["clan1"]`, "number", e["clan1"]) &&
                    evaluate(typeof e["clan2"] === "number", `${argumentName}["match"]["map_results"][${i0}]["clan2"]`, "number", e["clan2"]) &&
                    evaluate(typeof e["map"] === "string", `${argumentName}["match"]["map_results"][${i0}]["map"]`, "string", e["map"]) &&
                    evaluate(typeof e["golden_cap"] === "boolean", `${argumentName}["match"]["map_results"][${i0}]["golden_cap"]`, "boolean", e["golden_cap"])
                ), `${argumentName}["match"]["map_results"]`, "{ match_order: number; clan1: number; clan2: number; map: string; golden_cap: boolean; }[]", typedObj["match"]["map_results"]), `${argumentName}["match"]`, "import(\"./types/matches/matchDataDetails\").MatchDataDetails", typedObj["match"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lPlayer(obj: unknown, argumentName: string = "etf2lPlayerG"): obj is Etf2lPlayerG {
    const typedObj = obj as Etf2lPlayerG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["player"] !== null &&
            typeof typedObj["player"] === "object" ||
            typeof typedObj["player"] === "function") &&
            evaluate((typedObj["player"]["bans"] === null ||
                (typedObj["player"]["bans"] !== null &&
                    typeof typedObj["player"]["bans"] === "object" ||
                    typeof typedObj["player"]["bans"] === "function") &&
                evaluate(typeof typedObj["player"]["bans"]["start"] === "number", `${argumentName}["player"]["bans"]["start"]`, "number", typedObj["player"]["bans"]["start"]) &&
                evaluate(typeof typedObj["player"]["bans"]["end"] === "number", `${argumentName}["player"]["bans"]["end"]`, "number", typedObj["player"]["bans"]["end"]) &&
                evaluate(typeof typedObj["player"]["bans"]["reason"] === "string", `${argumentName}["player"]["bans"]["reason"]`, "string", typedObj["player"]["bans"]["reason"])), `${argumentName}["player"]["bans"]`, "import(\"./types/common/ban\").SmallBan | null", typedObj["player"]["bans"]) &&
            evaluate(Array.isArray(typedObj["player"]["classes"]) &&
                typedObj["player"]["classes"].every((e: any) =>
                (e === Classes.Scout ||
                    e === Classes.Soldier ||
                    e === Classes.Pyro ||
                    e === Classes.Demoman ||
                    e === Classes.Heavy ||
                    e === Classes.Engineer ||
                    e === Classes.Medic ||
                    e === Classes.Sniper ||
                    e === Classes.Spy)
                ), `${argumentName}["player"]["classes"]`, "import(\"./types/enums/classes\").Classes[]", typedObj["player"]["classes"]) &&
            evaluate(typeof typedObj["player"]["country"] === "string", `${argumentName}["player"]["country"]`, "string", typedObj["player"]["country"]) &&
            evaluate(typeof typedObj["player"]["id"] === "number", `${argumentName}["player"]["id"]`, "number", typedObj["player"]["id"]) &&
            evaluate(typeof typedObj["player"]["name"] === "string", `${argumentName}["player"]["name"]`, "string", typedObj["player"]["name"]) &&
            evaluate((typedObj["player"]["steam"] !== null &&
                typeof typedObj["player"]["steam"] === "object" ||
                typeof typedObj["player"]["steam"] === "function") &&
                evaluate(typeof typedObj["player"]["steam"]["avatar"] === "string", `${argumentName}["player"]["steam"]["avatar"]`, "string", typedObj["player"]["steam"]["avatar"]) &&
                evaluate(typeof typedObj["player"]["steam"]["id"] === "string", `${argumentName}["player"]["steam"]["id"]`, "string", typedObj["player"]["steam"]["id"]) &&
                evaluate(typeof typedObj["player"]["steam"]["id3"] === "string", `${argumentName}["player"]["steam"]["id3"]`, "string", typedObj["player"]["steam"]["id3"]) &&
                evaluate(typeof typedObj["player"]["steam"]["id64"] === "string", `${argumentName}["player"]["steam"]["id64"]`, "string", typedObj["player"]["steam"]["id64"]), `${argumentName}["player"]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", typedObj["player"]["steam"]) &&
            evaluate(Array.isArray(typedObj["player"]["teams"]) &&
                typedObj["player"]["teams"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["competitions"] !== null &&
                        typeof e["competitions"] === "object" ||
                        typeof e["competitions"] === "function") &&
                        Object.entries<any>(e["competitions"])
                            .every(([key, value]) => (evaluate((value !== null &&
                                typeof value === "object" ||
                                typeof value === "function") &&
                                evaluate(typeof value["category"] === "string", `${argumentName}["player"]["teams"][${i0}]["competitions"] value["category"]`, "string", value["category"]) &&
                                evaluate(typeof value["competition"] === "string", `${argumentName}["player"]["teams"][${i0}]["competitions"] value["competition"]`, "string", value["competition"]) &&
                                evaluate((value["division"] !== null &&
                                    typeof value["division"] === "object" ||
                                    typeof value["division"] === "function") &&
                                    evaluate((value["division"]["name"] === null ||
                                        typeof value["division"]["name"] === "string"), `${argumentName}["player"]["teams"][${i0}]["competitions"] value["division"]["name"]`, "string | null", value["division"]["name"]) &&
                                    evaluate((value["division"]["skill_contrib"] === null ||
                                        typeof value["division"]["skill_contrib"] === "number"), `${argumentName}["player"]["teams"][${i0}]["competitions"] value["division"]["skill_contrib"]`, "number | null", value["division"]["skill_contrib"]) &&
                                    evaluate((value["division"]["tier"] === null ||
                                        typeof value["division"]["tier"] === "number"), `${argumentName}["player"]["teams"][${i0}]["competitions"] value["division"]["tier"]`, "number | null", value["division"]["tier"]), `${argumentName}["player"]["teams"][${i0}]["competitions"] value["division"]`, "Omit<import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision, \"id\">", value["division"]) &&
                                evaluate(typeof value["url"] === "string", `${argumentName}["player"]["teams"][${i0}]["competitions"] value["url"]`, "string", value["url"]), `${argumentName}["player"]["teams"][${i0}]["competitions"]["${key.toString().replace(/"/g, '\\"')}"]`, "{ category: string; competition: string; division: Omit<import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/competition/competitionResultsDivision\").CompetitionResultsDivision, \"id\">; url: string; }", value) &&
                                evaluate(typeof key === "string", `${argumentName}["player"]["teams"][${i0}]["competitions"] (key: "${key.toString().replace(/"/g, '\\"')}")`, "string", key))), `${argumentName}["player"]["teams"][${i0}]["competitions"]`, "import(\"./types/team/teamCompetition\").TeamCompetition", e["competitions"]) &&
                    evaluate(typeof e["country"] === "string", `${argumentName}["player"]["teams"][${i0}]["country"]`, "string", e["country"]) &&
                    evaluate(typeof e["homepage"] === "string", `${argumentName}["player"]["teams"][${i0}]["homepage"]`, "string", e["homepage"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["player"]["teams"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate((e["irc"] !== null &&
                        typeof e["irc"] === "object" ||
                        typeof e["irc"] === "function") &&
                        evaluate((e["irc"]["channel"] === null ||
                            typeof e["irc"]["channel"] === "string"), `${argumentName}["player"]["teams"][${i0}]["irc"]["channel"]`, "string | null", e["irc"]["channel"]) &&
                        evaluate((e["irc"]["network"] === null ||
                            typeof e["irc"]["network"] === "string"), `${argumentName}["player"]["teams"][${i0}]["irc"]["network"]`, "string | null", e["irc"]["network"]), `${argumentName}["player"]["teams"][${i0}]["irc"]`, "{ channel: string | null; network: string | null; }", e["irc"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["player"]["teams"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["server"] === "string", `${argumentName}["player"]["teams"][${i0}]["server"]`, "string", e["server"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["player"]["teams"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate((e["steam"]["steam_group"] === null ||
                            typeof e["steam"]["steam_group"] === "string"), `${argumentName}["player"]["teams"][${i0}]["steam"]["steam_group"]`, "string | null", e["steam"]["steam_group"]), `${argumentName}["player"]["teams"][${i0}]["steam"]`, "{ avatar: string; steam_group: string | null; }", e["steam"]) &&
                    evaluate(typeof e["tag"] === "string", `${argumentName}["player"]["teams"][${i0}]["tag"]`, "string", e["tag"]) &&
                    evaluate(typeof e["type"] === "string", `${argumentName}["player"]["teams"][${i0}]["type"]`, "string", e["type"]) &&
                    evaluate((e["urls"] !== null &&
                        typeof e["urls"] === "object" ||
                        typeof e["urls"] === "function") &&
                        evaluate(typeof e["urls"]["matches"] === "string", `${argumentName}["player"]["teams"][${i0}]["urls"]["matches"]`, "string", e["urls"]["matches"]) &&
                        evaluate(typeof e["urls"]["results"] === "string", `${argumentName}["player"]["teams"][${i0}]["urls"]["results"]`, "string", e["urls"]["results"]) &&
                        evaluate(typeof e["urls"]["self"] === "string", `${argumentName}["player"]["teams"][${i0}]["urls"]["self"]`, "string", e["urls"]["self"]) &&
                        evaluate(typeof e["urls"]["transfers"] === "string", `${argumentName}["player"]["teams"][${i0}]["urls"]["transfers"]`, "string", e["urls"]["transfers"]), `${argumentName}["player"]["teams"][${i0}]["urls"]`, "{ matches: string; results: string; self: string; transfers: string; }", e["urls"])
                ), `${argumentName}["player"]["teams"]`, "import(\"./types/player/playerTeam\").PlayerTeam[]", typedObj["player"]["teams"]) &&
            evaluate(typeof typedObj["player"]["title"] === "string", `${argumentName}["player"]["title"]`, "string", typedObj["player"]["title"]) &&
            evaluate((typedObj["player"]["urls"] !== null &&
                typeof typedObj["player"]["urls"] === "object" ||
                typeof typedObj["player"]["urls"] === "function") &&
                evaluate(typeof typedObj["player"]["urls"]["results"] === "string", `${argumentName}["player"]["urls"]["results"]`, "string", typedObj["player"]["urls"]["results"]) &&
                evaluate(typeof typedObj["player"]["urls"]["self"] === "string", `${argumentName}["player"]["urls"]["self"]`, "string", typedObj["player"]["urls"]["self"]) &&
                evaluate(typeof typedObj["player"]["urls"]["transfers"] === "string", `${argumentName}["player"]["urls"]["transfers"]`, "string", typedObj["player"]["urls"]["transfers"]), `${argumentName}["player"]["urls"]`, "{ results: string; self: string; transfers: string; }", typedObj["player"]["urls"]), `${argumentName}["player"]`, "import(\"./types/player/playerData\").PlayerData", typedObj["player"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lPlayerResults(obj: unknown, argumentName: string = "etf2lPlayerResultsG"): obj is Etf2lPlayerResultsG {
    const typedObj = obj as Etf2lPlayerResultsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["current_page"] === "number", `${argumentName}["current_page"]`, "number", typedObj["current_page"]) &&
        evaluate((typedObj["from"] === null ||
            typeof typedObj["from"] === "number"), `${argumentName}["from"]`, "number | null", typedObj["from"]) &&
        evaluate(typeof typedObj["last_page"] === "number", `${argumentName}["last_page"]`, "number", typedObj["last_page"]) &&
        evaluate(Array.isArray(typedObj["links"]) &&
            typedObj["links"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["url"] === null ||
                    typeof e["url"] === "string"), `${argumentName}["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                evaluate(typeof e["label"] === "string", `${argumentName}["links"][${i0}]["label"]`, "string", e["label"]) &&
                evaluate(typeof e["active"] === "boolean", `${argumentName}["links"][${i0}]["active"]`, "boolean", e["active"])
            ), `${argumentName}["links"]`, "import(\"./types/common/link\").Link[]", typedObj["links"]) &&
        evaluate(typeof typedObj["path"] === "string", `${argumentName}["path"]`, "string", typedObj["path"]) &&
        evaluate(typeof typedObj["per_page"] === "number", `${argumentName}["per_page"]`, "number", typedObj["per_page"]) &&
        evaluate((typedObj["to"] === null ||
            typeof typedObj["to"] === "number"), `${argumentName}["to"]`, "number | null", typedObj["to"]) &&
        evaluate(typeof typedObj["total"] === "number", `${argumentName}["total"]`, "number", typedObj["total"]) &&
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["current_page"] === "number", `${argumentName}["current_page"]`, "number", typedObj["current_page"]) &&
        evaluate(typeof typedObj["first_page_url"] === "string", `${argumentName}["first_page_url"]`, "string", typedObj["first_page_url"]) &&
        evaluate((typedObj["from"] === null ||
            typeof typedObj["from"] === "number"), `${argumentName}["from"]`, "number | null", typedObj["from"]) &&
        evaluate(typeof typedObj["last_page"] === "number", `${argumentName}["last_page"]`, "number", typedObj["last_page"]) &&
        evaluate(typeof typedObj["last_page_url"] === "string", `${argumentName}["last_page_url"]`, "string", typedObj["last_page_url"]) &&
        evaluate(Array.isArray(typedObj["links"]) &&
            typedObj["links"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["url"] === null ||
                    typeof e["url"] === "string"), `${argumentName}["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                evaluate(typeof e["label"] === "string", `${argumentName}["links"][${i0}]["label"]`, "string", e["label"]) &&
                evaluate(typeof e["active"] === "boolean", `${argumentName}["links"][${i0}]["active"]`, "boolean", e["active"])
            ), `${argumentName}["links"]`, "import(\"./types/common/link\").Link[]", typedObj["links"]) &&
        evaluate((typedObj["next_page_url"] === null ||
            typeof typedObj["next_page_url"] === "string"), `${argumentName}["next_page_url"]`, "string | null", typedObj["next_page_url"]) &&
        evaluate(typeof typedObj["path"] === "string", `${argumentName}["path"]`, "string", typedObj["path"]) &&
        evaluate(typeof typedObj["per_page"] === "number", `${argumentName}["per_page"]`, "number", typedObj["per_page"]) &&
        evaluate((typedObj["prev_page_url"] === null ||
            typeof typedObj["prev_page_url"] === "string"), `${argumentName}["prev_page_url"]`, "string | null", typedObj["prev_page_url"]) &&
        evaluate((typedObj["to"] === null ||
            typeof typedObj["to"] === "number"), `${argumentName}["to"]`, "number | null", typedObj["to"]) &&
        evaluate(typeof typedObj["total"] === "number", `${argumentName}["total"]`, "number", typedObj["total"]) &&
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(Array.isArray(typedObj["data"]) &&
            typedObj["data"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["clan1"] !== null &&
                    typeof e["clan1"] === "object" ||
                    typeof e["clan1"] === "function") &&
                    evaluate(typeof e["clan1"]["country"] === "string", `${argumentName}["data"][${i0}]["clan1"]["country"]`, "string", e["clan1"]["country"]) &&
                    evaluate(typeof e["clan1"]["drop"] === "boolean", `${argumentName}["data"][${i0}]["clan1"]["drop"]`, "boolean", e["clan1"]["drop"]) &&
                    evaluate(typeof e["clan1"]["id"] === "number", `${argumentName}["data"][${i0}]["clan1"]["id"]`, "number", e["clan1"]["id"]) &&
                    evaluate(typeof e["clan1"]["name"] === "string", `${argumentName}["data"][${i0}]["clan1"]["name"]`, "string", e["clan1"]["name"]) &&
                    evaluate((e["clan1"]["steam"] !== null &&
                        typeof e["clan1"]["steam"] === "object" ||
                        typeof e["clan1"]["steam"] === "function") &&
                        evaluate(typeof e["clan1"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["clan1"]["steam"]["avatar"]`, "string", e["clan1"]["steam"]["avatar"]) &&
                        evaluate((e["clan1"]["steam"]["group"] === null ||
                            typeof e["clan1"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["clan1"]["steam"]["group"]`, "string | null", e["clan1"]["steam"]["group"]), `${argumentName}["data"][${i0}]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan1"]["steam"]) &&
                    evaluate(typeof e["clan1"]["url"] === "string", `${argumentName}["data"][${i0}]["clan1"]["url"]`, "string", e["clan1"]["url"]) &&
                    (e["clan1"] !== null &&
                        typeof e["clan1"] === "object" ||
                        typeof e["clan1"] === "function") &&
                    evaluate(typeof e["clan1"]["was_in_team"] === "boolean", `${argumentName}["data"][${i0}]["clan1"]["was_in_team"]`, "boolean", e["clan1"]["was_in_team"]), `${argumentName}["data"][${i0}]["clan1"]`, "import(\"./types/player/playerResultClan\").PlayerResultClan", e["clan1"]) &&
                evaluate((e["clan2"] !== null &&
                    typeof e["clan2"] === "object" ||
                    typeof e["clan2"] === "function") &&
                    evaluate(typeof e["clan2"]["country"] === "string", `${argumentName}["data"][${i0}]["clan2"]["country"]`, "string", e["clan2"]["country"]) &&
                    evaluate(typeof e["clan2"]["drop"] === "boolean", `${argumentName}["data"][${i0}]["clan2"]["drop"]`, "boolean", e["clan2"]["drop"]) &&
                    evaluate(typeof e["clan2"]["id"] === "number", `${argumentName}["data"][${i0}]["clan2"]["id"]`, "number", e["clan2"]["id"]) &&
                    evaluate(typeof e["clan2"]["name"] === "string", `${argumentName}["data"][${i0}]["clan2"]["name"]`, "string", e["clan2"]["name"]) &&
                    evaluate((e["clan2"]["steam"] !== null &&
                        typeof e["clan2"]["steam"] === "object" ||
                        typeof e["clan2"]["steam"] === "function") &&
                        evaluate(typeof e["clan2"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["clan2"]["steam"]["avatar"]`, "string", e["clan2"]["steam"]["avatar"]) &&
                        evaluate((e["clan2"]["steam"]["group"] === null ||
                            typeof e["clan2"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["clan2"]["steam"]["group"]`, "string | null", e["clan2"]["steam"]["group"]), `${argumentName}["data"][${i0}]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan2"]["steam"]) &&
                    evaluate(typeof e["clan2"]["url"] === "string", `${argumentName}["data"][${i0}]["clan2"]["url"]`, "string", e["clan2"]["url"]) &&
                    (e["clan2"] !== null &&
                        typeof e["clan2"] === "object" ||
                        typeof e["clan2"] === "function") &&
                    evaluate(typeof e["clan2"]["was_in_team"] === "boolean", `${argumentName}["data"][${i0}]["clan2"]["was_in_team"]`, "boolean", e["clan2"]["was_in_team"]), `${argumentName}["data"][${i0}]["clan2"]`, "import(\"./types/player/playerResultClan\").PlayerResultClan", e["clan2"]) &&
                evaluate((e["competition"] !== null &&
                    typeof e["competition"] === "object" ||
                    typeof e["competition"] === "function") &&
                    evaluate(typeof e["competition"]["category"] === "string", `${argumentName}["data"][${i0}]["competition"]["category"]`, "string", e["competition"]["category"]) &&
                    evaluate(typeof e["competition"]["id"] === "number", `${argumentName}["data"][${i0}]["competition"]["id"]`, "number", e["competition"]["id"]) &&
                    evaluate(typeof e["competition"]["name"] === "string", `${argumentName}["data"][${i0}]["competition"]["name"]`, "string", e["competition"]["name"]) &&
                    evaluate(typeof e["competition"]["type"] === "string", `${argumentName}["data"][${i0}]["competition"]["type"]`, "string", e["competition"]["type"]) &&
                    evaluate(typeof e["competition"]["url"] === "string", `${argumentName}["data"][${i0}]["competition"]["url"]`, "string", e["competition"]["url"]), `${argumentName}["data"][${i0}]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", e["competition"]) &&
                evaluate((e["defaultwin"] === null ||
                    e["defaultwin"] === false ||
                    e["defaultwin"] === true), `${argumentName}["data"][${i0}]["defaultwin"]`, "boolean | null", e["defaultwin"]) &&
                evaluate((e["division"] === null ||
                    (e["division"] !== null &&
                        typeof e["division"] === "object" ||
                        typeof e["division"] === "function") &&
                    evaluate((e["division"]["id"] === null ||
                        typeof e["division"]["id"] === "number"), `${argumentName}["data"][${i0}]["division"]["id"]`, "number | null", e["division"]["id"]) &&
                    evaluate((e["division"]["name"] === null ||
                        typeof e["division"]["name"] === "string"), `${argumentName}["data"][${i0}]["division"]["name"]`, "string | null", e["division"]["name"]) &&
                    evaluate((e["division"]["skill_contrib"] === null ||
                        typeof e["division"]["skill_contrib"] === "number"), `${argumentName}["data"][${i0}]["division"]["skill_contrib"]`, "number | null", e["division"]["skill_contrib"]) &&
                    evaluate((e["division"]["tier"] === null ||
                        typeof e["division"]["tier"] === "number"), `${argumentName}["data"][${i0}]["division"]["tier"]`, "number | null", e["division"]["tier"])), `${argumentName}["data"][${i0}]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision | null", e["division"]) &&
                evaluate(typeof e["result"] === "number", `${argumentName}["data"][${i0}]["result"]`, "number", e["result"]) &&
                evaluate(Array.isArray(e["maps"]) &&
                    e["maps"].every((e: any) =>
                        typeof e === "string"
                    ), `${argumentName}["data"][${i0}]["maps"]`, "string[]", e["maps"]) &&
                evaluate(typeof e["merced"] === "boolean", `${argumentName}["data"][${i0}]["merced"]`, "boolean", e["merced"]) &&
                evaluate(typeof e["r1"] === "number", `${argumentName}["data"][${i0}]["r1"]`, "number", e["r1"]) &&
                evaluate(typeof e["r2"] === "number", `${argumentName}["data"][${i0}]["r2"]`, "number", e["r2"]) &&
                evaluate(typeof e["round"] === "string", `${argumentName}["data"][${i0}]["round"]`, "string", e["round"]) &&
                evaluate((e["time"] === null ||
                    typeof e["time"] === "number"), `${argumentName}["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                evaluate(typeof e["week"] === "number", `${argumentName}["data"][${i0}]["week"]`, "number", e["week"])
            ), `${argumentName}["data"]`, "import(\"./types/player/playerResultData\").PlayerResultData[]", typedObj["data"])
    )
}

export function isEtf2lPlayerTransfers(obj: unknown, argumentName: string = "etf2lPlayerTransfersG"): obj is Etf2lPlayerTransfersG {
    const typedObj = obj as Etf2lPlayerTransfersG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(Array.isArray(typedObj["data"]) &&
            typedObj["data"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["by"] !== null &&
                    typeof e["by"] === "object" ||
                    typeof e["by"] === "function") &&
                    evaluate(typeof e["by"]["country"] === "string", `${argumentName}["data"][${i0}]["by"]["country"]`, "string", e["by"]["country"]) &&
                    evaluate(typeof e["by"]["id"] === "number", `${argumentName}["data"][${i0}]["by"]["id"]`, "number", e["by"]["id"]) &&
                    evaluate(typeof e["by"]["name"] === "string", `${argumentName}["data"][${i0}]["by"]["name"]`, "string", e["by"]["name"]) &&
                    evaluate((e["by"]["steam"] !== null &&
                        typeof e["by"]["steam"] === "object" ||
                        typeof e["by"]["steam"] === "function") &&
                        evaluate(typeof e["by"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["avatar"]`, "string", e["by"]["steam"]["avatar"]) &&
                        evaluate(typeof e["by"]["steam"]["id"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id"]`, "string", e["by"]["steam"]["id"]) &&
                        evaluate(typeof e["by"]["steam"]["id3"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id3"]`, "string", e["by"]["steam"]["id3"]) &&
                        evaluate(typeof e["by"]["steam"]["id64"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id64"]`, "string", e["by"]["steam"]["id64"]), `${argumentName}["data"][${i0}]["by"]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["by"]["steam"]) &&
                    evaluate(typeof e["by"]["url"] === "string", `${argumentName}["data"][${i0}]["by"]["url"]`, "string", e["by"]["url"]), `${argumentName}["data"][${i0}]["by"]`, "import(\"./types/player/player\").Player", e["by"]) &&
                evaluate((e["team"] !== null &&
                    typeof e["team"] === "object" ||
                    typeof e["team"] === "function") &&
                    evaluate(typeof e["team"]["id"] === "number", `${argumentName}["data"][${i0}]["team"]["id"]`, "number", e["team"]["id"]) &&
                    evaluate(typeof e["team"]["name"] === "string", `${argumentName}["data"][${i0}]["team"]["name"]`, "string", e["team"]["name"]) &&
                    evaluate((e["team"]["steam"] !== null &&
                        typeof e["team"]["steam"] === "object" ||
                        typeof e["team"]["steam"] === "function") &&
                        evaluate(typeof e["team"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["team"]["steam"]["avatar"]`, "string", e["team"]["steam"]["avatar"]) &&
                        evaluate((e["team"]["steam"]["group"] === null ||
                            typeof e["team"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["team"]["steam"]["group"]`, "string | null", e["team"]["steam"]["group"]), `${argumentName}["data"][${i0}]["team"]["steam"]`, "{ avatar: string; group: string | null; }", e["team"]["steam"]) &&
                    evaluate(typeof e["team"]["type"] === "string", `${argumentName}["data"][${i0}]["team"]["type"]`, "string", e["team"]["type"]) &&
                    evaluate(typeof e["team"]["url"] === "string", `${argumentName}["data"][${i0}]["team"]["url"]`, "string", e["team"]["url"]), `${argumentName}["data"][${i0}]["team"]`, "import(\"./types/player/playerTransferTeam\").PlayerTransferTeam", e["team"]) &&
                evaluate((e["time"] === null ||
                    typeof e["time"] === "number"), `${argumentName}["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                evaluate((e["type"] === "left" ||
                    e["type"] === "joined"), `${argumentName}["data"][${i0}]["type"]`, "\"left\" | \"joined\"", e["type"])
            ), `${argumentName}["data"]`, "import(\"./types/player/playerTransferData\").PlayerTransferData[]", typedObj["data"]) &&
        evaluate((typedObj["links"] !== null &&
            typeof typedObj["links"] === "object" ||
            typeof typedObj["links"] === "function") &&
            evaluate(typeof typedObj["links"]["first"] === "string", `${argumentName}["links"]["first"]`, "string", typedObj["links"]["first"]) &&
            evaluate(typeof typedObj["links"]["last"] === "string", `${argumentName}["links"]["last"]`, "string", typedObj["links"]["last"]) &&
            evaluate((typedObj["links"]["prev"] === null ||
                typeof typedObj["links"]["prev"] === "string"), `${argumentName}["links"]["prev"]`, "string | null", typedObj["links"]["prev"]) &&
            evaluate((typedObj["links"]["next"] === null ||
                typeof typedObj["links"]["next"] === "string"), `${argumentName}["links"]["next"]`, "string | null", typedObj["links"]["next"]), `${argumentName}["links"]`, "{ first: string; last: string; prev: string | null; next: string | null; }", typedObj["links"]) &&
        evaluate((typedObj["meta"] !== null &&
            typeof typedObj["meta"] === "object" ||
            typeof typedObj["meta"] === "function") &&
            evaluate(typeof typedObj["meta"]["current_page"] === "number", `${argumentName}["meta"]["current_page"]`, "number", typedObj["meta"]["current_page"]) &&
            evaluate((typedObj["meta"]["from"] === null ||
                typeof typedObj["meta"]["from"] === "number"), `${argumentName}["meta"]["from"]`, "number | null", typedObj["meta"]["from"]) &&
            evaluate(typeof typedObj["meta"]["last_page"] === "number", `${argumentName}["meta"]["last_page"]`, "number", typedObj["meta"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["meta"]["links"]) &&
                typedObj["meta"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["meta"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["meta"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["meta"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["meta"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["meta"]["links"]) &&
            evaluate(typeof typedObj["meta"]["path"] === "string", `${argumentName}["meta"]["path"]`, "string", typedObj["meta"]["path"]) &&
            evaluate(typeof typedObj["meta"]["per_page"] === "number", `${argumentName}["meta"]["per_page"]`, "number", typedObj["meta"]["per_page"]) &&
            evaluate((typedObj["meta"]["to"] === null ||
                typeof typedObj["meta"]["to"] === "number"), `${argumentName}["meta"]["to"]`, "number | null", typedObj["meta"]["to"]) &&
            evaluate(typeof typedObj["meta"]["total"] === "number", `${argumentName}["meta"]["total"]`, "number", typedObj["meta"]["total"]), `${argumentName}["meta"]`, "import(\"./types/common/multiPageSmall\").MultiPageSmall", typedObj["meta"])
    )
}

export function isEtf2lRecruitmentPlayers(obj: unknown, argumentName: string = "etf2lRecruitmentPlayersG"): obj is Etf2lRecruitmentPlayersG {
    const typedObj = obj as Etf2lRecruitmentPlayersG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["recruitment"] !== null &&
            typeof typedObj["recruitment"] === "object" ||
            typeof typedObj["recruitment"] === "function") &&
            evaluate(typeof typedObj["recruitment"]["current_page"] === "number", `${argumentName}["recruitment"]["current_page"]`, "number", typedObj["recruitment"]["current_page"]) &&
            evaluate((typedObj["recruitment"]["from"] === null ||
                typeof typedObj["recruitment"]["from"] === "number"), `${argumentName}["recruitment"]["from"]`, "number | null", typedObj["recruitment"]["from"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page"] === "number", `${argumentName}["recruitment"]["last_page"]`, "number", typedObj["recruitment"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["recruitment"]["links"]) &&
                typedObj["recruitment"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["recruitment"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["recruitment"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["recruitment"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["recruitment"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["recruitment"]["links"]) &&
            evaluate(typeof typedObj["recruitment"]["path"] === "string", `${argumentName}["recruitment"]["path"]`, "string", typedObj["recruitment"]["path"]) &&
            evaluate(typeof typedObj["recruitment"]["per_page"] === "number", `${argumentName}["recruitment"]["per_page"]`, "number", typedObj["recruitment"]["per_page"]) &&
            evaluate((typedObj["recruitment"]["to"] === null ||
                typeof typedObj["recruitment"]["to"] === "number"), `${argumentName}["recruitment"]["to"]`, "number | null", typedObj["recruitment"]["to"]) &&
            evaluate(typeof typedObj["recruitment"]["total"] === "number", `${argumentName}["recruitment"]["total"]`, "number", typedObj["recruitment"]["total"]) &&
            (typedObj["recruitment"] !== null &&
                typeof typedObj["recruitment"] === "object" ||
                typeof typedObj["recruitment"] === "function") &&
            evaluate(typeof typedObj["recruitment"]["current_page"] === "number", `${argumentName}["recruitment"]["current_page"]`, "number", typedObj["recruitment"]["current_page"]) &&
            evaluate(typeof typedObj["recruitment"]["first_page_url"] === "string", `${argumentName}["recruitment"]["first_page_url"]`, "string", typedObj["recruitment"]["first_page_url"]) &&
            evaluate((typedObj["recruitment"]["from"] === null ||
                typeof typedObj["recruitment"]["from"] === "number"), `${argumentName}["recruitment"]["from"]`, "number | null", typedObj["recruitment"]["from"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page"] === "number", `${argumentName}["recruitment"]["last_page"]`, "number", typedObj["recruitment"]["last_page"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page_url"] === "string", `${argumentName}["recruitment"]["last_page_url"]`, "string", typedObj["recruitment"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["recruitment"]["links"]) &&
                typedObj["recruitment"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["recruitment"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["recruitment"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["recruitment"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["recruitment"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["recruitment"]["links"]) &&
            evaluate((typedObj["recruitment"]["next_page_url"] === null ||
                typeof typedObj["recruitment"]["next_page_url"] === "string"), `${argumentName}["recruitment"]["next_page_url"]`, "string | null", typedObj["recruitment"]["next_page_url"]) &&
            evaluate(typeof typedObj["recruitment"]["path"] === "string", `${argumentName}["recruitment"]["path"]`, "string", typedObj["recruitment"]["path"]) &&
            evaluate(typeof typedObj["recruitment"]["per_page"] === "number", `${argumentName}["recruitment"]["per_page"]`, "number", typedObj["recruitment"]["per_page"]) &&
            evaluate((typedObj["recruitment"]["prev_page_url"] === null ||
                typeof typedObj["recruitment"]["prev_page_url"] === "string"), `${argumentName}["recruitment"]["prev_page_url"]`, "string | null", typedObj["recruitment"]["prev_page_url"]) &&
            evaluate((typedObj["recruitment"]["to"] === null ||
                typeof typedObj["recruitment"]["to"] === "number"), `${argumentName}["recruitment"]["to"]`, "number | null", typedObj["recruitment"]["to"]) &&
            evaluate(typeof typedObj["recruitment"]["total"] === "number", `${argumentName}["recruitment"]["total"]`, "number", typedObj["recruitment"]["total"]) &&
            (typedObj["recruitment"] !== null &&
                typeof typedObj["recruitment"] === "object" ||
                typeof typedObj["recruitment"] === "function") &&
            evaluate(Array.isArray(typedObj["recruitment"]["data"]) &&
                typedObj["recruitment"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(Array.isArray(e["classes"]) &&
                        e["classes"].every((e: any) =>
                        (e === Classes.Scout ||
                            e === Classes.Soldier ||
                            e === Classes.Pyro ||
                            e === Classes.Demoman ||
                            e === Classes.Heavy ||
                            e === Classes.Engineer ||
                            e === Classes.Medic ||
                            e === Classes.Sniper ||
                            e === Classes.Spy)
                        ), `${argumentName}["recruitment"]["data"][${i0}]["classes"]`, "import(\"./types/enums/classes\").Classes[]", e["classes"]) &&
                    evaluate((e["comments"] !== null &&
                        typeof e["comments"] === "object" ||
                        typeof e["comments"] === "function") &&
                        evaluate(typeof e["comments"]["count"] === "number", `${argumentName}["recruitment"]["data"][${i0}]["comments"]["count"]`, "number", e["comments"]["count"]) &&
                        evaluate((e["comments"]["last"] === null ||
                            typeof e["comments"]["last"] === "number"), `${argumentName}["recruitment"]["data"][${i0}]["comments"]["last"]`, "number | null", e["comments"]["last"]), `${argumentName}["recruitment"]["data"][${i0}]["comments"]`, "{ count: number; last: number | null; }", e["comments"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["recruitment"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["skill"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["skill"]`, "string", e["skill"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate(typeof e["steam"]["id"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id"]`, "string", e["steam"]["id"]) &&
                        evaluate(typeof e["steam"]["id3"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id3"]`, "string", e["steam"]["id3"]) &&
                        evaluate(typeof e["steam"]["id64"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id64"]`, "string", e["steam"]["id64"]), `${argumentName}["recruitment"]["data"][${i0}]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["steam"]) &&
                    evaluate(typeof e["type"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["type"]`, "string", e["type"]) &&
                    evaluate((e["urls"] !== null &&
                        typeof e["urls"] === "object" ||
                        typeof e["urls"] === "function") &&
                        evaluate(typeof e["urls"]["player"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["urls"]["player"]`, "string", e["urls"]["player"]) &&
                        evaluate(typeof e["urls"]["recruitment"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["urls"]["recruitment"]`, "string", e["urls"]["recruitment"]), `${argumentName}["recruitment"]["data"][${i0}]["urls"]`, "{ player: string; recruitment: string; }", e["urls"])
                ), `${argumentName}["recruitment"]["data"]`, "import(\"./types/recruitment/recruitmentDataPlayer\").RecruitmentDataPlayer[]", typedObj["recruitment"]["data"]), `${argumentName}["recruitment"]`, "import(\"./types/recruitment/recruitmentPlayer\").RecruitmentPlayer", typedObj["recruitment"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lRecruitmentTeams(obj: unknown, argumentName: string = "etf2lRecruitmentTeamsG"): obj is Etf2lRecruitmentTeamsG {
    const typedObj = obj as Etf2lRecruitmentTeamsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["recruitment"] !== null &&
            typeof typedObj["recruitment"] === "object" ||
            typeof typedObj["recruitment"] === "function") &&
            evaluate(typeof typedObj["recruitment"]["current_page"] === "number", `${argumentName}["recruitment"]["current_page"]`, "number", typedObj["recruitment"]["current_page"]) &&
            evaluate((typedObj["recruitment"]["from"] === null ||
                typeof typedObj["recruitment"]["from"] === "number"), `${argumentName}["recruitment"]["from"]`, "number | null", typedObj["recruitment"]["from"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page"] === "number", `${argumentName}["recruitment"]["last_page"]`, "number", typedObj["recruitment"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["recruitment"]["links"]) &&
                typedObj["recruitment"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["recruitment"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["recruitment"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["recruitment"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["recruitment"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["recruitment"]["links"]) &&
            evaluate(typeof typedObj["recruitment"]["path"] === "string", `${argumentName}["recruitment"]["path"]`, "string", typedObj["recruitment"]["path"]) &&
            evaluate(typeof typedObj["recruitment"]["per_page"] === "number", `${argumentName}["recruitment"]["per_page"]`, "number", typedObj["recruitment"]["per_page"]) &&
            evaluate((typedObj["recruitment"]["to"] === null ||
                typeof typedObj["recruitment"]["to"] === "number"), `${argumentName}["recruitment"]["to"]`, "number | null", typedObj["recruitment"]["to"]) &&
            evaluate(typeof typedObj["recruitment"]["total"] === "number", `${argumentName}["recruitment"]["total"]`, "number", typedObj["recruitment"]["total"]) &&
            (typedObj["recruitment"] !== null &&
                typeof typedObj["recruitment"] === "object" ||
                typeof typedObj["recruitment"] === "function") &&
            evaluate(typeof typedObj["recruitment"]["current_page"] === "number", `${argumentName}["recruitment"]["current_page"]`, "number", typedObj["recruitment"]["current_page"]) &&
            evaluate(typeof typedObj["recruitment"]["first_page_url"] === "string", `${argumentName}["recruitment"]["first_page_url"]`, "string", typedObj["recruitment"]["first_page_url"]) &&
            evaluate((typedObj["recruitment"]["from"] === null ||
                typeof typedObj["recruitment"]["from"] === "number"), `${argumentName}["recruitment"]["from"]`, "number | null", typedObj["recruitment"]["from"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page"] === "number", `${argumentName}["recruitment"]["last_page"]`, "number", typedObj["recruitment"]["last_page"]) &&
            evaluate(typeof typedObj["recruitment"]["last_page_url"] === "string", `${argumentName}["recruitment"]["last_page_url"]`, "string", typedObj["recruitment"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["recruitment"]["links"]) &&
                typedObj["recruitment"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["recruitment"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["recruitment"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["recruitment"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["recruitment"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["recruitment"]["links"]) &&
            evaluate((typedObj["recruitment"]["next_page_url"] === null ||
                typeof typedObj["recruitment"]["next_page_url"] === "string"), `${argumentName}["recruitment"]["next_page_url"]`, "string | null", typedObj["recruitment"]["next_page_url"]) &&
            evaluate(typeof typedObj["recruitment"]["path"] === "string", `${argumentName}["recruitment"]["path"]`, "string", typedObj["recruitment"]["path"]) &&
            evaluate(typeof typedObj["recruitment"]["per_page"] === "number", `${argumentName}["recruitment"]["per_page"]`, "number", typedObj["recruitment"]["per_page"]) &&
            evaluate((typedObj["recruitment"]["prev_page_url"] === null ||
                typeof typedObj["recruitment"]["prev_page_url"] === "string"), `${argumentName}["recruitment"]["prev_page_url"]`, "string | null", typedObj["recruitment"]["prev_page_url"]) &&
            evaluate((typedObj["recruitment"]["to"] === null ||
                typeof typedObj["recruitment"]["to"] === "number"), `${argumentName}["recruitment"]["to"]`, "number | null", typedObj["recruitment"]["to"]) &&
            evaluate(typeof typedObj["recruitment"]["total"] === "number", `${argumentName}["recruitment"]["total"]`, "number", typedObj["recruitment"]["total"]) &&
            (typedObj["recruitment"] !== null &&
                typeof typedObj["recruitment"] === "object" ||
                typeof typedObj["recruitment"] === "function") &&
            evaluate(Array.isArray(typedObj["recruitment"]["data"]) &&
                typedObj["recruitment"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(Array.isArray(e["classes"]) &&
                        e["classes"].every((e: any) =>
                        (e === Classes.Scout ||
                            e === Classes.Soldier ||
                            e === Classes.Pyro ||
                            e === Classes.Demoman ||
                            e === Classes.Heavy ||
                            e === Classes.Engineer ||
                            e === Classes.Medic ||
                            e === Classes.Sniper ||
                            e === Classes.Spy)
                        ), `${argumentName}["recruitment"]["data"][${i0}]["classes"]`, "import(\"./types/enums/classes\").Classes[]", e["classes"]) &&
                    evaluate((e["comments"] !== null &&
                        typeof e["comments"] === "object" ||
                        typeof e["comments"] === "function") &&
                        evaluate(typeof e["comments"]["count"] === "number", `${argumentName}["recruitment"]["data"][${i0}]["comments"]["count"]`, "number", e["comments"]["count"]) &&
                        evaluate((e["comments"]["last"] === null ||
                            typeof e["comments"]["last"] === "number"), `${argumentName}["recruitment"]["data"][${i0}]["comments"]["last"]`, "number | null", e["comments"]["last"]), `${argumentName}["recruitment"]["data"][${i0}]["comments"]`, "{ count: number; last: number | null; }", e["comments"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["recruitment"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["skill"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["skill"]`, "string", e["skill"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate(typeof e["steam"]["id"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id"]`, "string", e["steam"]["id"]) &&
                        evaluate(typeof e["steam"]["id3"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id3"]`, "string", e["steam"]["id3"]) &&
                        evaluate(typeof e["steam"]["id64"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["steam"]["id64"]`, "string", e["steam"]["id64"]), `${argumentName}["recruitment"]["data"][${i0}]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["steam"]) &&
                    evaluate(typeof e["type"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["type"]`, "string", e["type"]) &&
                    evaluate((e["urls"] !== null &&
                        typeof e["urls"] === "object" ||
                        typeof e["urls"] === "function") &&
                        evaluate(typeof e["urls"]["team"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["urls"]["team"]`, "string", e["urls"]["team"]) &&
                        evaluate(typeof e["urls"]["recruitment"] === "string", `${argumentName}["recruitment"]["data"][${i0}]["urls"]["recruitment"]`, "string", e["urls"]["recruitment"]), `${argumentName}["recruitment"]["data"][${i0}]["urls"]`, "{ team: string; recruitment: string; }", e["urls"])
                ), `${argumentName}["recruitment"]["data"]`, "import(\"./types/recruitment/recruitmentDataTeam\").RecruitmentDataTeam[]", typedObj["recruitment"]["data"]), `${argumentName}["recruitment"]`, "import(\"./types/recruitment/recruitmentTeam\").RecruitmentTeam", typedObj["recruitment"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lTeam(obj: unknown, argumentName: string = "etf2lTeamG"): obj is Etf2lTeamG {
    const typedObj = obj as Etf2lTeamG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["team"] !== null &&
            typeof typedObj["team"] === "object" ||
            typeof typedObj["team"] === "function") &&
            evaluate((typedObj["team"]["competitions"] !== null &&
                typeof typedObj["team"]["competitions"] === "object" ||
                typeof typedObj["team"]["competitions"] === "function") &&
                Object.entries<any>(typedObj["team"]["competitions"])
                    .every(([key, value]) => (evaluate((value !== null &&
                        typeof value === "object" ||
                        typeof value === "function") &&
                        evaluate(typeof value["category"] === "string", `${argumentName}["team"]["competitions"] value["category"]`, "string", value["category"]) &&
                        evaluate(typeof value["competition"] === "string", `${argumentName}["team"]["competitions"] value["competition"]`, "string", value["competition"]) &&
                        evaluate((value["division"] !== null &&
                            typeof value["division"] === "object" ||
                            typeof value["division"] === "function") &&
                            evaluate((value["division"]["name"] === null ||
                                typeof value["division"]["name"] === "string"), `${argumentName}["team"]["competitions"] value["division"]["name"]`, "string | null", value["division"]["name"]) &&
                            evaluate((value["division"]["skill_contrib"] === null ||
                                typeof value["division"]["skill_contrib"] === "number"), `${argumentName}["team"]["competitions"] value["division"]["skill_contrib"]`, "number | null", value["division"]["skill_contrib"]) &&
                            evaluate((value["division"]["tier"] === null ||
                                typeof value["division"]["tier"] === "number"), `${argumentName}["team"]["competitions"] value["division"]["tier"]`, "number | null", value["division"]["tier"]), `${argumentName}["team"]["competitions"] value["division"]`, "Omit<import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision, \"id\">", value["division"]) &&
                        evaluate(typeof value["url"] === "string", `${argumentName}["team"]["competitions"] value["url"]`, "string", value["url"]), `${argumentName}["team"]["competitions"]["${key.toString().replace(/"/g, '\\"')}"]`, "{ category: string; competition: string; division: Omit<import(\"H:/Repos/tf2/the-library/javascript-sdk/etf2l/types/competition/competitionResultsDivision\").CompetitionResultsDivision, \"id\">; url: string; }", value) &&
                        evaluate(typeof key === "string", `${argumentName}["team"]["competitions"] (key: "${key.toString().replace(/"/g, '\\"')}")`, "string", key))), `${argumentName}["team"]["competitions"]`, "import(\"./types/team/teamCompetition\").TeamCompetition", typedObj["team"]["competitions"]) &&
            evaluate(typeof typedObj["team"]["country"] === "string", `${argumentName}["team"]["country"]`, "string", typedObj["team"]["country"]) &&
            evaluate(typeof typedObj["team"]["homepage"] === "string", `${argumentName}["team"]["homepage"]`, "string", typedObj["team"]["homepage"]) &&
            evaluate(typeof typedObj["team"]["id"] === "number", `${argumentName}["team"]["id"]`, "number", typedObj["team"]["id"]) &&
            evaluate((typedObj["team"]["irc"] !== null &&
                typeof typedObj["team"]["irc"] === "object" ||
                typeof typedObj["team"]["irc"] === "function") &&
                evaluate((typedObj["team"]["irc"]["channel"] === null ||
                    typeof typedObj["team"]["irc"]["channel"] === "string"), `${argumentName}["team"]["irc"]["channel"]`, "string | null", typedObj["team"]["irc"]["channel"]) &&
                evaluate((typedObj["team"]["irc"]["network"] === null ||
                    typeof typedObj["team"]["irc"]["network"] === "string"), `${argumentName}["team"]["irc"]["network"]`, "string | null", typedObj["team"]["irc"]["network"]), `${argumentName}["team"]["irc"]`, "{ channel: string | null; network: string | null; }", typedObj["team"]["irc"]) &&
            evaluate(typeof typedObj["team"]["name"] === "string", `${argumentName}["team"]["name"]`, "string", typedObj["team"]["name"]) &&
            evaluate(typeof typedObj["team"]["server"] === "string", `${argumentName}["team"]["server"]`, "string", typedObj["team"]["server"]) &&
            evaluate((typedObj["team"]["steam"] !== null &&
                typeof typedObj["team"]["steam"] === "object" ||
                typeof typedObj["team"]["steam"] === "function") &&
                evaluate(typeof typedObj["team"]["steam"]["avatar"] === "string", `${argumentName}["team"]["steam"]["avatar"]`, "string", typedObj["team"]["steam"]["avatar"]) &&
                evaluate((typedObj["team"]["steam"]["steam_group"] === null ||
                    typeof typedObj["team"]["steam"]["steam_group"] === "string"), `${argumentName}["team"]["steam"]["steam_group"]`, "string | null", typedObj["team"]["steam"]["steam_group"]), `${argumentName}["team"]["steam"]`, "{ avatar: string; steam_group: string | null; }", typedObj["team"]["steam"]) &&
            evaluate(typeof typedObj["team"]["tag"] === "string", `${argumentName}["team"]["tag"]`, "string", typedObj["team"]["tag"]) &&
            evaluate((typedObj["team"]["urls"] !== null &&
                typeof typedObj["team"]["urls"] === "object" ||
                typeof typedObj["team"]["urls"] === "function") &&
                evaluate(typeof typedObj["team"]["urls"]["matches"] === "string", `${argumentName}["team"]["urls"]["matches"]`, "string", typedObj["team"]["urls"]["matches"]) &&
                evaluate(typeof typedObj["team"]["urls"]["results"] === "string", `${argumentName}["team"]["urls"]["results"]`, "string", typedObj["team"]["urls"]["results"]) &&
                evaluate(typeof typedObj["team"]["urls"]["self"] === "string", `${argumentName}["team"]["urls"]["self"]`, "string", typedObj["team"]["urls"]["self"]) &&
                evaluate(typeof typedObj["team"]["urls"]["transfers"] === "string", `${argumentName}["team"]["urls"]["transfers"]`, "string", typedObj["team"]["urls"]["transfers"]), `${argumentName}["team"]["urls"]`, "{ matches: string; results: string; self: string; transfers: string; }", typedObj["team"]["urls"]) &&
            evaluate(Array.isArray(typedObj["team"]["players"]) &&
                typedObj["team"]["players"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["country"] === "string", `${argumentName}["team"]["players"][${i0}]["country"]`, "string", e["country"]) &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["team"]["players"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate(typeof e["name"] === "string", `${argumentName}["team"]["players"][${i0}]["name"]`, "string", e["name"]) &&
                    evaluate(typeof e["role"] === "string", `${argumentName}["team"]["players"][${i0}]["role"]`, "string", e["role"]) &&
                    evaluate((e["steam"] !== null &&
                        typeof e["steam"] === "object" ||
                        typeof e["steam"] === "function") &&
                        evaluate(typeof e["steam"]["avatar"] === "string", `${argumentName}["team"]["players"][${i0}]["steam"]["avatar"]`, "string", e["steam"]["avatar"]) &&
                        evaluate(typeof e["steam"]["id"] === "string", `${argumentName}["team"]["players"][${i0}]["steam"]["id"]`, "string", e["steam"]["id"]) &&
                        evaluate(typeof e["steam"]["id3"] === "string", `${argumentName}["team"]["players"][${i0}]["steam"]["id3"]`, "string", e["steam"]["id3"]) &&
                        evaluate(typeof e["steam"]["id64"] === "string", `${argumentName}["team"]["players"][${i0}]["steam"]["id64"]`, "string", e["steam"]["id64"]), `${argumentName}["team"]["players"][${i0}]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["steam"]) &&
                    evaluate(typeof e["url"] === "string", `${argumentName}["team"]["players"][${i0}]["url"]`, "string", e["url"])
                ), `${argumentName}["team"]["players"]`, "import(\"./types/team/teamPlayer\").TeamPlayer[]", typedObj["team"]["players"]) &&
            evaluate(Array.isArray(typedObj["team"]["name_changes"]) &&
                typedObj["team"]["name_changes"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["from"] === "string", `${argumentName}["team"]["name_changes"][${i0}]["from"]`, "string", e["from"]) &&
                    evaluate(typeof e["to"] === "string", `${argumentName}["team"]["name_changes"][${i0}]["to"]`, "string", e["to"]) &&
                    evaluate(typeof e["time"] === "number", `${argumentName}["team"]["name_changes"][${i0}]["time"]`, "number", e["time"])
                ), `${argumentName}["team"]["name_changes"]`, "{ from: string; to: string; time: number; }[]", typedObj["team"]["name_changes"]), `${argumentName}["team"]`, "import(\"./types/team/team\").Team", typedObj["team"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lTeamMatches(obj: unknown, argumentName: string = "etf2lTeamMatchesG"): obj is Etf2lTeamMatchesG {
    const typedObj = obj as Etf2lTeamMatchesG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["matches"] !== null &&
            typeof typedObj["matches"] === "object" ||
            typeof typedObj["matches"] === "function") &&
            evaluate(typeof typedObj["matches"]["current_page"] === "number", `${argumentName}["matches"]["current_page"]`, "number", typedObj["matches"]["current_page"]) &&
            evaluate((typedObj["matches"]["from"] === null ||
                typeof typedObj["matches"]["from"] === "number"), `${argumentName}["matches"]["from"]`, "number | null", typedObj["matches"]["from"]) &&
            evaluate(typeof typedObj["matches"]["last_page"] === "number", `${argumentName}["matches"]["last_page"]`, "number", typedObj["matches"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["matches"]["links"]) &&
                typedObj["matches"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["matches"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["matches"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["matches"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["matches"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["matches"]["links"]) &&
            evaluate(typeof typedObj["matches"]["path"] === "string", `${argumentName}["matches"]["path"]`, "string", typedObj["matches"]["path"]) &&
            evaluate(typeof typedObj["matches"]["per_page"] === "number", `${argumentName}["matches"]["per_page"]`, "number", typedObj["matches"]["per_page"]) &&
            evaluate((typedObj["matches"]["to"] === null ||
                typeof typedObj["matches"]["to"] === "number"), `${argumentName}["matches"]["to"]`, "number | null", typedObj["matches"]["to"]) &&
            evaluate(typeof typedObj["matches"]["total"] === "number", `${argumentName}["matches"]["total"]`, "number", typedObj["matches"]["total"]) &&
            (typedObj["matches"] !== null &&
                typeof typedObj["matches"] === "object" ||
                typeof typedObj["matches"] === "function") &&
            evaluate(typeof typedObj["matches"]["current_page"] === "number", `${argumentName}["matches"]["current_page"]`, "number", typedObj["matches"]["current_page"]) &&
            evaluate(typeof typedObj["matches"]["first_page_url"] === "string", `${argumentName}["matches"]["first_page_url"]`, "string", typedObj["matches"]["first_page_url"]) &&
            evaluate((typedObj["matches"]["from"] === null ||
                typeof typedObj["matches"]["from"] === "number"), `${argumentName}["matches"]["from"]`, "number | null", typedObj["matches"]["from"]) &&
            evaluate(typeof typedObj["matches"]["last_page"] === "number", `${argumentName}["matches"]["last_page"]`, "number", typedObj["matches"]["last_page"]) &&
            evaluate(typeof typedObj["matches"]["last_page_url"] === "string", `${argumentName}["matches"]["last_page_url"]`, "string", typedObj["matches"]["last_page_url"]) &&
            evaluate(Array.isArray(typedObj["matches"]["links"]) &&
                typedObj["matches"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["matches"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["matches"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["matches"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["matches"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["matches"]["links"]) &&
            evaluate((typedObj["matches"]["next_page_url"] === null ||
                typeof typedObj["matches"]["next_page_url"] === "string"), `${argumentName}["matches"]["next_page_url"]`, "string | null", typedObj["matches"]["next_page_url"]) &&
            evaluate(typeof typedObj["matches"]["path"] === "string", `${argumentName}["matches"]["path"]`, "string", typedObj["matches"]["path"]) &&
            evaluate(typeof typedObj["matches"]["per_page"] === "number", `${argumentName}["matches"]["per_page"]`, "number", typedObj["matches"]["per_page"]) &&
            evaluate((typedObj["matches"]["prev_page_url"] === null ||
                typeof typedObj["matches"]["prev_page_url"] === "string"), `${argumentName}["matches"]["prev_page_url"]`, "string | null", typedObj["matches"]["prev_page_url"]) &&
            evaluate((typedObj["matches"]["to"] === null ||
                typeof typedObj["matches"]["to"] === "number"), `${argumentName}["matches"]["to"]`, "number | null", typedObj["matches"]["to"]) &&
            evaluate(typeof typedObj["matches"]["total"] === "number", `${argumentName}["matches"]["total"]`, "number", typedObj["matches"]["total"]) &&
            (typedObj["matches"] !== null &&
                typeof typedObj["matches"] === "object" ||
                typeof typedObj["matches"] === "function") &&
            evaluate(Array.isArray(typedObj["matches"]["data"]) &&
                typedObj["matches"]["data"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate(typeof e["id"] === "number", `${argumentName}["matches"]["data"][${i0}]["id"]`, "number", e["id"]) &&
                    evaluate((e["clan1"] !== null &&
                        typeof e["clan1"] === "object" ||
                        typeof e["clan1"] === "function") &&
                        evaluate(typeof e["clan1"]["country"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan1"]["country"]`, "string", e["clan1"]["country"]) &&
                        evaluate(typeof e["clan1"]["drop"] === "boolean", `${argumentName}["matches"]["data"][${i0}]["clan1"]["drop"]`, "boolean", e["clan1"]["drop"]) &&
                        evaluate(typeof e["clan1"]["id"] === "number", `${argumentName}["matches"]["data"][${i0}]["clan1"]["id"]`, "number", e["clan1"]["id"]) &&
                        evaluate(typeof e["clan1"]["name"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan1"]["name"]`, "string", e["clan1"]["name"]) &&
                        evaluate((e["clan1"]["steam"] !== null &&
                            typeof e["clan1"]["steam"] === "object" ||
                            typeof e["clan1"]["steam"] === "function") &&
                            evaluate(typeof e["clan1"]["steam"]["avatar"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan1"]["steam"]["avatar"]`, "string", e["clan1"]["steam"]["avatar"]) &&
                            evaluate((e["clan1"]["steam"]["group"] === null ||
                                typeof e["clan1"]["steam"]["group"] === "string"), `${argumentName}["matches"]["data"][${i0}]["clan1"]["steam"]["group"]`, "string | null", e["clan1"]["steam"]["group"]), `${argumentName}["matches"]["data"][${i0}]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan1"]["steam"]) &&
                        evaluate(typeof e["clan1"]["url"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan1"]["url"]`, "string", e["clan1"]["url"]), `${argumentName}["matches"]["data"][${i0}]["clan1"]`, "import(\"./types/common/clan\").Clan", e["clan1"]) &&
                    evaluate((e["clan2"] !== null &&
                        typeof e["clan2"] === "object" ||
                        typeof e["clan2"] === "function") &&
                        evaluate(typeof e["clan2"]["country"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan2"]["country"]`, "string", e["clan2"]["country"]) &&
                        evaluate(typeof e["clan2"]["drop"] === "boolean", `${argumentName}["matches"]["data"][${i0}]["clan2"]["drop"]`, "boolean", e["clan2"]["drop"]) &&
                        evaluate(typeof e["clan2"]["id"] === "number", `${argumentName}["matches"]["data"][${i0}]["clan2"]["id"]`, "number", e["clan2"]["id"]) &&
                        evaluate(typeof e["clan2"]["name"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan2"]["name"]`, "string", e["clan2"]["name"]) &&
                        evaluate((e["clan2"]["steam"] !== null &&
                            typeof e["clan2"]["steam"] === "object" ||
                            typeof e["clan2"]["steam"] === "function") &&
                            evaluate(typeof e["clan2"]["steam"]["avatar"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan2"]["steam"]["avatar"]`, "string", e["clan2"]["steam"]["avatar"]) &&
                            evaluate((e["clan2"]["steam"]["group"] === null ||
                                typeof e["clan2"]["steam"]["group"] === "string"), `${argumentName}["matches"]["data"][${i0}]["clan2"]["steam"]["group"]`, "string | null", e["clan2"]["steam"]["group"]), `${argumentName}["matches"]["data"][${i0}]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan2"]["steam"]) &&
                        evaluate(typeof e["clan2"]["url"] === "string", `${argumentName}["matches"]["data"][${i0}]["clan2"]["url"]`, "string", e["clan2"]["url"]), `${argumentName}["matches"]["data"][${i0}]["clan2"]`, "import(\"./types/common/clan\").Clan", e["clan2"]) &&
                    evaluate((e["competition"] !== null &&
                        typeof e["competition"] === "object" ||
                        typeof e["competition"] === "function") &&
                        evaluate(typeof e["competition"]["category"] === "string", `${argumentName}["matches"]["data"][${i0}]["competition"]["category"]`, "string", e["competition"]["category"]) &&
                        evaluate(typeof e["competition"]["id"] === "number", `${argumentName}["matches"]["data"][${i0}]["competition"]["id"]`, "number", e["competition"]["id"]) &&
                        evaluate(typeof e["competition"]["name"] === "string", `${argumentName}["matches"]["data"][${i0}]["competition"]["name"]`, "string", e["competition"]["name"]) &&
                        evaluate(typeof e["competition"]["type"] === "string", `${argumentName}["matches"]["data"][${i0}]["competition"]["type"]`, "string", e["competition"]["type"]) &&
                        evaluate(typeof e["competition"]["url"] === "string", `${argumentName}["matches"]["data"][${i0}]["competition"]["url"]`, "string", e["competition"]["url"]), `${argumentName}["matches"]["data"][${i0}]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", e["competition"]) &&
                    evaluate((e["defaultwin"] === null ||
                        e["defaultwin"] === false ||
                        e["defaultwin"] === true), `${argumentName}["matches"]["data"][${i0}]["defaultwin"]`, "boolean | null", e["defaultwin"]) &&
                    evaluate((e["division"] !== null &&
                        typeof e["division"] === "object" ||
                        typeof e["division"] === "function") &&
                        evaluate((e["division"]["id"] === null ||
                            typeof e["division"]["id"] === "number"), `${argumentName}["matches"]["data"][${i0}]["division"]["id"]`, "number | null", e["division"]["id"]) &&
                        evaluate((e["division"]["name"] === null ||
                            typeof e["division"]["name"] === "string"), `${argumentName}["matches"]["data"][${i0}]["division"]["name"]`, "string | null", e["division"]["name"]) &&
                        evaluate((e["division"]["skill_contrib"] === null ||
                            typeof e["division"]["skill_contrib"] === "number"), `${argumentName}["matches"]["data"][${i0}]["division"]["skill_contrib"]`, "number | null", e["division"]["skill_contrib"]) &&
                        evaluate((e["division"]["tier"] === null ||
                            typeof e["division"]["tier"] === "number"), `${argumentName}["matches"]["data"][${i0}]["division"]["tier"]`, "number | null", e["division"]["tier"]), `${argumentName}["matches"]["data"][${i0}]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision", e["division"]) &&
                    evaluate(typeof e["result"] === "number", `${argumentName}["matches"]["data"][${i0}]["result"]`, "number", e["result"]) &&
                    evaluate(Array.isArray(e["maps"]) &&
                        e["maps"].every((e: any) =>
                            typeof e === "string"
                        ), `${argumentName}["matches"]["data"][${i0}]["maps"]`, "string[]", e["maps"]) &&
                    evaluate(typeof e["r1"] === "number", `${argumentName}["matches"]["data"][${i0}]["r1"]`, "number", e["r1"]) &&
                    evaluate(typeof e["r2"] === "number", `${argumentName}["matches"]["data"][${i0}]["r2"]`, "number", e["r2"]) &&
                    evaluate(typeof e["round"] === "string", `${argumentName}["matches"]["data"][${i0}]["round"]`, "string", e["round"]) &&
                    evaluate((e["time"] === null ||
                        typeof e["time"] === "number"), `${argumentName}["matches"]["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                    evaluate(typeof e["week"] === "number", `${argumentName}["matches"]["data"][${i0}]["week"]`, "number", e["week"])
                ), `${argumentName}["matches"]["data"]`, "import(\"./types/team/teamMatchData\").TeamMatchData[]", typedObj["matches"]["data"]), `${argumentName}["matches"]`, "import(\"./types/team/teamMatch\").TeamMatch", typedObj["matches"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}

export function isEtf2lTeamResults(obj: unknown, argumentName: string = "etf2lTeamResultsG"): obj is Etf2lTeamResultsG {
    const typedObj = obj as Etf2lTeamResultsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["current_page"] === "number", `${argumentName}["current_page"]`, "number", typedObj["current_page"]) &&
        evaluate((typedObj["from"] === null ||
            typeof typedObj["from"] === "number"), `${argumentName}["from"]`, "number | null", typedObj["from"]) &&
        evaluate(typeof typedObj["last_page"] === "number", `${argumentName}["last_page"]`, "number", typedObj["last_page"]) &&
        evaluate(Array.isArray(typedObj["links"]) &&
            typedObj["links"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["url"] === null ||
                    typeof e["url"] === "string"), `${argumentName}["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                evaluate(typeof e["label"] === "string", `${argumentName}["links"][${i0}]["label"]`, "string", e["label"]) &&
                evaluate(typeof e["active"] === "boolean", `${argumentName}["links"][${i0}]["active"]`, "boolean", e["active"])
            ), `${argumentName}["links"]`, "import(\"./types/common/link\").Link[]", typedObj["links"]) &&
        evaluate(typeof typedObj["path"] === "string", `${argumentName}["path"]`, "string", typedObj["path"]) &&
        evaluate(typeof typedObj["per_page"] === "number", `${argumentName}["per_page"]`, "number", typedObj["per_page"]) &&
        evaluate((typedObj["to"] === null ||
            typeof typedObj["to"] === "number"), `${argumentName}["to"]`, "number | null", typedObj["to"]) &&
        evaluate(typeof typedObj["total"] === "number", `${argumentName}["total"]`, "number", typedObj["total"]) &&
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(typeof typedObj["current_page"] === "number", `${argumentName}["current_page"]`, "number", typedObj["current_page"]) &&
        evaluate(typeof typedObj["first_page_url"] === "string", `${argumentName}["first_page_url"]`, "string", typedObj["first_page_url"]) &&
        evaluate((typedObj["from"] === null ||
            typeof typedObj["from"] === "number"), `${argumentName}["from"]`, "number | null", typedObj["from"]) &&
        evaluate(typeof typedObj["last_page"] === "number", `${argumentName}["last_page"]`, "number", typedObj["last_page"]) &&
        evaluate(typeof typedObj["last_page_url"] === "string", `${argumentName}["last_page_url"]`, "string", typedObj["last_page_url"]) &&
        evaluate(Array.isArray(typedObj["links"]) &&
            typedObj["links"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["url"] === null ||
                    typeof e["url"] === "string"), `${argumentName}["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                evaluate(typeof e["label"] === "string", `${argumentName}["links"][${i0}]["label"]`, "string", e["label"]) &&
                evaluate(typeof e["active"] === "boolean", `${argumentName}["links"][${i0}]["active"]`, "boolean", e["active"])
            ), `${argumentName}["links"]`, "import(\"./types/common/link\").Link[]", typedObj["links"]) &&
        evaluate((typedObj["next_page_url"] === null ||
            typeof typedObj["next_page_url"] === "string"), `${argumentName}["next_page_url"]`, "string | null", typedObj["next_page_url"]) &&
        evaluate(typeof typedObj["path"] === "string", `${argumentName}["path"]`, "string", typedObj["path"]) &&
        evaluate(typeof typedObj["per_page"] === "number", `${argumentName}["per_page"]`, "number", typedObj["per_page"]) &&
        evaluate((typedObj["prev_page_url"] === null ||
            typeof typedObj["prev_page_url"] === "string"), `${argumentName}["prev_page_url"]`, "string | null", typedObj["prev_page_url"]) &&
        evaluate((typedObj["to"] === null ||
            typeof typedObj["to"] === "number"), `${argumentName}["to"]`, "number | null", typedObj["to"]) &&
        evaluate(typeof typedObj["total"] === "number", `${argumentName}["total"]`, "number", typedObj["total"]) &&
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(Array.isArray(typedObj["data"]) &&
            typedObj["data"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["clan1"] !== null &&
                    typeof e["clan1"] === "object" ||
                    typeof e["clan1"] === "function") &&
                    evaluate(typeof e["clan1"]["country"] === "string", `${argumentName}["data"][${i0}]["clan1"]["country"]`, "string", e["clan1"]["country"]) &&
                    evaluate(typeof e["clan1"]["drop"] === "boolean", `${argumentName}["data"][${i0}]["clan1"]["drop"]`, "boolean", e["clan1"]["drop"]) &&
                    evaluate(typeof e["clan1"]["id"] === "number", `${argumentName}["data"][${i0}]["clan1"]["id"]`, "number", e["clan1"]["id"]) &&
                    evaluate(typeof e["clan1"]["name"] === "string", `${argumentName}["data"][${i0}]["clan1"]["name"]`, "string", e["clan1"]["name"]) &&
                    evaluate((e["clan1"]["steam"] !== null &&
                        typeof e["clan1"]["steam"] === "object" ||
                        typeof e["clan1"]["steam"] === "function") &&
                        evaluate(typeof e["clan1"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["clan1"]["steam"]["avatar"]`, "string", e["clan1"]["steam"]["avatar"]) &&
                        evaluate((e["clan1"]["steam"]["group"] === null ||
                            typeof e["clan1"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["clan1"]["steam"]["group"]`, "string | null", e["clan1"]["steam"]["group"]), `${argumentName}["data"][${i0}]["clan1"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan1"]["steam"]) &&
                    evaluate(typeof e["clan1"]["url"] === "string", `${argumentName}["data"][${i0}]["clan1"]["url"]`, "string", e["clan1"]["url"]), `${argumentName}["data"][${i0}]["clan1"]`, "import(\"./types/common/clan\").Clan", e["clan1"]) &&
                evaluate((e["clan2"] !== null &&
                    typeof e["clan2"] === "object" ||
                    typeof e["clan2"] === "function") &&
                    evaluate(typeof e["clan2"]["country"] === "string", `${argumentName}["data"][${i0}]["clan2"]["country"]`, "string", e["clan2"]["country"]) &&
                    evaluate(typeof e["clan2"]["drop"] === "boolean", `${argumentName}["data"][${i0}]["clan2"]["drop"]`, "boolean", e["clan2"]["drop"]) &&
                    evaluate(typeof e["clan2"]["id"] === "number", `${argumentName}["data"][${i0}]["clan2"]["id"]`, "number", e["clan2"]["id"]) &&
                    evaluate(typeof e["clan2"]["name"] === "string", `${argumentName}["data"][${i0}]["clan2"]["name"]`, "string", e["clan2"]["name"]) &&
                    evaluate((e["clan2"]["steam"] !== null &&
                        typeof e["clan2"]["steam"] === "object" ||
                        typeof e["clan2"]["steam"] === "function") &&
                        evaluate(typeof e["clan2"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["clan2"]["steam"]["avatar"]`, "string", e["clan2"]["steam"]["avatar"]) &&
                        evaluate((e["clan2"]["steam"]["group"] === null ||
                            typeof e["clan2"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["clan2"]["steam"]["group"]`, "string | null", e["clan2"]["steam"]["group"]), `${argumentName}["data"][${i0}]["clan2"]["steam"]`, "import(\"./types/common/steamData\").SteamData", e["clan2"]["steam"]) &&
                    evaluate(typeof e["clan2"]["url"] === "string", `${argumentName}["data"][${i0}]["clan2"]["url"]`, "string", e["clan2"]["url"]), `${argumentName}["data"][${i0}]["clan2"]`, "import(\"./types/common/clan\").Clan", e["clan2"]) &&
                evaluate((e["competition"] !== null &&
                    typeof e["competition"] === "object" ||
                    typeof e["competition"] === "function") &&
                    evaluate(typeof e["competition"]["category"] === "string", `${argumentName}["data"][${i0}]["competition"]["category"]`, "string", e["competition"]["category"]) &&
                    evaluate(typeof e["competition"]["id"] === "number", `${argumentName}["data"][${i0}]["competition"]["id"]`, "number", e["competition"]["id"]) &&
                    evaluate(typeof e["competition"]["name"] === "string", `${argumentName}["data"][${i0}]["competition"]["name"]`, "string", e["competition"]["name"]) &&
                    evaluate(typeof e["competition"]["type"] === "string", `${argumentName}["data"][${i0}]["competition"]["type"]`, "string", e["competition"]["type"]) &&
                    evaluate(typeof e["competition"]["url"] === "string", `${argumentName}["data"][${i0}]["competition"]["url"]`, "string", e["competition"]["url"]), `${argumentName}["data"][${i0}]["competition"]`, "import(\"./types/competition/competitionResultsCompetition\").CompetitionResultsCompetition", e["competition"]) &&
                evaluate((e["defaultwin"] === null ||
                    e["defaultwin"] === false ||
                    e["defaultwin"] === true), `${argumentName}["data"][${i0}]["defaultwin"]`, "boolean | null", e["defaultwin"]) &&
                evaluate((e["division"] !== null &&
                    typeof e["division"] === "object" ||
                    typeof e["division"] === "function") &&
                    evaluate((e["division"]["id"] === null ||
                        typeof e["division"]["id"] === "number"), `${argumentName}["data"][${i0}]["division"]["id"]`, "number | null", e["division"]["id"]) &&
                    evaluate((e["division"]["name"] === null ||
                        typeof e["division"]["name"] === "string"), `${argumentName}["data"][${i0}]["division"]["name"]`, "string | null", e["division"]["name"]) &&
                    evaluate((e["division"]["skill_contrib"] === null ||
                        typeof e["division"]["skill_contrib"] === "number"), `${argumentName}["data"][${i0}]["division"]["skill_contrib"]`, "number | null", e["division"]["skill_contrib"]) &&
                    evaluate((e["division"]["tier"] === null ||
                        typeof e["division"]["tier"] === "number"), `${argumentName}["data"][${i0}]["division"]["tier"]`, "number | null", e["division"]["tier"]), `${argumentName}["data"][${i0}]["division"]`, "import(\"./types/competition/competitionResultsDivision\").CompetitionResultsDivision", e["division"]) &&
                evaluate(typeof e["result"] === "number", `${argumentName}["data"][${i0}]["result"]`, "number", e["result"]) &&
                evaluate(Array.isArray(e["maps"]) &&
                    e["maps"].every((e: any) =>
                        typeof e === "string"
                    ), `${argumentName}["data"][${i0}]["maps"]`, "string[]", e["maps"]) &&
                evaluate(typeof e["r1"] === "number", `${argumentName}["data"][${i0}]["r1"]`, "number", e["r1"]) &&
                evaluate(typeof e["r2"] === "number", `${argumentName}["data"][${i0}]["r2"]`, "number", e["r2"]) &&
                evaluate(typeof e["round"] === "string", `${argumentName}["data"][${i0}]["round"]`, "string", e["round"]) &&
                evaluate((e["time"] === null ||
                    typeof e["time"] === "number"), `${argumentName}["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                evaluate(typeof e["week"] === "number", `${argumentName}["data"][${i0}]["week"]`, "number", e["week"])
            ), `${argumentName}["data"]`, "Omit<import(\"./types/team/teamMatchData\").TeamMatchData, \"id\">[]", typedObj["data"])
    )
}

export function isEtf2lTeamTransfers(obj: unknown, argumentName: string = "etf2lTeamTransfersG"): obj is Etf2lTeamTransfersG {
    const typedObj = obj as Etf2lTeamTransfersG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate(Array.isArray(typedObj["data"]) &&
            typedObj["data"].every((e: any, i0: number) =>
                (e !== null &&
                    typeof e === "object" ||
                    typeof e === "function") &&
                evaluate((e["by"] !== null &&
                    typeof e["by"] === "object" ||
                    typeof e["by"] === "function") &&
                    evaluate(typeof e["by"]["country"] === "string", `${argumentName}["data"][${i0}]["by"]["country"]`, "string", e["by"]["country"]) &&
                    evaluate(typeof e["by"]["id"] === "number", `${argumentName}["data"][${i0}]["by"]["id"]`, "number", e["by"]["id"]) &&
                    evaluate(typeof e["by"]["name"] === "string", `${argumentName}["data"][${i0}]["by"]["name"]`, "string", e["by"]["name"]) &&
                    evaluate((e["by"]["steam"] !== null &&
                        typeof e["by"]["steam"] === "object" ||
                        typeof e["by"]["steam"] === "function") &&
                        evaluate(typeof e["by"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["avatar"]`, "string", e["by"]["steam"]["avatar"]) &&
                        evaluate(typeof e["by"]["steam"]["id"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id"]`, "string", e["by"]["steam"]["id"]) &&
                        evaluate(typeof e["by"]["steam"]["id3"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id3"]`, "string", e["by"]["steam"]["id3"]) &&
                        evaluate(typeof e["by"]["steam"]["id64"] === "string", `${argumentName}["data"][${i0}]["by"]["steam"]["id64"]`, "string", e["by"]["steam"]["id64"]), `${argumentName}["data"][${i0}]["by"]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["by"]["steam"]) &&
                    evaluate(typeof e["by"]["url"] === "string", `${argumentName}["data"][${i0}]["by"]["url"]`, "string", e["by"]["url"]), `${argumentName}["data"][${i0}]["by"]`, "import(\"./types/team/teamTransferPlayer\").TeamTransferPlayer", e["by"]) &&
                evaluate((e["who"] !== null &&
                    typeof e["who"] === "object" ||
                    typeof e["who"] === "function") &&
                    evaluate(typeof e["who"]["country"] === "string", `${argumentName}["data"][${i0}]["who"]["country"]`, "string", e["who"]["country"]) &&
                    evaluate(typeof e["who"]["id"] === "number", `${argumentName}["data"][${i0}]["who"]["id"]`, "number", e["who"]["id"]) &&
                    evaluate(typeof e["who"]["name"] === "string", `${argumentName}["data"][${i0}]["who"]["name"]`, "string", e["who"]["name"]) &&
                    evaluate((e["who"]["steam"] !== null &&
                        typeof e["who"]["steam"] === "object" ||
                        typeof e["who"]["steam"] === "function") &&
                        evaluate(typeof e["who"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["who"]["steam"]["avatar"]`, "string", e["who"]["steam"]["avatar"]) &&
                        evaluate(typeof e["who"]["steam"]["id"] === "string", `${argumentName}["data"][${i0}]["who"]["steam"]["id"]`, "string", e["who"]["steam"]["id"]) &&
                        evaluate(typeof e["who"]["steam"]["id3"] === "string", `${argumentName}["data"][${i0}]["who"]["steam"]["id3"]`, "string", e["who"]["steam"]["id3"]) &&
                        evaluate(typeof e["who"]["steam"]["id64"] === "string", `${argumentName}["data"][${i0}]["who"]["steam"]["id64"]`, "string", e["who"]["steam"]["id64"]), `${argumentName}["data"][${i0}]["who"]["steam"]`, "import(\"./types/player/playerSteamData\").PlayerSteamData", e["who"]["steam"]) &&
                    evaluate(typeof e["who"]["url"] === "string", `${argumentName}["data"][${i0}]["who"]["url"]`, "string", e["who"]["url"]), `${argumentName}["data"][${i0}]["who"]`, "import(\"./types/team/teamTransferPlayer\").TeamTransferPlayer", e["who"]) &&
                evaluate((e["team"] !== null &&
                    typeof e["team"] === "object" ||
                    typeof e["team"] === "function") &&
                    evaluate(typeof e["team"]["id"] === "number", `${argumentName}["data"][${i0}]["team"]["id"]`, "number", e["team"]["id"]) &&
                    evaluate(typeof e["team"]["name"] === "string", `${argumentName}["data"][${i0}]["team"]["name"]`, "string", e["team"]["name"]) &&
                    evaluate((e["team"]["steam"] !== null &&
                        typeof e["team"]["steam"] === "object" ||
                        typeof e["team"]["steam"] === "function") &&
                        evaluate(typeof e["team"]["steam"]["avatar"] === "string", `${argumentName}["data"][${i0}]["team"]["steam"]["avatar"]`, "string", e["team"]["steam"]["avatar"]) &&
                        evaluate((e["team"]["steam"]["group"] === null ||
                            typeof e["team"]["steam"]["group"] === "string"), `${argumentName}["data"][${i0}]["team"]["steam"]["group"]`, "string | null", e["team"]["steam"]["group"]), `${argumentName}["data"][${i0}]["team"]["steam"]`, "{ avatar: string; group: string | null; }", e["team"]["steam"]) &&
                    evaluate(typeof e["team"]["type"] === "string", `${argumentName}["data"][${i0}]["team"]["type"]`, "string", e["team"]["type"]) &&
                    evaluate(typeof e["team"]["url"] === "string", `${argumentName}["data"][${i0}]["team"]["url"]`, "string", e["team"]["url"]), `${argumentName}["data"][${i0}]["team"]`, "import(\"./types/player/playerTransferTeam\").PlayerTransferTeam", e["team"]) &&
                evaluate((e["time"] === null ||
                    typeof e["time"] === "number"), `${argumentName}["data"][${i0}]["time"]`, "number | null", e["time"]) &&
                evaluate((e["type"] === "left" ||
                    e["type"] === "joined"), `${argumentName}["data"][${i0}]["type"]`, "\"left\" | \"joined\"", e["type"])
            ), `${argumentName}["data"]`, "import(\"./types/team/teamTransferData\").TeamTransferData[]", typedObj["data"]) &&
        evaluate((typedObj["links"] !== null &&
            typeof typedObj["links"] === "object" ||
            typeof typedObj["links"] === "function") &&
            evaluate(typeof typedObj["links"]["first"] === "string", `${argumentName}["links"]["first"]`, "string", typedObj["links"]["first"]) &&
            evaluate(typeof typedObj["links"]["last"] === "string", `${argumentName}["links"]["last"]`, "string", typedObj["links"]["last"]) &&
            evaluate((typedObj["links"]["prev"] === null ||
                typeof typedObj["links"]["prev"] === "string"), `${argumentName}["links"]["prev"]`, "string | null", typedObj["links"]["prev"]) &&
            evaluate((typedObj["links"]["next"] === null ||
                typeof typedObj["links"]["next"] === "string"), `${argumentName}["links"]["next"]`, "string | null", typedObj["links"]["next"]), `${argumentName}["links"]`, "{ first: string; last: string; prev: string | null; next: string | null; }", typedObj["links"]) &&
        evaluate((typedObj["meta"] !== null &&
            typeof typedObj["meta"] === "object" ||
            typeof typedObj["meta"] === "function") &&
            evaluate(typeof typedObj["meta"]["current_page"] === "number", `${argumentName}["meta"]["current_page"]`, "number", typedObj["meta"]["current_page"]) &&
            evaluate((typedObj["meta"]["from"] === null ||
                typeof typedObj["meta"]["from"] === "number"), `${argumentName}["meta"]["from"]`, "number | null", typedObj["meta"]["from"]) &&
            evaluate(typeof typedObj["meta"]["last_page"] === "number", `${argumentName}["meta"]["last_page"]`, "number", typedObj["meta"]["last_page"]) &&
            evaluate(Array.isArray(typedObj["meta"]["links"]) &&
                typedObj["meta"]["links"].every((e: any, i0: number) =>
                    (e !== null &&
                        typeof e === "object" ||
                        typeof e === "function") &&
                    evaluate((e["url"] === null ||
                        typeof e["url"] === "string"), `${argumentName}["meta"]["links"][${i0}]["url"]`, "string | null", e["url"]) &&
                    evaluate(typeof e["label"] === "string", `${argumentName}["meta"]["links"][${i0}]["label"]`, "string", e["label"]) &&
                    evaluate(typeof e["active"] === "boolean", `${argumentName}["meta"]["links"][${i0}]["active"]`, "boolean", e["active"])
                ), `${argumentName}["meta"]["links"]`, "import(\"./types/common/link\").Link[]", typedObj["meta"]["links"]) &&
            evaluate(typeof typedObj["meta"]["path"] === "string", `${argumentName}["meta"]["path"]`, "string", typedObj["meta"]["path"]) &&
            evaluate(typeof typedObj["meta"]["per_page"] === "number", `${argumentName}["meta"]["per_page"]`, "number", typedObj["meta"]["per_page"]) &&
            evaluate((typedObj["meta"]["to"] === null ||
                typeof typedObj["meta"]["to"] === "number"), `${argumentName}["meta"]["to"]`, "number | null", typedObj["meta"]["to"]) &&
            evaluate(typeof typedObj["meta"]["total"] === "number", `${argumentName}["meta"]["total"]`, "number", typedObj["meta"]["total"]), `${argumentName}["meta"]`, "import(\"./types/common/multiPageSmall\").MultiPageSmall", typedObj["meta"])
    )
}

export function isEtf2lWhitelists(obj: unknown, argumentName: string = "etf2lWhitelistsG"): obj is Etf2lWhitelistsG {
    const typedObj = obj as Etf2lWhitelistsG
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        evaluate((typedObj["whitelists"] !== null &&
            typeof typedObj["whitelists"] === "object" ||
            typeof typedObj["whitelists"] === "function") &&
            Object.entries<any>(typedObj["whitelists"])
                .every(([key, value]) => (evaluate((value !== null &&
                    typeof value === "object" ||
                    typeof value === "function") &&
                    evaluate(typeof value["filename"] === "string", `${argumentName}["whitelists"] value["filename"]`, "string", value["filename"]) &&
                    evaluate(typeof value["last_change"] === "number", `${argumentName}["whitelists"] value["last_change"]`, "number", value["last_change"]) &&
                    evaluate(typeof value["url"] === "string", `${argumentName}["whitelists"] value["url"]`, "string", value["url"]), `${argumentName}["whitelists"]["${key.toString().replace(/"/g, '\\"')}"]`, "{ filename: string; last_change: number; url: string; }", value) &&
                    evaluate(typeof key === "string", `${argumentName}["whitelists"] (key: "${key.toString().replace(/"/g, '\\"')}")`, "string", key))), `${argumentName}["whitelists"]`, "import(\"./types/whitelists/whitelists\").Whitelists", typedObj["whitelists"]) &&
        evaluate((typedObj["status"] !== null &&
            typeof typedObj["status"] === "object" ||
            typeof typedObj["status"] === "function") &&
            evaluate(typeof typedObj["status"]["code"] === "number", `${argumentName}["status"]["code"]`, "number", typedObj["status"]["code"]) &&
            evaluate(typeof typedObj["status"]["message"] === "string", `${argumentName}["status"]["message"]`, "string", typedObj["status"]["message"]), `${argumentName}["status"]`, "import(\"./types/common/status\").Status", typedObj["status"])
    )
}
