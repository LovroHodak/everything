import React from 'react'
import { tw } from '../tailwind'

export default function Second() {
  return (
    <SecondContainer>Second</SecondContainer>
  )
}

const SecondContainer = tw.div`
h-60 border-2 border-green-700 p-1 mb-1
`
