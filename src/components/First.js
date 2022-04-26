import React, { forwardRef } from 'react'
import { tw } from '../tailwind'

export default forwardRef(function First(_, ref) {
  return (
    <FirstContainer ref={ref}>First</FirstContainer>
  )
})

const FirstContainer = tw.div`
h-60 border-2 border-orange-700 p-1  mb-1
`
