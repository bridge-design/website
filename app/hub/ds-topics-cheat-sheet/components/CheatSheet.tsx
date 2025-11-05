import React from 'react'

type TopicProps = {
  title: string
  items: string[]
}

const Topic = ({ title, items }: TopicProps) => (
  <div className="prose mb-6">
    <h5>{title}</h5>
    <ul className="space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
)

export default function CheatSheet() {
  const designTopics = [
    {
      title: 'Foundations & Principles',
      items: [
        'Core design values: clarity, consistency, accessibility, efficiency',
        'Visual language: color, typography, iconography, spacing',
        'Accessibility as a baseline, not an afterthought',
        'Brand integration: how to adapt system for multiple brands',
      ],
    },
    {
      title: 'Tokens & Theming',
      items: [
        'Token taxonomy: global, semantic, component-level tokens',
        'Theming strategy: light/dark, brand, seasonal themes',
        'Token delivery: JSON, CSS custom properties, platform exports',
        'Versioning and deprecation of tokens',
      ],
    },
    {
      title: 'Component Design & UX Patterns',
      items: [
        'Component anatomy: slots, states, variants, extensibility',
        'UX patterns: navigation, input, feedback, data display',
        'Micro-interactions: motion, feedback, transitions',
        'Accessibility patterns: keyboard navigation, ARIA',
        'Content strategy: localization, truncation, dynamic content',
      ],
    },
    {
      title: 'Design System Operations',
      items: [
        'Contribution model: open/closed, design reviews',
        'Governance: design council, working groups, decision logs',
        'Adoption playbook: onboarding guides, training, office hours',
        'Metrics: design system health, adoption, satisfaction',
      ],
    },
    {
      title: 'Tooling & Documentation',
      items: [
        'Living documentation: automated previews, guidelines',
        'Figma plugins: token sync, linting, accessibility checks',
        'Design handoff: inspect mode, code snippets, redlines',
        'Design QA: visual regression, accessibility audits',
      ],
    },
    {
      title: 'AI & Automation',
      items: [
        'Design-to-code: Figma-to-component conversion tools',
        'LLM integration: chatbots using design system components',
        'AI guardrails: ensuring generated UI follows system patterns',
      ],
    },
  ]

  const engineeringTopics = [
    {
      title: 'Architecture & Infrastructure',
      items: [
        'Monorepo structure: packages, utilities, shared configs',
        'Distribution: npm, CDN, private registries, tokens pipeline',
        'Platform support: web, mobile, native, email',
        'Performance: lazy loading, bundle splitting, tree-shaking',
        'Security: dependency scanning, supply chain, sandboxing',
      ],
    },
    {
      title: 'Component Engineering',
      items: [
        'API design: composability, controlled/uncontrolled',
        'Extensibility: slots, overrides, custom renderers',
        'Accessibility: semantic HTML, ARIA, focus management',
        'Responsiveness: container queries, adaptive layouts',
        'Testing: unit, integration, visual regression',
      ],
    },
    {
      title: 'Automation & Tooling',
      items: [
        'Automated releases: semantic versioning, changelogs',
        'Code quality: linting, static analysis, type safety',
        'Storybook/Docs: MDX stories, interactive playgrounds',
        'CI/CD: preview deployments, visual diffs, auto-publishing',
        'Migration tools: codemods, upgrade guides',
      ],
    },
    {
      title: 'AI & Code Generation',
      items: [
        'MCP server: exposing design system to AI agents',
        'LLM-friendly documentation: structured component specs',
        'AI code review: pattern compliance, best practices',
        'Copilot/AI contexts: design system usage examples',
        'Space-driven development: best practices for AI-assisted development',
      ],
    },
    {
      title: 'Maintenance & Support',
      items: [
        'Issue triage: bug templates, support SLAs',
        'Deprecation policy: sunset timelines, migration paths',
        'Usage analytics: adoption, dead code detection',
        'Community support: office hours, internal champions',
      ],
    },
    {
      title: 'Governance & Collaboration',
      items: [
        'Contribution workflow: PR templates, code owners',
        'RFC process: proposal, discussion, implementation',
        'Release management: canary, beta, stable channels',
        'Cross-team collaboration: ambassadors, shared OKRs',
      ],
    },
  ]

  return (
    <>
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="mb-6 text-center text-4xl">Design Systems Cheat Sheet</h1>
        <h3 className="animate-reveal mx-auto mt-10 text-center font-2xl text-2xl">
          Everything you need to know about Design Systems
        </h3>
      </div>

      {/* Main Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Design Column */}
        <div className="rounded-2xl bg-white dark:bg-gray-800">
          <h4 className="mb-6 rounded-lg bg-[var(--btg-color-accent-500)] px-4 py-2 text-xl text-white">
            Design Perspective
          </h4>
          <div className="p-6">
            {designTopics.map((topic, index) => (
              <Topic key={index} {...topic} />
            ))}
          </div>
        </div>

        {/* Engineering Column */}
        <div className="rounded-2xl bg-white dark:bg-gray-800">
          <h4 className="mb-6 rounded-lg bg-[var(--btg-color-highlight-700)] px-4 py-2 text-xl text-white">
            Engineering Perspective
          </h4>
          <div className="p-6">
            {engineeringTopics.map((topic, index) => (
              <Topic key={index} {...topic} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
