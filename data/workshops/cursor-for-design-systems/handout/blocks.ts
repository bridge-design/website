type Role = 'designer' | 'developer'

interface HandoutBlock {
  title: string
  slug: string
  roles: Role[]
  day: number
  url?: string
}

/**
 * NOTES:
 * With Storybook, they had a dashboard with charts, it looks like
 * a more complex interface. Maybe we should take it?
 * 
 * Take kleneway/next-ai-starter, maybe it's a good repo to
 * show-case the product
 * .cursor/commands — prompts to use, we should create our own for
 * component-driven The commands are used when you type `/`.
 * TODO: Create a command that checks the setup, and a command that
 * fixes the setup (what is installed, what is not installed)
 * 
 * What is Prisma client? Storybook video 19:25
 * 
 * What is Scratchpad? Storybook video 20:40
 * 
 * In repo, set .cursorrules
 * 
 * TODO: Check Kevin's resorces, Storybook video 38:02
 * 
 * TODO: Maybe we do something with tables? They take a lot of space
 * and I don't need to create a lot of components. In Storybook video
 * 43:47 they have contract invoicing. Maybe similar, like family budgeting?
 * We get sample data, and can even add charts and diagrams on it.
 */

export const handoutBlocks: HandoutBlock[] = [
  {
    title: 'Workshop flow',
    slug: 'workshop-flow',
    roles: ['designer', 'developer'],
    day: 1,
  },
  /**
   * Do we need an intro?
   * 
   * AI value proposition is to shorten the time between idea and action
   * 90% of ideas don't work. shipping fast it crucial
   * We had 2-week sprints, now we are speaking about 3 day sprints (bring Passi's
   * text or picture). How is it manageable?
   * 
   * 2 ways to speed up cooding:
   * - AI-assisted coding and Vibe coding
   * 
   * AI assisted coding tools
   * - Cursor
   * - ClaudeCode
   * - Windsurf
   * - Codex
   * 
   * Vibe coding
   * - Lovable
   * - Bolt
   * - Replit
   * - v0
   * 
   * TODO: Is Figma Make in Vibe coding?
   * 
   * Why AI-assisted coding?
   * - Maintenance
   * - Quality
   * - Performance
   * - Security
   * - Total cost of ownership
   * 
   * Draw a picture how we re-do design in code. If we vibe-code, we have to
   * re-do again and we have losses.
   * But if we choose AI-assisted code, the result is much closer to
   * production-ready. We have less losses.
   */
  {
    /**
     * Outline:
     * Setting up:
     * - Cursor
     * - nvm (node, npm)
     * - yarn (optional)
     * - Apple developer tools (check if needed)
     * - GitHub (no need to push, they can dump the code)
     * - How to run product (via Cursor)
     * - How to run a Storybook (via Cursor)
     * Optional pressentation about Storybook interface
     * 
     * Presentation of our code structure.
     * Draw schema (maybe to use external tool?)
     * Show how AI can answer questions about coding structure
     * 
     * Cursor interface
     * What is .cursorrules - instructions how to do things. If you will have
     * separate repo for prototyping, ask your developers to help you
     * with the rules. This way, you give LLMs much more guidance to stay in
     * line with the production code at your project.
     */
    title: 'Setting-up',
    slug: 'setting-up',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline: idea of component-driven design and development
     * Present our product. Say that we could do as usual, just give model
     * to code. But we know a better way.
     * 
     * Atomic design. Show Brad's atoms->molecules-> organisms (Storybook video
     * 34:29), it can be called differently.
     * 
     * Storybook as development playground
     * Design vibe coding -> Let's utilize Storybook
     * 
     * Show a page and how different parts of interface are interconnected, same as
     * in Storybook video at 8:20. Checking up on such a page after all the changes
     * is too much, especisally on broader edge cases. You can easily overlook
     * someting.
     * This is why we have Storybook. It can express every key state of frontend.
     * It give structured view of the generated components and their states. And
     * they are the very components used in production.
     * With AI-assisted coding Storybooks visually verifies that output of LLM is
     * good enough to proceed.
     * 
     * Models are trained on data. More data -> better result. This is why we
     * get most ona very standards setup. Most frontend technologies are covered.
     * TypeScript, CSS modules, even sets of components. But if you have
     * special environment, you get worse results.
     * So, we isolate components, it's frontend only. This way we get better
     * results with AI and more things under iur control.
     */
    title: 'Component-driven design and development',
    slug: 'component-driven',
    roles: ['designer', 'developer'],
    day: 1,
    // url: 'https://miro.com/app/board/uXjVOf0JQik=/',
  },
  {
    /**
     * Outline:
     * Schemas of how everything is working
     * Differnt LLMs
     * Different coding tools
     * Show copy-paste from ChatGPT (also works, this is who everything started)
     * Agent mode in Cursor, it can edit files
     * MCPs
     * 
     * Agentic workflow for frontend development
     * LLM generates code -> we see in browser -> we go back to LLM
     */
    title: 'AI code generation in design systems context',
    slug: 'ai-code-gen',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Explain why we chose Cursor over Figma
     */
    title: 'To Figma or not to Figma?',
    slug: 'figma-cursor',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Idea of spec-driven development
     * 
     * There are very different opinions on AI. Some people say it's amazing,
     * it makes things so much faster. Others say "what are you talking about?
     * that doesn't work at all for me".
     * 
     * The trick to make AI productive is to invest a lot into specs.
     * 
     * Pro tip: say "interview me" when working on specs
     * 
     * 
     * We can make `.cursor-task.md` in the component folder.
     * We can store `specs.md` in the component folder.
     * 
     * Why we are giving tasks? Manging context. AI has some amount of "memory
     * space". If you don't give enough context, AI will not tell you about that,
     * it will guess. But you don't want it to guess. So, we provide the most
     * SPECIFIC task, or we write specification for our next things. This is the
     * tick to keep it on track.
     * 
     * On testing: show how to use Browser button.
     */
    title: 'Spec-driven development',
    slug: 'spec-driven',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Bring according component
     * Specs -> coding component -> adopting to the product
     */
    title: 'Challenge 1: Lets bring new component',
    slug: 'challenge-1',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * We can offer them to try different components
     * 
     * Idea: we can pick random, like in Storybook video "Pick a random
     * startup idea", 13:00. They have a component for that, we can code a
     * component.
     */
    title: 'Challenge 2: Once again',
    slug: 'challenge-2',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Let's create a large change at once. We refactor many components, add
     * several new components, create a brand change too.
     * Maybe this will be a homework.
     */
    title: 'Challenge 2: Large change at once',
    slug: 'challenge-2',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Besides coding, we can use the same tools for preparation sessions.
     * AI can think and plan too. But it's good that it's a separate step because
     * we can revisit the results.
     * 
     * What we can do:
     * - analyse the interface and think up how we could improve here
     * - this is our data from research, what we change to address the user
     * pain points
     */
    title: 'Bonus: AI for thinking and planning',
    slug: 'ai-for-thinking',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    /**
     * Outline:
     * Reflection and questions
     */
    title: 'Q&A and Reflection',
    slug: 'reflection',
    roles: ['designer', 'developer'],
    day: 1,
  },
  {
    title: 'Feedback Form',
    slug: 'feedback',
    url: 'https://forms.gle/rR2teKjU5LjAcnXz6',
    roles: ['designer', 'developer'],
    day: 2,
  },
]
