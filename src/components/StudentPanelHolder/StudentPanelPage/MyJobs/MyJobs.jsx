import React, { useEffect, useState } from 'react'
import MyJobsTables from './MyJobsTables';
import GetMyJobs from '../../../../core/services/api/MyJobs/MyJobs';


const MyJobs = () => {
    const [myJobs, setMyJobs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
      getData()
    }, [])
    
    const getData=async()=>{
      const data = await GetMyJobs()
      if(data) {
        setMyJobs(data)
      }
      setIsLoading(false)
    }

    console.log("getmyjobs" ,myJobs )
 
  return (
    <div className='' >
        <div className='flex flex-col w-full h-full gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> شغل های من </h2>
        
      </div>
      <MyJobsTables
        myJobs={myJobs}
        isLoading={isLoading}
      />
    </div>
  )
}

export default MyJobs
