import { useQuery } from "@tanstack/vue-query";
import { toValue, type MaybeRefOrGetter } from "vue";
import { fetchPage, fetchPages } from "./client";
import type { Page } from "./types";

/** Fetch a single page by slug, cached by vue-query. */
export function usePage(slug: MaybeRefOrGetter<string>) {
  return useQuery<Page>({
    queryKey: ["cms-page", () => toValue(slug)],
    queryFn: () => fetchPage(toValue(slug)),
    staleTime: 60_000,
  });
}

/** Fetch the list of all pages (used by the editor's page picker). */
export function usePages() {
  return useQuery<Page[]>({
    queryKey: ["cms-pages"],
    queryFn: fetchPages,
    staleTime: 60_000,
  });
}
