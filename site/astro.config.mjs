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
        { label: 'Guides', autogenerate: { directory: 'docs/guides' } },
        { label: 'Templates', autogenerate: { directory: 'docs/templates' } },
        { label: 'Tools', autogenerate: { directory: 'docs/tools' } },
        { label: 'Case Studies', autogenerate: { directory: 'docs/case-studies' } },
         // ------------------------------------------------------------------
        // MODULE 0: Sovereignty in the Digital Age
        // ------------------------------------------------------------------
        {
          label: "Module 0: Sovereignty in the Digital Age",
          items: [
            { slug: "docs/module-0" },                        // index.md (Overview)
            { slug: "docs/module-0/tribal-sovereignty" },      // 0.1
            { slug: "docs/module-0/data-sovereignty" },        // 0.2
            { slug: "docs/module-0/digital-self-determination" }, // 0.3
            { slug: "docs/module-0/ocap-analysis" },           // OCAP deep-dive
            { slug: "docs/module-0/digital-colonization" },    // 0.4
            { slug: "docs/module-0/glossary" },                // Glossary
          ],
        },

        // ------------------------------------------------------------------
        // PHASE 1: PRE-WORK (placeholder -- add pages as content is ready)
        // ------------------------------------------------------------------
        {
          label: "Phase 1: Pre-Work",
          collapsed: true,
          items: [
            { slug: "docs/phase-1" },                          // index.md (Overview)
            // { slug: "docs/phase-1/organizational-readiness" },
            // { slug: "docs/phase-1/data-classification" },
            // { slug: "docs/phase-1/policy-legal-framework" },
            // { slug: "docs/phase-1/ai-literacy" },
            // { slug: "docs/phase-1/procurement-readiness" },
          ],
        },

        // ------------------------------------------------------------------
        // PHASE 2: EXECUTION (placeholder)
        // ------------------------------------------------------------------
        {
          label: "Phase 2: Execution",
          collapsed: true,
          items: [
            { slug: "docs/phase-2" },
          ],
        },

        // ------------------------------------------------------------------
        // PHASE 3: MONITORING AND EVALUATION (placeholder)
        // ------------------------------------------------------------------
        {
          label: "Phase 3: Monitoring and Evaluation",
          collapsed: true,
          items: [
            { slug: "docs/phase-3" },
          ],
        },

        // ------------------------------------------------------------------
        // EXISTING RESOURCE SECTIONS (preserved from current config)
        // ------------------------------------------------------------------
        {
          label: "Guides",
          autogenerate: { directory: "docs/guides" },
        },
        {
          label: "Templates",
          autogenerate: { directory: "docs/templates" },
        },
        {
          label: "Tools",
          autogenerate: { directory: "docs/tools" },
        },
        {
          label: "Case Studies",
          autogenerate: { directory: "docs/case-studies" },
        },
      ],
    }),
  ],
});
