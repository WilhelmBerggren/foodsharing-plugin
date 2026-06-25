# Foodsharing Karrot plugin

This is a [Karrot](https://karrot.world/) plugin which adds tweaks for the instance hosted on [foodsharing.se](https://foodsharing.se)

At present, it replaces the landing page with a basic custom one.

## Content / CMS

Page content (text + images) is managed by the [`foodsharing-cms`](../foodsharing-cms)
service rather than being hardcoded in the components. The plugin fetches each
page's content at runtime and renders it through a single generic component,
and ships a password-protected editor.

- `src/cms/` — config, types, the API client, and the `usePage` vue-query hook.
- `src/components/CmsPage.vue` — generic renderer (hero + body sections + groups).
- `src/components/admin/` — the editor, mounted at the route `/#/fss-admin`.

Set the CMS location with `VITE_CMS_BASE` at build time (defaults to `/fss-cms`,
which assumes the CMS is reverse-proxied under the same domain).

### Which routes are CMS-driven

All routes render from the CMS via `CmsPage` **except** `/welcome`
(`Landing.vue`), which keeps its bespoke layout:

| Route             | Component         | CMS slug          |
| ----------------- | ----------------- | ----------------- |
| `/welcome2`       | `Landing2.vue`    | `landing2`        |
| `/om-oss`         | `OmOss.vue`       | `om-oss`          |
| `/donera-mat`     | `DoneraMat.vue`   | `donera-mat`      |
| `/ta-emot-mat`    | `TaEmotMat.vue`   | `ta-emot-mat`     |
| `/kontakta-oss`   | `KontaktaOss.vue` | `kontakta-oss`    |
| `/starta-en-grupp`| `StartaEnGrupp.vue`| `starta-en-grupp`|
| `/welcome`        | `Landing.vue`     | — (bespoke, not CMS) |

Each CMS-driven component is just:

```vue
<template>
    <CmsPage slug="om-oss" />
</template>
<script lang="ts" setup>
import CmsPage from "./CmsPage.vue";
</script>
```

A matching `data/<slug>.json` must exist in the CMS (the seed script creates one
per route). The route registration in `main.ts` is unchanged.

> Notes:
> - Pages come in two CMS kinds. Most are `generic` (hero + body sections,
>   rendered by `CmsPage`). `donera-mat` is a `donera` page: a fixed rich layout
>   (`DoneraMat.vue`) whose text, button links, and step/benefit items — incl.
>   each item's icon — are CMS-editable via a dedicated editor. Icons are chosen
>   from a fixed set (`CmsIcon.vue` maps names to the SVG/PNG artwork).
> - Hero heading lines support an accent syntax: wrap a word in `*asterisks*`
>   (e.g. `Mer *gemenskap*`) to render it as the italic gold highlight.
> - `Landing.vue` (`/welcome`) has a fully custom design — its own hero with
>   login/signup buttons, an about section with a bulleted list, and a contact
>   footer. It doesn't fit the `hero + BodySection` model, so it's intentionally
>   left as hardcoded markup. Migrating it would need either a richer content
>   model or a dedicated renderer.
