import React from 'react'
import { tw } from '../tailwind'

export default function Fourth() {
  return (
    <FourthContainer>Fourth</FourthContainer>
  )
}

const FourthContainer = tw.div`
h-60 border-2 border-teal-800 p-1
`

