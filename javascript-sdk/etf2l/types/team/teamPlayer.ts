import type { PlayerSteamData } from "../player/mod.ts";

export type TeamPlayer = {
    country: string;
    id: number;
    name: string;
    role: string;
    steam: PlayerSteamData
    url: string;
};