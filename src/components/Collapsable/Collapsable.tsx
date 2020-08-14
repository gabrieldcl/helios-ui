import React, { ReactNode, useLayoutEffect, useState, useRef } from 'react'
import { StyledCollpsable } from './StyledCollapsable'

export interface CollapsableProps {
  open: boolean
  children: ReactNode
}

export const Collapsable: React.FC<CollapsableProps> = (props) => {
  const [maxHeight, setMaxHeight] = useState('auto')
  const [original, setOriginal] = useState('auto')
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setOriginal(ref.current ? `${ref.current.clientHeight}px` : '')
    setMaxHeight('0px')
  }, [])

  return (
    <StyledCollpsable
      ref={ref}
      {...props}
      original={original}
      maxHeight={maxHeight}
    >
      {props.children}
    </StyledCollpsable>
  )
}
