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
import { MakeDatePersian } from "../../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import MyJobsModalInformation from "./MyJobsModalinformation";
const MyJobsTables = ({ myJobs,isLoading }) => {

const {isOpen, onOpen, onOpenChange} = useDisclosure();
const [keyOpen, setkeyOpen] = useState(null)
return (
  <div className="mt-3">
  <Table classNames={{wrapper: 'dark:bg-slate-700'}} className="block" dir="rtl" aria-label="Example empty table">
    <TableHeader>

      <TableColumn>  شغل شما </TableColumn>
      <TableColumn>  درباره ی شغل </TableColumn>
      <TableColumn>  شرکت  </TableColumn>      
      <TableColumn>  لینکدین </TableColumn>
      <TableColumn> وضعیت </TableColumn>        
      <TableColumn> اقدام </TableColumn>   
               
    </TableHeader>
    <TableBody emptyContent={"پرداخت ای برای نمایش وجود ندارد."} isLoading={isLoading} loadingContent={<Spinner label="در حال بارگزاری..." />}>

      {myJobs?.jobLists?.map((item, index) => {
        return <TableRow key={index} className="h-10">
          <TableCell className="hidden sm:block"> {item?.jobTitle} </TableCell>
          <TableCell className="visible"> {item?.aboutJob} <div className=""></div> </TableCell>
          <TableCell className="visible">{item?.companyName}  <div className="">  </div> </TableCell>
          <TableCell className="visible">  {item?.companyLinkdin} </TableCell>

          <TableCell className="visible"><span className={`${item.inWork ? 'bg-green-700 text-white' : 'text-white bg-red'} px-2 rounded-full`}> {item?.inWork ? "تاییدشده" : "نایید نشده" } </span> </TableCell>                    
          <TableCell>
          <div className="flex gap-2 items-center"> 
            <NavLink to={``}> <ViewIcon onClick={() => {onOpen(true);setkeyOpen(index)}} className="size-4 cursor-pointer"/> </NavLink>   
          </div>
              {onOpen && keyOpen == index  && 
              <MyJobsModalInformation
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  courseId={item.id}
                  jobs={item}
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

export default MyJobsTables

