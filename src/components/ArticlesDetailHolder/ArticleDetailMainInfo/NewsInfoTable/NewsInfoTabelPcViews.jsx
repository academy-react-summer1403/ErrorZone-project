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

const NewsInfoTablePcView = ({data}) => {

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

          <TableRow key="1" className="border-b-2 border-gray-400 pb-3 mt-2 ">

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">عنوان</div>
              <Chip color="danger">{data?.title}</Chip>
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">تعداد بیننده</div>
             
              <Chip color="primary"> {data?.currentView} </Chip>
              
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">سطح آموزشی</div>
              <Chip color="secondary">{data?.newsCatregoryName}</Chip>
            </TableCell>

            <TableCell>
              <div className="text-sm text-gray-800 mb-2">استاد دوره</div>
              <div>{data?.addUserFullName}</div>
            </TableCell>

          </TableRow>

          <TableRow key="2" className="border-t-2 border-gray-400 pb-3 mt-2 h-20">
            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تاریخ برگزاری</span>
            <div>{MakeDatePersian(data?.insertDate)}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تاریخ اتمام</span>
            <div>{MakeDatePersian(data?.insertDate)}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تعداد لایک</span>
            <div>{data?.currentLikeCount}</div>
            </TableCell>

            <TableCell>
            <span className="text-sm text-gray-800 mb-2">تعداد دیس‌لایک</span>
            <div>{data?.currentDissLikeCount}</div>
            </TableCell>
            
          </TableRow>

        </TableBody>
      </Table>
    </div>
  );
};

export default NewsInfoTablePcView;