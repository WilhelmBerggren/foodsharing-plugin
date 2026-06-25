// Mirror of the foodsharing-cms zod schema (src/schema.ts). Keep in sync.
// The backend is the source of truth and validates on write.

export interface HeroButton {
  label: string;
  style: "primary" | "secondary";
  href?: string;
}

export interface Hero {
  banner: string; // image path ("/uploads/..") or absolute URL
  headingLines: string[];
  subtitle?: string;
  buttons: HeroButton[];
}

export interface Section {
  title: string;
  text: string[];
  variant: "even" | "odd";
  bgImage?: string;
  bannerImg?: string;
  hasButton: boolean;
  buttonText?: string;
}

export interface GenericPage {
  kind: "generic";
  slug: string;
  title: string;
  hero?: Hero;
  sections: Section[];
  showGroups: boolean;
}

// ---- Donera (rich, fixed-structure) page ----------------------------------

export type IconName =
  | "calendar"
  | "apple-pail"
  | "delivery-box"
  | "handshake"
  | "trash"
  | "tree"
  | "thumbs-up";

export interface IconItem {
  icon: IconName;
  text: string;
}

export interface Cta {
  title: string;
  text: string;
  buttonLabel: string;
  buttonHref: string;
}

export interface DoneraPage {
  kind: "donera";
  slug: string;
  title: string;
  hero: { title: string; subtitle: string };
  intro: { title: string; paragraphs: string[]; lead: string };
  steps: IconItem[];
  benefitsTitle: string;
  benefits: IconItem[];
  temporary: Cta;
  contact: Cta;
}

export type Page = GenericPage | DoneraPage;

/** Icon choices offered in the editor (label is Swedish for the UI). */
export const ICON_OPTIONS: { name: IconName; label: string }[] = [
  { name: "calendar", label: "Kalender" },
  { name: "apple-pail", label: "Hink med mat" },
  { name: "delivery-box", label: "Leveranslåda" },
  { name: "handshake", label: "Handslag" },
  { name: "trash", label: "Soptunna" },
  { name: "tree", label: "Träd" },
  { name: "thumbs-up", label: "Tumme upp" },
];

export function emptyPage(slug: string): GenericPage {
  return { kind: "generic", slug, title: "", sections: [], showGroups: false };
}

export function emptySection(): Section {
  return { title: "", text: [""], variant: "even", hasButton: false };
}

export function emptyIconItem(): IconItem {
  return { icon: "calendar", text: "" };
}
