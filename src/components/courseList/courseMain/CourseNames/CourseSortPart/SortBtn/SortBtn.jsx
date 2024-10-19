import { Radio } from '@nextui-org/react'
import React from 'react'

const SortBtn = (props) => {
    const {children, ...otherProps} = props;
  return (
        <Radio
    {...otherProps}
    className={" "}

  >
    {children}
  </Radio>
  )
}

export default SortBtn