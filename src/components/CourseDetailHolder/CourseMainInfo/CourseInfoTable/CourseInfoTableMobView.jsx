import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
} from "@nextui-org/react";
import { convertDate } from "../../../../core/utils/DateToShamsi";


const CourseInfoTableMobView = ({data}) => {
    return (
        <div className="block tablet:hidden ">
          <Table hideHeader aria-label="Example static collection table">
            <TableHeader>
              <TableColumn></TableColumn>
              <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
    
              <TableRow key="1" className="border-b-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">وضعیت</div>
                  <Chip color="danger">{data.courseStatusName}</Chip>
                </TableCell>
    
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">دسته‌بندی</div>
                  {data.techs?.map((item,index)=>(
              <Chip color="primary" key={index}>{item}</Chip>
              ))}
                </TableCell>
              </TableRow>

              <TableRow key="2" className="border-y-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">سطح آموزشی</div>
                  <Chip color="secondary">{data.courseLevelName}</Chip>
                </TableCell>
    
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">استاد دوره</div>
                  <div>{data.teacherName}</div>
                </TableCell>    
              </TableRow>
    
              <TableRow key="3" className="border-y-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تاریخ برگزاری</span>
                    <div>{convertDate(data.startTime)}</div>
                </TableCell>
    
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تاریخ اتمام</span>
                    <div>{convertDate(data.endTime)}</div>
                </TableCell>
              </TableRow>

              <TableRow key="4" className="border-t-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تعداد لایک</span>
                    <div>{data.likeCount}</div>
                </TableCell>
    
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تعداد دیس‌لایک</span>
                    <div>{data.dissLikeCount}</div>
                </TableCell>     
              </TableRow>
    
            </TableBody>
          </Table>
        </div>
      );
}

export default CourseInfoTableMobView