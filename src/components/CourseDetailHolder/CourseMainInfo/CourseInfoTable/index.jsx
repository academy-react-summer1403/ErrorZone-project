import React from 'react'
import CourseInfoTablePcView from './CourseInfoTablePcView'
import CourseInfoTableMobView from './CourseInfoTableMobView'

const CourseInfoTable = ({data}) => {
  return (
    <>
        <CourseInfoTablePcView data={data} />
        <CourseInfoTableMobView data={data} />
    </>
  )
}

export default CourseInfoTable