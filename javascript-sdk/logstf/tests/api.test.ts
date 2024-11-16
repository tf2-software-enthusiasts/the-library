import { getById, search } from "../mod.ts";
import { assertEquals, assertExists, assertObjectMatch } from "jsr:@std/assert";

Deno.test("Getting a valid log succeeds", async () => {
  const log = await getById("3750052");

  assertEquals(log.success, true);
  assertExists(log.chat);
  assertObjectMatch(log.info, {
    map: "cp_metalworks_f5",
    supplemental: true,
    total_length: 932,
    hasRealDamage: true,
    hasWeaponDamage: true,
    hasAccuracy: true,
    hasHP: true,
    hasHP_real: true,
    hasHS: false,
    hasHS_hit: false,
    hasBS: false,
    hasCP: true,
    hasSB: false,
    hasDT: true,
    hasAS: true,
    hasHR: true,
    hasIntel: false,
    AD_scoring: false,
    notifications: [],
    title: "na.serveme.tf #574912: RED vs BLU",
    date: 1731040571,
    uploader: {
      id: "76561197960497430",
      name: "Arie - VanillaTF2.org",
      info: "LogsTF 2.6.0",
    },
  });
});

Deno.test("Getting an invalid log fails", async () => {
  const log = await getById("999999999999999");

  assertEquals(log.success, false);
  assertEquals(log.error, "Log not found.");
});

Deno.test("Searching logs works as expected", async () => {
  const searchA = await search({ limit: 1 });

  assertEquals(searchA.success, true);
  assertEquals(1, searchA.logs.length);

  const searchB = await search({ limit: 1, map: null });

  assertEquals(searchB.success, true);
  assertEquals(1, searchB.logs.length);
});
