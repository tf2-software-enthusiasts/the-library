import { fetch, FetchResultTypes, isNullishOrEmpty } from "common";
import type { LogById } from "types/logById";
import type { LogSearchResponse } from "types/logSearch";
import type { LogSearchConfig } from "types/logSearchConfig";
import { URLSearchParams } from "node:url";
import type { LogUploadConfig } from "types/logUploadConfig";
import type { LogUploadResponse } from "types/logUploadResponse";

const getRawLogUrl = (id: string) => `http://logs.tf/logs/log_${id}.log.zip`;

export class LogsTf {
  #logsApiUrl = "https://logs.tf/api/v1";
  #apiKey: string;

  public constructor(apiKey: string) {
    if (isNullishOrEmpty(apiKey)) {
      throw new Error("Expected an API key!");
    }

    this.#apiKey = apiKey;
  }

  public async getById(logId: string) {
    if (isNullishOrEmpty(logId)) {
      throw new Error("LogId cannot be empty!");
    }

    return await fetch<LogById>(
      `${this.#logsApiUrl}/log/${logId}`,
      FetchResultTypes.JSON
    );
  }

  public async search({
    limit = 1000,
    map = null,
    offset = 0,
    player = [],
    title = null,
    uploader = null,
  }: LogSearchConfig) {
    if (limit > 10_000) {
      throw new Error("Cannot take more than 10,000 logs at a time");
    }

    const params = new URLSearchParams([
      ["limit", limit!.toString()],
      ["offset", offset!.toString()],
    ]);

    if (!isNullishOrEmpty(map)) {
      params.append("map", map);
    }

    if (!isNullishOrEmpty(player)) {
      params.append("player", player.join(","));
    }

    if (!isNullishOrEmpty(title)) {
      params.append("title", title);
    }

    if (!isNullishOrEmpty(uploader)) {
      params.append("uploader", uploader);
    }

    return await fetch<LogSearchResponse>(
      `${this.#logsApiUrl}/log${params.toString()}`,
      {},
      FetchResultTypes.JSON
    );
  }

  public async uploadLog(
    file: Blob,
    {
      title,
      map,
      updatelog = null,
      uploader = "node-logs-sdk",
    }: LogUploadConfig
  ) {
    if (isNullishOrEmpty(title)) {
      throw new Error("Title cannot be empty!");
    }

    const body = new FormData();
    const headers = new Headers([["Content-Type", "multipart/form-data"]]);

    body.append("logfile", file);
    body.append("title", title);
    body.append("key", this.#apiKey);
    body.append("uploader", uploader!);

    if (!isNullishOrEmpty(updatelog)) {
      body.append("updatelog", updatelog);
    }

    if (!isNullishOrEmpty(map)) {
      body.append("map", map);
    }

    return await fetch<LogUploadResponse>(
      "http://logs.tf/upload",
      {
        body,
        headers,
      },
      FetchResultTypes.JSON
    );
  }

  public async getRawLog(logId: string) {
    if (isNullishOrEmpty(logId)) {
      throw new Error("LogId cannot be empty!");
    }

    return await fetch(getRawLogUrl(logId), FetchResultTypes.Buffer);
  }
}
