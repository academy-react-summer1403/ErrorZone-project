import React, { useState } from "react";
import {
  Chip,
  Pagination,
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
import { postQuery } from "../../../../../core/services/api/reactQuery/postQuery";
import { ReservCourseModal } from "./ReservCourseModal";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";

const MyFavCourseTable = () => {
  const [page, setPage] = useState(1)
  const columns = [
    { name: "نام", uid: "courseTitle" },
    { name: "مدرس", uid: "teacheName" },
    { name: "آخرین آپدیت", uid: "lastUpdate" },
    { name: "سطح", uid: "levelName" },
    { name: "", uid: "actions" },
  ];
const data = usequery("myFavCourses");
  const { favoriteCourseDto } = data ? data : [];

  console.log(favoriteCourseDto);

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
      case "teacheName":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            {/* <p className="text-bold text-sm capitalize text-default-400">{user.team}</p> */}
          </div>
        );
      case "lastUpdate":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {convertDate(cellValue)}
            </p>
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
            <ReservCourseModal
              courseId={user.courseId}
              courseTitle={user.courseTitle}
            />
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

      <Table
        className="bg-gray-100"
        aria-label="Example table with custom cells"
        bottomContent={
          <div
            className="flex w-full justify-center"
            style={{ direction: "ltr" }}
          >
            <Pagination
              // isCompact
              loop
              showControls
              showShadow
              color="primary"
              page={page}
              total={Math.ceil(data?.totalCount / 8)}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
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
        <TableBody items={favoriteCourseDto}>
          {(item) => (
            <TableRow key={item.courseId}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

  );
};

export default MyFavCourseTable;
