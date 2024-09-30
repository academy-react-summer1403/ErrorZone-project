import { Button } from '@nextui-org/react'
import React from 'react'

const ButtonSpecial = ({className, innerHtml, onClick}) => {
  return (
    <Button className={className} onClick={onClick} >
      {innerHtml}
    </Button>
  )
}

export default ButtonSpecial