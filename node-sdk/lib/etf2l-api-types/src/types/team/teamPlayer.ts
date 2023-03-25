import type { PlayerSteamData } from "types/player";

export type TeamPlayer = {
    country: string;
    id: number;
    name: string;
    role: string;
    steam: PlayerSteamData
    url: string;
};