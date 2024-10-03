import React from 'react'

const StudentPanelPage = ({Outlet}) => {
  return (
    <div className="bg-white h-full rounded-3xl p-6 ">
      {Outlet}
    </div>
  )
}

export default StudentPanelPage