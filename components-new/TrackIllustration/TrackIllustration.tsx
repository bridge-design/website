'use client';

import React from 'react';

interface Stage {
  name: string;
  period: string;
  description: string;
  tools?: string;
}

const softwareStages: Stage[] = [
  {
    name: 'Autocomplete / Copilot',
    period: '~2021-23',
    description:
      'AI as "autocomplete on steroids." Developer in the driver\'s seat, AI reduces keystrokes.',
  },
  {
    name: 'Chat-based prompting',
    period: '~2023-24',
    description:
      'Describe what you want in natural language, get code back. "Prompt engineering" emerges.',
  },
  {
    name: 'Vibe coding',
    period: '~early 2025',
    description:
      'Describe the "vibe," AI handles implementation. Great for prototyping, inconsistent quality.',
  },
  {
    name: 'Spec-driven development',
    period: '~mid 2025',
    description:
      'Spec → Technical Plan → Tasks → Implementation, with human review gates.',
    tools: 'GitHub Spec Kit, AWS Kiro, SPARC',
  },
  {
    name: 'Context / rules engineering',
    period: '~2025',
    description:
      'Structure the environment AI operates in. .cursorrules, AGENTS.md, memory banks.',
  },
  {
    name: 'Single-agent agentic coding',
    period: '~late 2025',
    description:
      'AI agent with access to terminal, file system, browser. Autonomous multi-step workflows.',
    tools: 'Claude Code, Codex, Devin, Cursor',
  },
  {
    name: 'Multi-agent orchestration',
    period: '~2026',
    description:
      'Orchestrator coordinates specialized agents working in parallel. Developer becomes architect.',
    tools: 'LangGraph, CrewAI, AutoGen',
  },
  {
    name: 'Autonomous self-healing',
    period: 'emerging',
    description:
      'Self-assembling, self-healing software. Persistent codebase agents maintaining living models.',
  },
];

const designStages: Stage[] = [
  {
    name: 'AI as asset generator',
    period: '~2022-23',
    description:
      'Generating images, icons, illustrations, placeholder copy. AI replaced stock photos.',
    tools: 'Midjourney, DALL-E, GPT',
  },
  {
    name: 'Prompt-to-UI',
    period: '~2023-24',
    description:
      'Describe interface requirements, get generated layouts. Still "prompt and receive flat artifact."',
    tools: 'Galileo AI, Uizard, UX Pilot',
  },
  {
    name: 'Vibe designing',
    period: '~early 2025',
    description:
      '"Clean and minimal" vs "warm and cozy" — AI interprets across variations. Good for prototyping only.',
  },
  {
    name: 'Screenshot/design-to-code',
    period: '~2025',
    description:
      'The design artifact becomes code. The prototype is the product. "Design engineers" emerge.',
    tools: 'v0, Figma Make, Locofy, Bolt, Lovable',
  },
  {
    name: 'Spec/system-driven design',
    period: '~mid 2025',
    description:
      'Design systems, brand tokens, component libraries as structured AI inputs. Adoption is thin.',
  },
  {
    name: 'Design-aware agentic tools',
    period: '~late 2025-26',
    description:
      'Agentic systems that rewrite layouts, commit code, stage previews. Still more demo than daily.',
    tools: 'Figma MCP, agent pipelines',
  },
  {
    name: 'Multi-agent design pipelines',
    period: '~2026',
    description:
      'Specialized agents for spacing, hierarchy, accessibility, breakpoints — all coordinated.',
  },
  {
    name: 'Generative UI / runtime-adaptive',
    period: 'not yet',
    description:
      'AI rebuilds the interface in real-time based on user intent. Designer defines rules, system designs itself.',
  },
];

// Software is at stage 5-6 (index 4-5), Design is at stage 3-4 (index 2-3)
const SOFTWARE_CURRENT = 5; // 1-indexed, stages 5-6 are current
const DESIGN_CURRENT = 3; // 1-indexed, stages 3-4 are current

function StageRow({
  index,
  software,
  design,
}: {
  index: number;
  software: Stage;
  design: Stage;
}) {
  const num = index + 1;
  const softwareActive = num <= SOFTWARE_CURRENT + 1;
  const softwareCurrent =
    num === SOFTWARE_CURRENT || num === SOFTWARE_CURRENT + 1;
  const designActive = num <= DESIGN_CURRENT + 1;
  const designCurrent = num === DESIGN_CURRENT || num === DESIGN_CURRENT + 1;

  return (
    <div className="not-prose flex gap-2 sm:gap-3 items-stretch">
      {/* Software side */}
      <div
        className={`flex-1 rounded-lg p-2 sm:p-3 border transition-all ${
          !softwareActive ? 'opacity-40' : ''
        } ${
          softwareCurrent
            ? 'border-[var(--btg-color-primary-700)] shadow-md'
            : softwareActive
              ? 'border-[var(--btg-color-grey-400)]'
              : 'border-[var(--btg-color-grey-300)]'
        }`}
        style={{
          backgroundColor: softwareCurrent
            ? 'var(--btg-color-primary-100)'
            : softwareActive
              ? 'var(--btg-color-grey-200)'
              : 'var(--btg-color-grey-100)',
        }}
      >
        <div className="flex items-start gap-2">
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0"
            style={{
              backgroundColor: softwareCurrent
                ? 'var(--btg-color-primary-700)'
                : softwareActive
                  ? 'var(--btg-color-primary-300)'
                  : 'var(--btg-color-grey-500)',
              color: softwareCurrent
                ? 'var(--btg-color-grey-100)'
                : softwareActive
                  ? 'var(--btg-color-primary-1000)'
                  : 'var(--btg-color-grey-800)',
            }}
          >
            {num}
          </div>
          <div className="min-w-0 pt-0.5 sm:pt-1">
            <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
              <span
                className="font-medium text-xs sm:text-sm leading-tight"
                style={{
                  color: softwareCurrent
                    ? 'var(--btg-color-primary-900)'
                    : softwareActive
                      ? 'var(--btg-color-grey-900)'
                      : 'var(--btg-color-grey-600)',
                }}
              >
                {software.name}
              </span>
              <span
                className="text-[9px] sm:text-[10px] shrink-0"
                style={{ color: 'var(--btg-color-grey-600)' }}
              >
                {software.period}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Center dot connector */}
      <div className="flex flex-col items-center justify-center w-3 sm:w-4 shrink-0">
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor:
              num <= DESIGN_CURRENT + 1 && num <= SOFTWARE_CURRENT + 1
                ? 'var(--btg-color-grey-600)'
                : 'var(--btg-color-grey-400)',
          }}
        />
        {num < 8 && (
          <div
            className="w-px flex-1"
            style={{ backgroundColor: 'var(--btg-color-grey-300)' }}
          />
        )}
      </div>

      {/* Design side */}
      <div
        className={`flex-1 rounded-lg p-2 sm:p-3 border transition-all ${
          !designActive ? 'opacity-40' : ''
        } ${
          designCurrent
            ? 'border-[var(--btg-color-accent-500)] shadow-md'
            : designActive
              ? 'border-[var(--btg-color-grey-400)]'
              : 'border-[var(--btg-color-grey-300)]'
        }`}
        style={{
          backgroundColor: designCurrent
            ? 'var(--btg-color-accent-100)'
            : designActive
              ? 'var(--btg-color-grey-200)'
              : 'var(--btg-color-grey-100)',
        }}
      >
        <div className="flex items-start gap-2">
          <div
            className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0"
            style={{
              backgroundColor: designCurrent
                ? 'var(--btg-color-accent-500)'
                : designActive
                  ? 'var(--btg-color-accent-300)'
                  : 'var(--btg-color-grey-500)',
              color: designCurrent
                ? 'var(--btg-color-neutral-1000)'
                : designActive
                  ? 'var(--btg-color-accent-1000)'
                  : 'var(--btg-color-grey-800)',
            }}
          >
            {num}
          </div>
          <div className="min-w-0 pt-0.5 sm:pt-1">
            <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
              <span
                className="font-medium text-xs sm:text-sm leading-tight"
                style={{
                  color: designCurrent
                    ? 'var(--btg-color-accent-800)'
                    : designActive
                      ? 'var(--btg-color-grey-900)'
                      : 'var(--btg-color-grey-600)',
                }}
              >
                {design.name}
              </span>
              <span
                className="text-[9px] sm:text-[10px] shrink-0"
                style={{ color: 'var(--btg-color-grey-600)' }}
              >
                {design.period}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrackIllustration() {
  return (
    <div
      className="not-prose rounded-xl overflow-hidden my-8 sm:my-12 -mx-4 sm:mx-0"
      style={{ backgroundColor: 'var(--btg-color-grey-100)' }}
    >
      <div className="p-4 sm:p-6 md:p-8">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-medium leading-tight"
            style={{ color: 'var(--btg-color-grey-1000)' }}
          >
            Design Is{' '}
            <span style={{ color: 'var(--btg-color-accent-600)' }}>
              2 Years Behind
            </span>{' '}
            Engineering?
            <br />
            <span style={{ color: 'var(--btg-color-primary-700)' }}>
              Time to Accelerate!
            </span>
          </h2>
        </div>

        {/* Track Headers */}
        <div className="flex gap-2 sm:gap-3 mb-2 sm:mb-3">
          <div className="flex-1 text-center">
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--btg-color-primary-500) 10%, transparent)',
                borderColor: 'color-mix(in srgb, var(--btg-color-primary-500) 30%, transparent)',
              }}
            >
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                style={{ backgroundColor: 'var(--btg-color-primary-700)' }}
              />
              <span
                className="font-medium text-[10px] sm:text-xs tracking-wide uppercase"
                style={{ color: 'var(--btg-color-primary-700)' }}
              >
                Engineering
              </span>
            </div>
          </div>
          <div className="w-3 sm:w-4 shrink-0" />
          <div className="flex-1 text-center">
            <div
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 border"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--btg-color-accent-500) 10%, transparent)',
                borderColor: 'color-mix(in srgb, var(--btg-color-accent-500) 30%, transparent)',
              }}
            >
              <div
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                style={{ backgroundColor: 'var(--btg-color-accent-500)' }}
              />
              <span
                className="font-medium text-[10px] sm:text-xs tracking-wide uppercase"
                style={{ color: 'var(--btg-color-accent-500)' }}
              >
                Design
              </span>
            </div>
          </div>
        </div>

        {/* Stage rows */}
        <div className="space-y-1.5 sm:space-y-2">
          {softwareStages.map((sw, i) => (
            <StageRow key={i} index={i} software={sw} design={designStages[i]} />
          ))}
        </div>

        {/* The Opportunity */}
        <div className="mt-6 sm:mt-8">
          <div
            className="rounded-xl border p-4 sm:p-6 text-center"
            style={{
              backgroundColor: 'var(--btg-color-grey-200)',
              borderColor: 'var(--btg-color-grey-400)',
            }}
          >
            <p
              className="text-[10px] sm:text-xs uppercase tracking-widest font-medium mb-2 sm:mb-3"
              style={{ color: 'var(--btg-color-grey-700)' }}
            >
              The question for your team
            </p>
            <p
              className="text-sm sm:text-base md:text-lg font-medium leading-snug mb-3 sm:mb-4"
              style={{ color: 'var(--btg-color-grey-1000)' }}
            >
              What if your design operations could move
              <br className="hidden sm:block" /> at the same speed as your
              engineering?
            </p>
            <div className="flex items-center justify-center gap-3">
              <div
                className="h-px w-8 sm:w-12"
                style={{ backgroundColor: 'var(--btg-color-grey-400)' }}
              />
              <span
                className="text-[10px] sm:text-xs italic"
                style={{ color: 'var(--btg-color-grey-600)' }}
              >
                The infrastructure exists. The opportunity is now.
              </span>
              <div
                className="h-px w-8 sm:w-12"
                style={{ backgroundColor: 'var(--btg-color-grey-400)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
