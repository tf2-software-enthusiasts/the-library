/**
 * Provides methods used to interact with the [logs.tf api](https://logs.tf/about)
 *
 * @example Fetching the JSON for a log
 * ```ts
 * const logJson = await getById("3750052");
 *
 * console.log(logJson);
 * ```
 * @module
 */

export * from "./logstf.ts";
