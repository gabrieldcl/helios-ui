import React from 'react'

type DefaultIconProps = {
  color: string
}

export const DefaultIcon: React.FC<DefaultIconProps> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='20'
      height='20'
      viewBox='0 0 40 40'
    >
      <path
        fill={props.color}
        d='M21.779 32.794l-9.585-9.585a2.265 2.265 0 010-3.195l.8-.801a2.266 2.266 0 013.194 0l7.315 7.315 7.315-7.315a2.266 2.266 0 013.194 0l.8.801a2.265 2.265 0 010 3.195l-9.587 9.585a2.24 2.24 0 01-1.723.647 2.247 2.247 0 01-1.723-.647z'
      />
    </svg>
  )
}
