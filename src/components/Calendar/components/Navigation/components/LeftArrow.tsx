import React from 'react'

type LeftArrowProps = {
  color?: string
}

export const LeftArrow: React.FC<LeftArrowProps> = (props) => {
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
          id='leftArrow'
          d='M5.829 14a.998.998 0 01-.78-.373l-4.828-6A1 1 0 01.23 6.36l5-6a1 1 0 111.536 1.28L2.294 7.011l4.315 5.362A1 1 0 015.828 14'
        />
      </defs>
      <use
        fill={color || '#EEE'}
        fillRule='evenodd'
        transform='translate(8 5)'
        xlinkHref='#leftArrow'
      />
    </svg>
  )
}
