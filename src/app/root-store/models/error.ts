interface BaseError {
  error: string;
  code: string;
}

export interface APIError extends BaseError {}
