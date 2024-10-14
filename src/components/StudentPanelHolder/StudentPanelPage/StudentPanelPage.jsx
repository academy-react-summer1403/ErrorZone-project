import React from 'react'

const StudentPanelPage = ({Outlet}) => {
  return (
    <div className="bg-white h-[calc(100%_-_50px)] rounded-3xl p-6 ">
      {Outlet}
    </div>
  )
}

export default StudentPanelPage