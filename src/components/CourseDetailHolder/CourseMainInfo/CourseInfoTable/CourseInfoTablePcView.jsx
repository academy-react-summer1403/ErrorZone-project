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
import { MakeDatePersian } from "../../../../core/utils/MakeDatePersian.js/MakeDatePersian";

const CourseInfoTablePcView = ({data}) => {
  return (
    <div className="hidden tablet:block">
      <Table hideHeader aria-label="Example static collection table">
        <TableHeader>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody>

          <TableRow key="1" className="border-b-2 flex justify-around  border-gray-400 ">

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">وضعیت</div>
              <Chip color="danger">{data?.courseStatusName}</Chip>
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">دسته‌بندی</div>
              {data?.techs?.map((item,index)=>(
              <Chip color="primary" className="mr-1 my-1" key={index}> {item} </Chip>
              ))}
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">سطح آموزشی</div>
              <Chip color="secondary">{data?.courseLevelName}</Chip>
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">استاد دوره</div>
              <div>{data?.teacherName}</div>
            </TableCell>

          </TableRow>

          <TableRow key="2" className="border-t-2 border-gray-400 flex justify-around ">
            <TableCell >
            <span className="text-sm text-gray-800 mb-2">تاریخ برگزاری</span>
            <div>{MakeDatePersian(data?.startTime)}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تاریخ اتمام</span>
            <div>{MakeDatePersian(data?.endTime)}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تعداد لایک</span>
            <div>{data?.likeCount}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تعداد دیس‌لایک</span>
            <div>{data?.dissLikeCount}</div>
            </TableCell>
            
          </TableRow>

        </TableBody>
      </Table>
    </div>
  );
};

export default CourseInfoTablePcView;
