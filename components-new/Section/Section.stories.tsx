import { Meta, StoryObj } from '@storybook/react'
import { Section } from './Section'

const meta: Meta<typeof Section> = {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: [
          '--btg-color-brand-dark',
          '--btg-color-brand-green',
          '--btg-color-brand-pink',
          '--btg-color-brand-yellow',
          '--btg-color-brand-light',
          '--btg-color-neutral-100',
          '--btg-color-neutral-600',
          '--btg-color-neutral-1000',
        ],
      },
    },
    children: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof Section>

const textStyle = {
  dark: 'text-[var(--btg-color-grey-100)]',
  light: 'text-[var(--btg-color-grey-1000)]',
}

export const BrandDark: Story = {
  args: {
    backgroundColor: '--btg-color-brand-dark',
    children: (
      <p className={textStyle.light}>
        This is a Section with Brand Dark background and grey styled text.
      </p>
    ),
  },
}

export const BrandGreen: Story = {
  args: {
    backgroundColor: '--btg-color-brand-green',
    children: (
      <p className={textStyle.light}>
        This is a Section with Brand Green background and grey styled text.
      </p>
    ),
  },
}

export const BrandPink: Story = {
  args: {
    backgroundColor: '--btg-color-brand-pink',
    children: (
      <p className={textStyle.light}>
        This is a Section with Brand Pink background and grey styled text.
      </p>
    ),
  },
}

export const Neutral600: Story = {
  args: {
    backgroundColor: '--btg-color-neutral-600',
    children: (
      <p className={textStyle.dark}>
        This is a Section with Neutral 600 background and grey styled text.
      </p>
    ),
  },
}

export const Neutral1000: Story = {
  args: {
    backgroundColor: '--btg-color-neutral-1000',
    children: (
      <p className={textStyle.dark}>
        This is a Section with Neutral 1000 background and grey styled text.
      </p>
    ),
  },
}

export const NoBackground: Story = {
  args: {
    children: (
      <p className={textStyle.dark}>
        This is a Section without any background color, styled with grey text.
      </p>
    ),
  },
}

export const LongText: Story = {
  args: {
    backgroundColor: '--btg-color-neutral-1000',
    children: (
      <div className={textStyle.dark}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat urna in sapien
          bibendum, ut lacinia sapien cursus. Etiam nec neque sit amet ipsum suscipit venenatis a ut
          odio. Phasellus ac nisi quis odio sollicitudin sollicitudin. Mauris scelerisque sapien id
          augue ultrices, sed tincidunt erat laoreet. Vestibulum ultricies mi sit amet volutpat
          consectetur. Phasellus vel ex sed justo commodo tincidunt in nec metus. Fusce fringilla
          nunc lectus, nec lobortis neque convallis eu. Quisque sodales justo purus, nec fringilla
          ex rhoncus nec. Morbi vitae sollicitudin libero.
        </p>
        <p>
          Proin auctor tortor et ex facilisis, id hendrerit nunc pharetra. Nulla dictum varius nibh,
          id posuere risus mollis in. Aenean et nulla volutpat, vehicula velit ac, fringilla turpis.
          Aliquam erat volutpat. Duis vitae fermentum ligula, vel feugiat lorem. Integer efficitur
          nunc enim, ut consequat elit sodales ac. Mauris pretium eros id vehicula pellentesque.
          Donec non convallis felis. Ut vulputate elit sapien, ut laoreet purus egestas quis. Ut sed
          viverra ipsum, a tempus metus. In consectetur, erat a sollicitudin ornare, ipsum purus
          tempor ex, id scelerisque purus est in nisl.
        </p>
        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
          egestas. Quisque luctus dui eu ante lobortis scelerisque. In hac habitasse platea
          dictumst. Aliquam sodales purus quis sem tristique, id aliquet arcu posuere. Vestibulum
          quis orci et odio malesuada congue id vel leo. Nulla malesuada mollis purus, at vestibulum
          odio pharetra id. Suspendisse viverra malesuada urna vel congue. Suspendisse potenti.
          Curabitur nec urna nisi. Nulla facilisi. Integer fermentum nisi nec sem laoreet, in
          rhoncus orci gravida.
        </p>
      </div>
    ),
  },
}
