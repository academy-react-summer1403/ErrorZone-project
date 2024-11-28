import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell
  } from "@nextui-org/table";
  import React, { useEffect, useState } from 'react'
  import jMoment from 'moment-jalaali'
  import { Cancel01Icon, MoneyAdd02Icon, ViewIcon,ImageUpload01Icon } from "hugeicons-react";
  import { NavLink, useNavigate, } from "react-router-dom";
import { Spinner, useDisclosure } from "@nextui-org/react";
import nophoto from './../../../../assets/images/NoPhoto/imgno.png'
import { ToastContainer } from "react-toastify";
import MyPaymentModal from "./MyPaymentModal";
import MyPaymentInformationModal from "./MyPymentsInformationModal";

const MyPaymentTable = ({ MyPayment,isLoading }) => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [keyOpen, setkeyOpen] = useState(null)

  console.log("mypayments" , MyPayment)


  return (
    <div className="mt-3">
    <Table classNames={{wrapper: 'dark:bg-slate-700'}} className="block" dir="rtl" aria-label="Example empty table">
      <TableHeader>
        <TableColumn className="hidden sm:block">  </TableColumn>
        <TableColumn> مبلغ پرداخت شده </TableColumn>
        <TableColumn> زمان پرداخت </TableColumn>
        <TableColumn> وضعیت پرداخت </TableColumn>
        <TableColumn></TableColumn>
      </TableHeader>
      <TableBody emptyContent={"پرداخت ای برای نمایش وجود ندارد."} isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />}>

        {MyPayment?.map((item, index) => {
          return <TableRow key={index} className="h-10">
            <TableCell className="hidden sm:block"> <img className={` sm:w-[104px] sm:h-[72px] rounded-[8px] ${item.paymentInvoiceImage ? " ": "bg-white"}`} src={item?.paymentInvoiceImage ? item?.paymentInvoiceImage : nophoto} /> </TableCell>
            <TableCell className="visible"> <div className="max-w-32 h-10 truncate leading-8">{item.paid.toLocaleString('en-US')}<span className="text-[13px] text-gray-500">  تومان</span> </div> </TableCell>
            <TableCell className="visible"> <div className="max-w-32 h-10 truncate leading-8"> {(jMoment(item.peymentDate).locale('fa').format('jD jMMMM jYYYY'))} </div> </TableCell>
            <TableCell className="visible"> <span className={`${item.accept ? 'bg-green-700 text-white' : 'text-white bg-red'} px-2 rounded-full`}> {item.accept==true ? 'تایید شده' : 'تایید نشده'} </span> </TableCell>
            <TableCell>
            <div className="flex gap-2 items-center"> 
              <NavLink to={``}> <ViewIcon onClick={() => {onOpen(true);setkeyOpen(index)}} className="size-4 cursor-pointer"/> </NavLink>   
            </div>
                {onOpen && keyOpen == index  && 
                <MyPaymentInformationModal
                    isOpen={isOpen}
                    onOpenChange={onOpenChange}
                    courseId={item.courseId}
                    dataPaymentt={item}
                /> }

            </TableCell>
          </TableRow>
          
        })}
      
      </TableBody>
    </Table>
    <ToastContainer />
    <div className="w-full flex justify-start">
    </div>
    </div>
  )
}

export default MyPaymentTable
