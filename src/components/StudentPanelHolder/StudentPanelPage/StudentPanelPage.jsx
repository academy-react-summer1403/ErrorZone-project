import React from 'react'

const StudentPanelPage = ({Outlet}) => {
  return (
    <div className="bg-white h-[calc(100%_-_45px)] rounded-3xl p-6 mt-2.5 ">
      {Outlet}
    </div>
  )
}

export default StudentPanelPage