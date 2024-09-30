import React from 'react'

const ButtonSpecial = ({className, innerHtml, onClick}) => {
  return (
    <button className={className} onClick={onClick} >
      {innerHtml}
    </button>
  )
}

export default ButtonSpecial