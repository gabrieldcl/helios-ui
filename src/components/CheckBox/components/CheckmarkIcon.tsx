import React from 'react'
import { CheckBoxProps } from '../CheckBox'

export const CheckmarkIcon = (props: CheckBoxProps) => {
  const { checked, disabled } = props
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='20'
      height='20'
      viewBox='0 0 20 20'
    >
      <defs>
        <path
          id='a'
          d='M5.22 10a.834.834 0 01-.608-.262L.559 5.422A.833.833 0 111.774 4.28L5.21 7.94 12.218.272a.834.834 0 011.23 1.123L5.835 9.728a.832.832 0 01-.609.272H5.22z'
        />
      </defs>
      <use
        fill={disabled ? '#eee' : `${checked ? 'white' : '#eee'}`}
        fillRule='evenodd'
        transform='translate(3 5)'
        xlinkHref='#a'
      />
    </svg>
  )
}
