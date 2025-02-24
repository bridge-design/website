import React from 'react'
import { Handout } from '@/components-new/workshop/Handout'
import { handoutBlocks } from '@/data/workshops/hands-on-design-systems/handout'

export const metadata = {
  title: 'Handout for the workshop "Hands-on with Design Systems"',
}

export default function HandoutPage() {
  return <Handout blocks={handoutBlocks} />
}
