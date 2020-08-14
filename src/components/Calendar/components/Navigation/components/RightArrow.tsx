import React from 'react'

type RightArrowProps = {
  color?: string
}

export const RightArrow: React.FC<RightArrowProps> = (props) => {
  const { color } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='20'
      height='20'
      viewBox='0 0 24 24'
    >
      <defs>
        <path
          id='rightArrow'
          d='M1 14a1 1 0 01-.768-1.64l4.476-5.371L.391 1.627A1 1 0 011.953.373l4.827 6a1 1 0 01-.01 1.267l-5 6A1 1 0 011 14'
        />
      </defs>
      <use
        fill={color || '#EEE'}
        fillRule='evenodd'
        transform='translate(9 5)'
        xlinkHref='#rightArrow'
      />
    </svg>
  )
}
