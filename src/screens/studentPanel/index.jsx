import React from 'react'
import StudentPanelHolder from '../../components/StudentPanelHolder';
import { Outlet } from 'react-router-dom';
import { getQuery } from '../../core/services/api/reactQuery/getQuery';

const studentPanel = () => {
  getQuery('userInfo', "/SharePanel/GetProfileInfo");
  return (
    <StudentPanelHolder Outlet={<Outlet />} />
  )
}

export default studentPanel