export type QueryParams = Record<string, string | number | undefined>;

export function withQuery(pathname: string, params: QueryParams) {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (
      value === undefined ||
      value === "" ||
      (key === "page" && Number(value) <= 1)
    )
      continue;
    search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `${pathname}?${query}` : pathname;
}
