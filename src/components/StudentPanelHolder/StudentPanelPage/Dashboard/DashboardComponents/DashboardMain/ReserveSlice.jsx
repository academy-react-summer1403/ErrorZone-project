import React from 'react'

const ReserveSlice = () => {
  return (
    <div>ReserveSlice</div>
  )
}

export default ReserveSlice

import React from 'react'

const ReserveSlice = ({ items }) => {
  const slicedItems = items.slice(0, 10)

  return (
    <ul>
      {ReserveSlice.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default ItemsList