// Mirror of the foodsharing-cms zod schema (src/schema.ts). Keep in sync.
// The backend is the source of truth and validates on write, so these types
// describe what the plugin can rely on receiving.

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
  text: string[]; // one entry per paragraph; "" renders as spacing
  variant: "even" | "odd";
  bgImage?: string;
  bannerImg?: string;
  hasButton: boolean;
  buttonText?: string;
}

export interface Page {
  slug: string;
  title: string;
  hero?: Hero;
  sections: Section[];
  showGroups: boolean;
}

/** A blank page used as the starting point in the editor. */
export function emptyPage(slug: string): Page {
  return { slug, title: "", sections: [], showGroups: false };
}

export function emptySection(): Section {
  return { title: "", text: [""], variant: "even", hasButton: false };
}
