import axios from "axios";
import { CMS_BASE } from "./config";
import type { Page } from "./types";

const api = axios.create({ baseURL: CMS_BASE });

// ---- Editor auth ----------------------------------------------------------
// The "password" is sent as a bearer token. We keep it in sessionStorage so it
// survives navigation within the tab but isn't persisted long-term.

const TOKEN_KEY = "fss-cms-token";

export function getToken(): string | null {
  try {
    return sessionStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

export function setToken(token: string | null): void {
  try {
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    /* sessionStorage unavailable — auth simply won't persist */
  }
}

function authHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

/** Verify a password against the backend; stores it on success. */
export async function login(password: string): Promise<boolean> {
  try {
    await api.get("/api/auth/check", {
      headers: { Authorization: `Bearer ${password}` },
    });
    setToken(password);
    return true;
  } catch {
    return false;
  }
}

export function logout(): void {
  setToken(null);
}

// ---- Content --------------------------------------------------------------

export async function fetchPage(slug: string): Promise<Page> {
  const { data } = await api.get<Page>(`/api/pages/${slug}`);
  return data;
}

export async function fetchPages(): Promise<Page[]> {
  const { data } = await api.get<Page[]>("/api/pages");
  return data;
}

export async function savePage(page: Page): Promise<Page> {
  const { data } = await api.put<Page>(`/api/pages/${page.slug}`, page, {
    headers: authHeaders(),
  });
  return data;
}

/** Uploads an image and returns its stored path (e.g. "/uploads/x.png"). */
export async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const { data } = await api.post<{ url: string }>("/api/uploads", form, {
    headers: authHeaders(),
  });
  return data.url;
}

/**
 * Resolve a stored image reference to a URL the browser can load.
 * Absolute URLs pass through; "/uploads/.." paths are prefixed with the
 * CMS base so they work regardless of where the plugin is mounted.
 */
export function assetUrl(ref: string | undefined): string {
  if (!ref) return "";
  if (/^https?:\/\//.test(ref)) return ref;
  if (ref.startsWith("/uploads/")) return `${CMS_BASE}${ref}`;
  return ref;
}
