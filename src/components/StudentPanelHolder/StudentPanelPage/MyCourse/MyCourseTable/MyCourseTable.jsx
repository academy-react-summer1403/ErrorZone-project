import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
  Skeleton,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
// import {columns, users} from "./data";

// import { usequery } from "../../../../../core/services/api/reactQuery/usequery";


import { BookDownloadIcon, Cancel01Icon, MoneyAdd01Icon, ViewIcon } from "hugeicons-react";
import { Link } from "react-router-dom";
import { getQuery } from "../../../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";

const MyCourseTable = () => {
  const columns = [
    { name: "نام", uid: "courseTitle" },
    { name: "مدرس", uid: "fullName" },
    { name: "سطح", uid: "levelName" },
    { name: "وضعیت پرداختی", uid: "coursePayments" },
  ];
  getQuery(
    "MyCourses",
    "/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate"
  );

  const data = usequery("MyCourses");

  const { listOfMyCourses } = data ? data : [];

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "courseTitle":
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
      case "fullName":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "levelName":
        return (
          <Chip
            className="capitalize bg-[#FF37F5] text-white"
            size="sm"
            variant="flat"
          >
            {cellValue}
          </Chip>
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
          </div>
        );
        case "coursePayments":
          return(
            <Chip
            className="capitalize  text-black"
            size="sm"
            variant="flat"
          >
            <MoneyAdd01Icon />
          </Chip>
          )
      default:
        return cellValue;
  

    }
  }, []);

  return (
    <>
      {listOfMyCourses ? (
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
          <TableBody items={listOfMyCourses ? listOfMyCourses : []}>
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

export default MyCourseTable;
