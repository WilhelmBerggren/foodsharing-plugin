import type { Router } from "vue-router";
import Landing from "./components/Landing.vue";
import Landing2 from "./components/Landing2.vue";

export default {
  boot({ router }: { router: Router }) {
    router.addRoute({
      name: "landing",
      path: "/welcome",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: Landing,
    });
    router.addRoute({
      name: "landing2",
      path: "/welcome2",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: Landing2,
    });
  },
};
