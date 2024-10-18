import React from 'react'
import {Pagination} from "@nextui-org/react";
const PaginationCards = () => {
  return (
    <div className='mx-auto mt-10' style={{direction:'ltr'}}>
         <Pagination isCompact showControls total={10} initialPage={1} />
    </div>
  )
}

export default PaginationCards


