import type { Link } from "./link.ts";

export type MultiPageSmall = {
  current_page: number;
  from: number | null;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number | null;
  total: number;
};
