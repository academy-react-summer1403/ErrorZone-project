import React, { useState } from "react";
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
  Pagination,
  useDisclosure,
} from "@nextui-org/react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { EyeIcon } from "./EyeIcon";
// import {columns, users} from "./data";

// import { usequery } from "../../../../../core/services/api/reactQuery/usequery";

import {
  BookDownloadIcon,
  Cancel01Icon,
  MoneyAdd01Icon,
  ViewIcon,
} from "hugeicons-react";
import { Link, useNavigate } from "react-router-dom";
import { getQuery } from "../../../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";
import PayModal from "../../../../common/PayModal/PayModal";

const MyCourseTable = ({ isDashboard }) => {
  const [page, setPage] = useState(1);
  const [courseData, setCourseData] = useState();

  const columns = [
    { name: "نام", uid: "courseTitle" },
    { name: "مدرس", uid: "fullName" },
    { name: "سطح", uid: "levelName" },
    { name: "اعمال", uid: "actions" },
  ];
  if (isDashboard) {
    getQuery(
      "MyCourses",
      `/SharePanel/GetMyCourses?PageNumber=${page}&RowsOfPage=2&SortingCol=DESC&SortType=LastUpdate`,
      page
    );
  } else {
    getQuery(
      "MyCourses",
      `/SharePanel/GetMyCourses?PageNumber=${page}&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate`,
      page
    );
  }

  const data = usequery("MyCourses", page);

  // const { listOfMyCourses } = data ? data : [];
  const navigate = useNavigate();
  const { isOpen, onOpenChange, onOpen } = useDisclosure();

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
          <div className="relative flex justify-center items-center gap-3">
            <div className="w-fit">
              <Link to={`/courses/${user.courseId}`}>
                <Tooltip content="مشاهده">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <ViewIcon color="black" />
                  </span>
                </Tooltip>
              </Link>
            </div>
            {user?.paymentStatus != "پرداخت نشده" ? null : (
              <>
                <div className="w-fit ">
                  <Tooltip content="پرداخت">
                    <MoneyAdd01Icon
                      onClick={() => {
                        setCourseData(user);
                        onOpen();
                      }}
                    />
                  </Tooltip>
                </div>
              </>
            )}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <>
      {data?.listOfMyCourses ? (
        <>
          <Table
            className="bg-gray-100"
            aria-label="Example table with custom cells"
            bottomContent={
              !isDashboard && (
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
                    total={
                      isDashboard
                        ? Math.ceil(data?.totalCount / 2)
                        : Math.ceil(data?.totalCount / 10)
                    }
                    onChange={(page) => setPage(page)}
                  />
                </div>
              )
            }
          >
            <TableHeader className="bg-gray-200" columns={columns}>
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid == "actions" ? "center" : "start"}
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody
              items={data?.listOfMyCourses ? data?.listOfMyCourses : []}
            >
              {(item) => (
                <TableRow key={item.courseId}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <PayModal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            courseData={courseData}
          />
        </>
      ) : (
        <Skeleton className="rounded-2xl w-full min-h-52 h-full" />
      )}
    </>
  );
};

export default MyCourseTable;
