import { PaginationMeta } from "@/app/types/pagination-meta";
import { getCookie } from "./getCookie";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface RequestOptions<TBody = unknown, TResult = unknown> {
  endpoint: string;
  method?: HttpMethod;
  body?: TBody;
  headers?: HeadersInit;
  cache?: RequestCache;
  next?: RequestInit["next"];
  transform?: (data: unknown) => TResult;
}

export interface ApiResponse<T = unknown> {
  message: string;
  data: T;
  meta?: PaginationMeta;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly data?: unknown,
  ) {
    super(message);

    this.name = "ApiError";
  }
}

export async function request<TBody = unknown, TResult = unknown>({
  endpoint,
  method = "GET",
  body,
  headers,
  cache = "no-store",
  next,
  transform,
}: RequestOptions<TBody, TResult>): Promise<TResult> {
  const requestHeaders = new Headers(headers);

  requestHeaders.set("Content-Type", "application/json");

  const csrfToken =
    typeof window !== "undefined" ? getCookie("csrf_token") : undefined;

  if (csrfToken) {
    requestHeaders.set("X-CSRF-Token", csrfToken);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`,
    {
      method,
      cache,
      next,
      credentials: "include",
      headers: requestHeaders,
      body:
        method === "GET" || method === "DELETE"
          ? undefined
          : JSON.stringify(body),
    },
  );

  const contentType = response.headers.get("content-type") ?? "";

  const payload = contentType.includes("application/json")
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    throw new ApiError(
      payload?.message ?? "Request failed.",
      response.status,
      payload,
    );
  }

  const data = (payload as ApiResponse<TResult>).data;

  return transform ? transform(data) : data;
}
