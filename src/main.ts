import type { Router } from "vue-router";
import type { Component } from "vue";
import CmsPage from "./components/CmsPage.vue";
import GuidePage from "./components/GuidePage.vue";
import Landing from "./components/Landing.vue";
import DoneraMat from "./components/DoneraMat.vue";
import KontaktaOss from "./components/KontaktaOss.vue";
import AdminPage from "./components/admin/AdminPage.vue";

const meta = {
  fullpage: true,
  breadcrumbs: [{ type: "siteName" }],
};

// Generic CMS-driven pages: rendered by CmsPage with their slug as a prop.
const cmsPages: { name: string; path: string; slug: string }[] = [
  { name: "landing2", path: "/welcome2", slug: "landing2" },
  { name: "om-oss", path: "/om-oss", slug: "om-oss" },
  { name: "ta-emot-mat", path: "/ta-emot-mat", slug: "ta-emot-mat" },
  { name: "starta-en-grupp", path: "/starta-en-grupp", slug: "starta-en-grupp" },
];

// Guide (article) pages: rendered by GuidePage with their slug as a prop.
const guideSlugs: string[] = [
  "guide-samarbete-butiker",
  "guide-verksamheten-igang",
  "guide-mathantering",
];

// Pages with a dedicated component (bespoke layout or non-CMS).
const customPages: { name: string; path: string; component: Component }[] = [
  { name: "landing", path: "/welcome", component: Landing },
  { name: "donera-mat", path: "/donera-mat", component: DoneraMat },
  { name: "kontakta-oss", path: "/kontakta-oss", component: KontaktaOss },
  { name: "fss-admin", path: "/fss-admin", component: AdminPage },
];

export default {
  boot({ router }: { router: Router }) {
    for (const { name, path, slug } of cmsPages) {
      router.addRoute({ name, path, meta, component: CmsPage, props: { slug } });
    }
    for (const slug of guideSlugs) {
      router.addRoute({
        name: slug,
        path: `/${slug}`,
        meta,
        component: GuidePage,
        props: { slug },
      });
    }
    for (const { name, path, component } of customPages) {
      router.addRoute({ name, path, meta, component });
    }
  },
};
