export interface PageConfig {
  slug: string;
  pageTitle: string;
}

export const pages: PageConfig[] = [
  {
    slug: 'index',
    pageTitle: 'ホーム | My Astro App',
  },
  {
    slug: 'index2',
    pageTitle: 'ホーム2 | My Astro App',
  },
];
