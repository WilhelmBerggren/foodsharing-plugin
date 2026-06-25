// Base URL of the foodsharing-cms service.
//
// Recommended: reverse-proxy the CMS under the SAME domain as Karrot (e.g.
// https://foodsharing.se/fss-cms) so requests are same-origin and no CORS is
// needed. Then the default below ("/fss-cms") just works.
//
// Override at build time with VITE_CMS_BASE if you host it elsewhere.
export const CMS_BASE: string =
  (import.meta.env.VITE_CMS_BASE as string | undefined)?.replace(/\/$/, "") ||
  "/fss-cms";
