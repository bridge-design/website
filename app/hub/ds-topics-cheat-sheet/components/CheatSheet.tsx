import React from 'react'

type TopicProps = {
  title: string
  items: string[]
  colorClass: string
}

const Topic = ({ title, items, colorClass }: TopicProps) => (
  <div className="mb-6">
    <div className={`text-base font-bold py-2 px-4 rounded-lg mb-3 ${colorClass}`}>
      {title}
    </div>
    <ul className="space-y-2 pl-5">
      {items.map((item, index) => (
        <li
          key={index}
          className="text-gray-600 dark:text-gray-300 relative before:content-['▸'] before:absolute before:left-[-1rem] before:text-primary-500 before:font-bold"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
)

export default function CheatSheet() {
  const designTopics = [
    {
      title: 'Foundations & Principles',
      colorClass: 'bg-primary-500 text-white',
      items: [
        'Core design values: clarity, consistency, accessibility, efficiency',
        'Visual language: color, typography, iconography, spacing',
        'Accessibility as a baseline, not an afterthought',
        'Brand integration: how to adapt system for multiple brands',
      ],
    },
    {
      title: 'Tokens & Theming',
      colorClass: 'bg-amber-500 text-black',
      items: [
        'Token taxonomy: global, semantic, component-level tokens',
        'Theming strategy: light/dark, brand, seasonal themes',
        'Token delivery: JSON, CSS custom properties, platform exports',
        'Versioning and deprecation of tokens',
      ],
    },
    {
      title: 'Component Design & UX Patterns',
      colorClass: 'bg-pink-500 text-black',
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
      colorClass: 'bg-purple-500 text-black',
      items: [
        'Contribution model: open/closed, design reviews',
        'Governance: design council, working groups, decision logs',
        'Adoption playbook: onboarding guides, training, office hours',
        'Metrics: design system health, adoption, satisfaction',
      ],
    },
    {
      title: 'Tooling & Documentation',
      colorClass: 'bg-blue-500 text-black',
      items: [
        'Living documentation: automated previews, guidelines',
        'Figma plugins: token sync, linting, accessibility checks',
        'Design handoff: inspect mode, code snippets, redlines',
        'Design QA: visual regression, accessibility audits',
      ],
    },
  ]

  const engineeringTopics = [
    {
      title: 'Architecture & Infrastructure',
      colorClass: 'bg-blue-500 text-black',
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
      colorClass: 'bg-lime-500 text-black',
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
      colorClass: 'bg-teal-500 text-black',
      items: [
        'Automated releases: semantic versioning, changelogs',
        'Code quality: linting, static analysis, type safety',
        'Storybook/Docs: MDX stories, interactive playgrounds',
        'CI/CD: preview deployments, visual diffs, auto-publishing',
        'Migration tools: codemods, upgrade guides',
      ],
    },
    {
      title: 'Maintenance & Support',
      colorClass: 'bg-yellow-500 text-black',
      items: [
        'Issue triage: bug templates, support SLAs',
        'Deprecation policy: sunset timelines, migration paths',
        'Usage analytics: adoption, dead code detection',
        'Community support: office hours, internal champions',
      ],
    },
    {
      title: 'Governance & Collaboration',
      colorClass: 'bg-rose-500 text-black',
      items: [
        'Contribution workflow: PR templates, code owners',
        'RFC process: proposal, discussion, implementation',
        'Release management: canary, beta, stable channels',
        'Cross-team collaboration: ambassadors, shared OKRs',
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Design Systems Cheat Sheet
        </h1>
        <div className="text-xl text-gray-600 dark:text-gray-300">
          Everything you need to know about Design Systems
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Design Column */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="text-xl font-bold mb-6 text-center py-2 px-4 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white">
            🎨 Design Perspective
          </div>
          {designTopics.map((topic, index) => (
            <Topic key={index} {...topic} />
          ))}
        </div>

        {/* Engineering Column */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
          <div className="text-xl font-bold mb-6 text-center py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            ⚙️ Engineering Perspective
          </div>
          {engineeringTopics.map((topic, index) => (
            <Topic key={index} {...topic} />
          ))}
        </div>
      </div>
    </div>
  )
} 