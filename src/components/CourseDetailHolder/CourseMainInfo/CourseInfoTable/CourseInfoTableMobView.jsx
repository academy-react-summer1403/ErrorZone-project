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


const CourseInfoTableMobView = () => {
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
                  <Chip color="danger"></Chip>
                </TableCell>
    
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">دسته‌بندی</div>
                  <Chip color="primary"></Chip>
                </TableCell>
              </TableRow>

              <TableRow key="2" className="border-y-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">سطح آموزشی</div>
                  <Chip color="secondary"></Chip>
                </TableCell>
    
                <TableCell className="space-y-3">
                  <div className="text-sm text-gray-800">استاد دوره</div>
                  <div></div>
                </TableCell>    
              </TableRow>
    
              <TableRow key="3" className="border-y-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تاریخ برگزاری</span>
                    <div></div>
                </TableCell>
    
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تاریخ اتمام</span>
                    <div></div>
                </TableCell>
              </TableRow>

              <TableRow key="4" className="border-t-2 border-gray-400 pb-3 mt-2 h-20">
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تعداد لایک</span>
                    <div></div>
                </TableCell>
    
                <TableCell className="space-y-3">
                    <span className="text-sm text-gray-800">تعداد دیس‌لایک</span>
                    <div></div>
                </TableCell>     
              </TableRow>
    
            </TableBody>
          </Table>
        </div>
      );
}

export default CourseInfoTableMobView