import React, { useEffect } from 'react'
import StudentPanelHolder from '../../components/StudentPanelHolder';
import { Outlet } from 'react-router-dom';
import { getQuery } from '../../core/services/api/reactQuery/getQuery';

const studentPanel = () => {
  getQuery('userInfo', "/SharePanel/GetProfileInfo");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <StudentPanelHolder Outlet={<Outlet />} />
  )
}

export default studentPanel