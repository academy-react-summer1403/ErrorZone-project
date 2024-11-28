import React, { useEffect, useState } from 'react'
import GetAllPayment from '../../../../core/services/api/MyPayments/MyPayments';
import MyPaymentTable from './MyPaymentTable';


const MyPayMents = () => {
    const [myPayment, setMyPayment] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      getData()
    }, [])
    
    const getData=async()=>{
      const data = await GetAllPayment()
      if(data) {
        setMyPayment(data)
      }
      setIsLoading(false)
    }

  return (
    <div className='' >
        <div className='flex flex-col w-full h-full gap-10'>
        <h2 className='text-[28px] font-bold mt-8'> پرداخت های من </h2>
        
      </div>
      <MyPaymentTable
        MyPayment={myPayment}
        isLoading={isLoading}
      />
    </div>
  )
}

export default MyPayMents




