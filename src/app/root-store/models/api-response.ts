export interface PaginatedAPIResponse {
  count?: number;
  next?: string;
  previous?: string;
  results?: any[];
}
