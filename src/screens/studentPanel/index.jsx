import React from 'react'
import StudentPanelHolder from '../../components/StudentPanelHolder';
import { Outlet } from 'react-router-dom';

const studentPanel = () => {
  return (
    <StudentPanelHolder Outlet={<Outlet />} />
  )
}

export default studentPanel