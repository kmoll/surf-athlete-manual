import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import cleanMarkdownLinks from './src/plugins/clean-markdown-links.mjs';

const systemSection = (label, directory) => ({
  label,
  items: [{ slug: directory }],
});

export default defineConfig({
  markdown: {
    processor: satteri({ mdastPlugins: [cleanMarkdownLinks] }),
  },
  integrations: [
    starlight({
      title: 'Surf Athlete Manual',
      description:
        'A living system for building a body that lets you surf better every year.',
      favicon: '/favicon.svg',
      logo: {
        src: './src/assets/surf-athlete-mark.svg',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/kmoll/surf-athlete-manual',
        },
      ],
      editLink: {
        baseUrl:
          'https://github.com/kmoll/surf-athlete-manual/edit/main/',
      },
      lastUpdated: true,
      customCss: ['./src/styles/manual.css'],
      components: {
        Footer: './src/components/SiteFooter.astro',
      },
      head: [
        {
          tag: 'meta',
          attrs: { name: 'theme-color', content: '#f7fbfb' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      markdown: {
        processedDirs: ['./docs'],
      },
      sidebar: [
        { label: 'Home', link: '/' },
        {
          label: 'Foundations',
          items: [
            { slug: 'foundations' },
            { slug: 'foundations/project-north-star' },
            { slug: 'foundations/surf-athlete' },
            { slug: 'foundations/glossary' },
            { slug: 'foundations/terminology' },
            { slug: 'foundations/writing-standards' },
          ],
        },
        {
          label: 'Application',
          items: [
            { slug: 'application/overview' },
            { slug: 'application/create-ai-project' },
            { slug: 'application/create-private-workspace' },
            { slug: 'application/starter-kit' },
            { slug: 'application/use-an-ai-assistant' },
            { slug: 'application/privacy' },
            { slug: 'application/prompts' },
          ],
        },
        systemSection('Surf Performance', 'surf-performance'),
        {
          label: 'Assessment',
          items: [
            { slug: 'assessment' },
            { slug: 'assessment/movement-assessment' },
            { slug: 'assessment/strength-assessment' },
            { slug: 'assessment/conditioning-assessment' },
            { slug: 'assessment/paddle-capacity-assessment' },
          ],
        },
        {
          label: 'Recovery',
          items: [
            { slug: 'recovery' },
            { slug: 'recovery/readiness-guidance' },
          ],
        },
        systemSection('Movement', 'movement'),
        systemSection('Mobility', 'mobility'),
        systemSection('Strength', 'strength'),
        systemSection('Conditioning', 'conditioning'),
        systemSection('Surf Athleticism', 'surf-athleticism'),
        systemSection('Nutrition', 'nutrition'),
        systemSection('Programming', 'programming'),
        systemSection('Exercise Library', 'exercise-library'),
        {
          label: 'Decisions',
          collapsed: true,
          items: [
            { slug: 'decisions' },
            { slug: 'decisions/0001-recovery-first' },
            { slug: 'decisions/0002-paddling-primary-conditioning' },
            { slug: 'decisions/0003-relative-strength-over-size' },
            { slug: 'decisions/0004-public-private-separation' },
            { slug: 'decisions/0005-north-star-is-canonical' },
            { slug: 'decisions/0006-markdown-is-source-of-truth' },
            { slug: 'decisions/0007-programs-reference-systems' },
            { slug: 'decisions/0008-remove-separate-philosophy-section' },
            { slug: 'decisions/0009-application-layer-and-starter-kit' },
            { slug: 'decisions/0010-ai-project-is-primary-application-path' },
            { slug: 'decisions/0011-astro-starlight-cloudflare' },
          ],
        },
        {
          label: 'Research',
          collapsed: true,
          items: [
            { slug: 'research' },
            { slug: 'research/recovery-readiness-research' },
          ],
        },
        systemSection('References', 'references'),
        {
          label: 'Appendices',
          collapsed: true,
          items: [
            { slug: 'appendices' },
            { slug: 'appendices/health-safety-disclaimer' },
          ],
        },
      ],
    }),
  ],
});
