export type SearchResponse<T> = {
  results: T[];
  count: number;
  totalHitCount: number;
};
