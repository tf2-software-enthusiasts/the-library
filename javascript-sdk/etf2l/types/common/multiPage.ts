import type { Link } from "./link.ts";
import type { MultiPageSmall } from "./multiPageSmall.ts";

export type MultiPage = MultiPageSmall & {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
