import React from 'react'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery'

const ReservesCourse = () => {
getQuery('myReservesCourses', '/SharePanel/GetMyCoursesReserve');
  return (
    <div>

    </div>
  )
}

export default ReservesCourse