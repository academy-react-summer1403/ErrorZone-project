import React from 'react'
import CourseInfoTablePcView from './CourseInfoTablePcView'
import CourseInfoTableMobView from './CourseInfoTableMobView'

const CourseInfoTable = () => {
  return (
    <>
        <CourseInfoTablePcView />
        <CourseInfoTableMobView />
    </>
  )
}

export default CourseInfoTable