import React from 'react'
import { Handout, HorizontalWave } from '@/components-new/index'
import { handoutBlocks } from '@/data/hands-on-design-systems/handout/blocks'

export const metadata = {
  title: 'Handout for the workshop "Hands-on with Design Systems"',
}

export default function HandoutPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Handout
        title="Hands-on with design systems workshop handout."
        subtitle="What's next 👇"
        blocks={handoutBlocks}
      />
    </>
  )
}
