// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://open-sovereignty-lab.github.io',
  base: '/playbook',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: 'OSL Playbook',
      description: 'Tribal Data Sovereignty Cloud Playbook',
      disable404Route: true,
      customCss: ['./src/styles/theme.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Open-Sovereignty-Lab/playbook',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Open-Sovereignty-Lab/playbook/edit/main/site/',
      },
      sidebar: [
        // ------------------------------------------------------------------
        // CURATED LEARNING PATH (Module 0 + Phases)
        //
        // Each group keeps a hand-written label, but its pages are pulled in
        // with `autogenerate` and ordered by each page's `sidebar.order`
        // frontmatter. That means adding or reordering a page is done in the
        // page's frontmatter -- this config is NOT touched.
        //
        // Do NOT switch these back to manual `items: [{ slug }]` lists, and do
        // NOT autogenerate their shared parent (docs/guides): either approach
        // lists the same pages a second time and duplicates the sidebar.
        // ------------------------------------------------------------------
        {
          label: "Module 0: Sovereignty in the Digital Age",
          autogenerate: { directory: "docs/guides/module-0" },
        },
        {
          label: "Phase 1: Pre-Work",
          collapsed: true,
          autogenerate: { directory: "docs/guides/phase-1" },
        },
        {
          label: "Phase 2: Execution",
          collapsed: true,
          autogenerate: { directory: "docs/guides/phase-2" },
        },
        {
          label: "Phase 3: Monitoring and Evaluation",
          collapsed: true,
          autogenerate: { directory: "docs/guides/phase-3" },
        },

        // ------------------------------------------------------------------
        // RESOURCE SECTIONS
        //
        // "Guides" is an explicit landing + reference list, NOT an
        // autogenerate of docs/guides -- that directory contains the module-0/
        // and phase-*/ folders above, so autogenerating it would list every
        // module and phase page a second time. Templates / Tools / Case
        // Studies are flat folders, so they autogenerate cleanly: drop a file
        // in and it appears.
        // ------------------------------------------------------------------
        {
          label: "Guides",
          items: [
            { slug: "docs/guides" },               // Guides landing (index.md)
            { slug: "docs/guides/example-guide" }, // Contributor reference page
          ],
        },
        { label: "Templates", autogenerate: { directory: "docs/templates" } },
        { label: "Tools", autogenerate: { directory: "docs/tools" } },
        { label: "Case Studies", autogenerate: { directory: "docs/case-studies" } },
      ],
    }),
  ],
});
