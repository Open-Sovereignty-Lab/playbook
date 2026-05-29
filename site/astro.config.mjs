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
        // INTRODUCTION
        //
        // The foundational framing (Module 0) and the three implementation
        // Phases live under docs/introduction/ and are nested inside this single
        // top-level "Introduction" group: the section landing, then the curated
        // Module 0 and Phase sub-groups. This is the orientation section, so it
        // sits first in the nav, ahead of the supporting resource sections.
        //
        // Each sub-group keeps a hand-written label but pulls its pages from the
        // folder with `autogenerate`, ordered by each page's `sidebar.order`
        // frontmatter -- so adding or reordering a page is done in that page's
        // frontmatter, NOT here.
        //
        // Do NOT autogenerate the parent `docs/introduction` directory: it
        // contains the module-0/ and phase-*/ folders below, so autogenerating
        // it would list every module and phase page a second time and duplicate
        // the nav. Rule: each directory is owned by exactly one sidebar entry.
        // ------------------------------------------------------------------
        {
          label: "Introduction",
          items: [
            { slug: "docs/introduction" }, // Section landing (index.md)
            {
              label: "Module 0: Sovereignty in the Digital Age",
              autogenerate: { directory: "docs/introduction/module-0" },
            },
            {
              label: "Phase 1: Pre-Work",
              collapsed: true,
              autogenerate: { directory: "docs/introduction/phase-1" },
            },
            {
              label: "Phase 2: Execution",
              collapsed: true,
              autogenerate: { directory: "docs/introduction/phase-2" },
            },
            {
              label: "Phase 3: Monitoring and Evaluation",
              collapsed: true,
              autogenerate: { directory: "docs/introduction/phase-3" },
            },
          ],
        },

        // ------------------------------------------------------------------
        // GUIDES
        //
        // Long-form guidance plus the contributor reference page. docs/guides/
        // is now a flat folder (the module-0/ and phase-*/ content moved to the
        // Introduction section above), so it autogenerates cleanly: drop a guide
        // in and it appears, ordered by each page's `sidebar.order` frontmatter.
        // ------------------------------------------------------------------
        { label: "Guides", autogenerate: { directory: "docs/guides" } },

        // ------------------------------------------------------------------
        // OTHER RESOURCE SECTIONS
        // Flat folders -- autogenerate cleanly: drop a file in and it appears.
        // ------------------------------------------------------------------
        { label: "Templates", autogenerate: { directory: "docs/templates" } },
        { label: "Tools", autogenerate: { directory: "docs/tools" } },
        { label: "Case Studies", autogenerate: { directory: "docs/case-studies" } },
      ],
    }),
  ],
});
