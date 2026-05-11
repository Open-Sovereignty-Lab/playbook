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
      ],
      // customCss is added in Task 4 — leave it out for now
    }),
  ],
});
