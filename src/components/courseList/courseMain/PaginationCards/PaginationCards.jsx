import React from 'react'
import {Pagination} from "@nextui-org/react";
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery';
import { usequery } from '../../../../core/services/api/reactQuery/useQuery';
import { paginationNum } from '../../../../core/utils/paginationNum';

const PaginationCards = () => {
  const data = usequery("corsesByPagination");

  return (
    <div className='mx-auto mt-10' style={{direction:'ltr'}}>
      {
        data?.totalCount ? (<Pagination isCompact showControls total={paginationNum(data.totalCount, 12)} initialPage={1} />) : (false)
      }
    </div>
  )
}

export default PaginationCards


