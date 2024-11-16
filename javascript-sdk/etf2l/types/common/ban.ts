export type SmallBan = {
    start: number;
    end: number;
    reason: string;
};

export type Ban = SmallBan & {
    name: string;
    steamid: string;
    steamid64: string;
    profile: string;
    expired: boolean;
};
