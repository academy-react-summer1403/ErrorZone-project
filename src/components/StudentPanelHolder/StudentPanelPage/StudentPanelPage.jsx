import React from 'react'

const StudentPanelPage = ({Outlet}) => {
  return (
    <div className="bg-white dark:bg-blackPanel dark:border dark:border-gray-800 h-[calc(100%_-_50px)] overflow-y-auto rounded-3xl p-6 ">
      {Outlet}
    </div>
  )
}

export default StudentPanelPage