import React from 'react'
import { Handout, HorizontalWave } from '@/components-new/index'
import { handoutBlocks } from '@/data/workshops/cursor-for-design-systems/handout/blocks'

export const metadata = {
  title: 'Handout for the workshop "Cursor for Design Systems"',
}

export default function HandoutPage() {
  return (
    <>
      <style>{`:root { --btg-hero-background: var(--btg-hero-background-pink); }`}</style>
      <HorizontalWave color="var(--btg-hero-background)" />
      <Handout
        title="Curdor for design systems, workshop handout."
        subtitle="What's next 👇"
        blocks={handoutBlocks}
      />
    </>
  )
}
