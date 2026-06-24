import type { Router } from "vue-router";
import Landing from "./components/Landing.vue";
import Landing2 from "./components/Landing2.vue";
import OmOss from "./components/OmOss.vue";
import DoneraMat from "./components/DoneraMat.vue";
import TaEmotMat from "./components/TaEmotMat.vue";
import KontaktaOss from "./components/KontaktaOss.vue";
import StartaEnGrupp from "./components/StartaEnGrupp.vue";

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
    router.addRoute({
      name: "om-oss",
      path: "/om-oss",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: OmOss,
    });
    router.addRoute({
      name: "donera-mat",
      path: "/donera-mat",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: DoneraMat,
    });
    router.addRoute({
      name: "ta-emot-mat",
      path: "/ta-emot-mat",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: TaEmotMat,
    });
    router.addRoute({
      name: "kontakta-oss",
      path: "/kontakta-oss",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: KontaktaOss,
    });
    router.addRoute({
      name: "starta-en-grupp",
      path: "/starta-en-grupp",
      meta: {
        fullpage: true,
        breadcrumbs: [
          {
            type: "siteName",
          },
        ],
      },
      component: StartaEnGrupp,
    });
  },
};
