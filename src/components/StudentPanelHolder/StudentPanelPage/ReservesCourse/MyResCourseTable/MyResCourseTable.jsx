import React from "react";
import {
  Chip,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BookDownloadIcon, Cancel01Icon, ViewIcon } from "hugeicons-react";
import { convertDate } from "../../../../../core/utils/DateToShamsi";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";
import { getQuery } from "../../../../../core/services/api/reactQuery/getQuery";

const MyResCourseTable = ({slice}) => {
  const columns = [
    { name: "نام", uid: "courseName" },
    { name: "تاریخ رزرو", uid: "reserverDate" },
    { name: "وضعیت", uid: "accept" },
    { name: "", uid: "actions" },
  ];
  getQuery("myReservesCourses", "/SharePanel/GetMyCoursesReserve");

  const res = usequery("myReservesCourses");

  const data = slice ? res?.slice(0, 5) : res;

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "courseName":
        return (
          <User
            avatarProps={{
              radius: "lg",
              src: user.tumbImageAddress,
              style: { width: "83px", height: "52px" },
            }}
            name={cellValue}
          ></User>
        );

      case "reserverDate":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {convertDate(cellValue)}
            </p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "accept":
        return (
          <>
            {cellValue ? (
              <Chip
                className="capitalize bg-blue text-white"
                size="sm"
                variant="flat"
              >
                تایید شده
              </Chip>
            ) : (
              <Chip
                className="capitalize bg-red text-white"
                size="sm"
                variant="flat"
              >
                تایید نشده
              </Chip>
            )}
          </>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <div>
              <Link to={`/courses/${user.courseId}`}>
                <Tooltip content="مشاهده">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <ViewIcon />
                  </span>
                </Tooltip>
              </Link>
            </div>

            <div>
              <Tooltip color="danger" content="حذف">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <Cancel01Icon />
                </span>
              </Tooltip>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      {data ? (
        <Table
          className="bg-gray-100"
          aria-label="Example table with custom cells"
        >
          <TableHeader className="bg-gray-200" columns={columns}>
            {(column) => (
              <TableColumn
                key={column.uid}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={data}>
            {(item) => (
              <TableRow key={item.courseId}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      ) : (
        <Skeleton className="rounded-2xl w-full min-h-52 h-full" />
      )}
    </>
  );
};

export default MyResCourseTable;
