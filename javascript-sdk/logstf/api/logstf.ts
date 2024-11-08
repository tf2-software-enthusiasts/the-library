import type {
  LogById,
  LogSearchRequest,
  LogSearchResponse,
  LogUploadRequest,
  LogUploadResponse,
} from "../types/mod.ts";

/**
 * Gets the URL of the raw log file
 * @param id The id of the log
 * @returns The url of the log's zip file
 *
 * @internal
 */
const getRawLogUrl = (id: string) => `http://logs.tf/logs/log_${id}.log.zip`;

/**
 * The base URL of the for logs.tf
 * @internal
 */
const logsBaseUrl = "https://logs.tf";

/**
 * The logs API url
 * @internal
 */
const logsApiUrl = `${logsBaseUrl}/api/v1`;

/**
 * The logs upload url
 * @internal
 */
const logsUploadUrl = `${logsBaseUrl}/upload`;

/**
 * Gets a log by id
 * @param logId The log id to get
 * @returns {Promise<LogById>} The log json
 */
export async function getById(logId: string): Promise<LogById> {
  if (!logId) {
    throw new Error("LogId cannot be empty!");
  }

  const data = await fetch(`${logsApiUrl}/log/${logId}`);

  return (await data.json()) as LogById;
}

/**
 * Searches for logs that match the filter
 * @param searchRequest The search request
 * @returns {Promise<LogSearchResponse>} The response of the search
 */
export async function search(
  searchRequest: LogSearchRequest,
): Promise<LogSearchResponse> {
  const {
    limit = 1000,
    map = null,
    offset = 0,
    player = [],
    title = null,
    uploader = null,
  } = searchRequest;

  if (limit > 10_000) {
    throw new Error("Cannot take more than 10,000 logs at a time");
  }

  const params = new URLSearchParams([
    ["limit", limit.toString()],
    ["offset", offset.toString()],
  ]);

  if (map) {
    params.append("map", map);
  }

  if (player) {
    params.append("player", player.join(","));
  }

  if (title) {
    params.append("title", title);
  }

  if (uploader) {
    params.append("uploader", uploader);
  }

  const response = await fetch(`${logsApiUrl}/log${params.toString()}`);

  return (await response.json()) as LogSearchResponse;
}

/**
 * Uploads a log to logs.tf
 * @param apiKey The API key
 * @param file The log data to upload
 * @param options The additional information to upload with the log
 * @returns {Promise<LogUploadResponse>} The log upload response
 */
export async function uploadLog(
  apiKey: string,
  file: Blob,
  options: LogUploadRequest
): Promise<LogUploadResponse> {
  const { title, map, updatelog = null, uploader = "node-logs-sdk" } = options;

  if (!apiKey) {
    throw new Error("Expected a valid API key, got a nullish value instead");
  }

  if (title) {
    throw new Error("Title cannot be empty!");
  }

  const body = new FormData();
  const headers = new Headers([["Content-Type", "multipart/form-data"]]);

  body.append("logfile", file);
  body.append("title", title);
  body.append("key", apiKey);
  body.append("uploader", uploader!);

  if (updatelog) {
    body.append("updatelog", updatelog);
  }

  if (map) {
    body.append("map", map);
  }

  const response = await fetch(logsUploadUrl, {
    body,
    headers,
  });

  return (await response.json()) as LogUploadResponse;
}

/**
 * Gets the raw log file for a given log id
 * @param logId The log id
 * @returns {Promise<Blob>} The raw log file
 */
export async function getRawLog(logId: string): Promise<Blob> {
  if (!logId) {
    throw new Error("LogId cannot be empty!");
  }

  const response = await fetch(getRawLogUrl(logId));

  return await response.blob();
}
