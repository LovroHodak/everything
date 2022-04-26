import React from 'react'
import { tw } from '../tailwind'

export default function Third() {
  return (
    <ThirdContainer>Third</ThirdContainer>
  )
}

const ThirdContainer = tw.div`
h-60 border-2 border-yellow-700 p-1 mb-1
`