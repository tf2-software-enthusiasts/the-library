export type PagedBanOptions = {
  take: number;
  skip: number;
};

export type BanPagedResponse = {
  steamId: string;
  alias: string;
  expiresAt: Date;
  createdAt: Date;
  reason: string;
};
